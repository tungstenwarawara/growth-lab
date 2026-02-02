import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
})

// Price IDs - replace with your actual Stripe Price IDs
export const PLANS = {
  free: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: ['基本機能', '100 API呼び出し/月', 'コミュニティサポート'],
  },
  pro: {
    name: 'Pro',
    price: 1000, // ¥1,000/month
    priceId: 'price_xxx', // Replace with your Stripe Price ID
    features: ['全機能利用可能', 'API呼び出し無制限', '優先サポート', 'APIアクセス'],
  },
} as const

export type PlanType = keyof typeof PLANS
