export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          stripe_customer_id: string | null
          subscription_status: 'free' | 'active' | 'canceled' | 'past_due' | null
          subscription_price_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          subscription_status?: 'free' | 'active' | 'canceled' | 'past_due' | null
          subscription_price_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          subscription_status?: 'free' | 'active' | 'canceled' | 'past_due' | null
          subscription_price_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

export type Profile = Database['public']['Tables']['profiles']['Row']
