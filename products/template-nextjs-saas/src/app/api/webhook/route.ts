import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe/client'
import { createClient } from '@supabase/supabase-js'

// Create Supabase admin client for webhook (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return new NextResponse('Webhook signature verification failed', {
      status: 400,
    })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session

      // Get user ID from metadata (set during checkout creation)
      const userId = session.metadata?.supabase_user_id

      if (userId) {
        // Update user's subscription status in database
        const { error } = await supabaseAdmin
          .from('profiles')
          .update({
            subscription_status: 'active',
            stripe_customer_id: session.customer as string,
            subscription_price_id: session.metadata?.price_id || null,
          })
          .eq('id', userId)

        if (error) {
          console.error('Failed to update profile:', error)
        } else {
          console.log('Subscription activated for user:', userId)
        }
      }
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      // Find user by Stripe customer ID and update status
      const status = subscription.status === 'active' ? 'active' :
                     subscription.status === 'canceled' ? 'canceled' :
                     subscription.status === 'past_due' ? 'past_due' : 'free'

      const { error } = await supabaseAdmin
        .from('profiles')
        .update({ subscription_status: status })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('Failed to update subscription status:', error)
      } else {
        console.log('Subscription updated for customer:', customerId)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      // Mark subscription as canceled
      const { error } = await supabaseAdmin
        .from('profiles')
        .update({
          subscription_status: 'canceled',
          subscription_price_id: null,
        })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('Failed to update canceled subscription:', error)
      } else {
        console.log('Subscription canceled for customer:', customerId)
      }
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      // Handle successful payment - could log to a payments table
      console.log('Payment succeeded:', invoice.id)
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      const customerId = invoice.customer as string

      // Mark subscription as past_due
      const { error } = await supabaseAdmin
        .from('profiles')
        .update({ subscription_status: 'past_due' })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('Failed to update past_due status:', error)
      } else {
        console.log('Payment failed, marked as past_due:', customerId)
      }
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return new NextResponse('OK', { status: 200 })
}
