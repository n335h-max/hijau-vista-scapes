
-- Create a table to track payment attempts and statuses
CREATE TABLE IF NOT EXISTS public.payment_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  amount NUMERIC NOT NULL,
  stripe_session_id TEXT,
  status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add payment_completed field to bookings table
ALTER TABLE IF EXISTS public.bookings 
ADD COLUMN IF NOT EXISTS payment_completed BOOLEAN DEFAULT false;

-- Update bookings table to track payment information
ALTER TABLE IF EXISTS public.bookings 
ADD COLUMN IF NOT EXISTS payment_amount NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS stripe_session_id TEXT;
