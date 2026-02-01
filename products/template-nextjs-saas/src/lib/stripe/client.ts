import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

// Price IDs - replace with your actual Stripe Price IDs
export const PLANS = {
  free: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: ['Basic features', 'Limited usage', 'Community support'],
  },
  pro: {
    name: 'Pro',
    price: 1000, // ¥1,000/month
    priceId: 'price_xxx', // Replace with your Stripe Price ID
    features: ['All features', 'Unlimited usage', 'Priority support', 'API access'],
  },
} as const

export type PlanType = keyof typeof PLANS
