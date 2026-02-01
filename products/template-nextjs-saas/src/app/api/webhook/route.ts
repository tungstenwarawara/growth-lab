import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe/client'

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
      // Handle successful checkout
      // Update user's subscription status in database
      console.log('Checkout completed:', session.id)
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      // Handle subscription update
      console.log('Subscription updated:', subscription.id)
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      // Handle subscription cancellation
      console.log('Subscription deleted:', subscription.id)
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      // Handle successful payment
      console.log('Payment succeeded:', invoice.id)
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      // Handle failed payment
      console.log('Payment failed:', invoice.id)
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return new NextResponse('OK', { status: 200 })
}
