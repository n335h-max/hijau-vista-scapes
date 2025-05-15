
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contactDetails } = await req.json();
    
    if (!contactDetails || !contactDetails.outsideNegeriSembilan) {
      return new Response(
        JSON.stringify({ 
          error: "Invalid request or payment not needed (not outside Negeri Sembilan)" 
        }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400 
        }
      );
    }

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Create a one-time payment session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "myr",
            product_data: {
              name: "Landscape Service - Location Fee (Outside Negeri Sembilan)",
              description: "Additional fee for locations outside of Negeri Sembilan",
            },
            unit_amount: 30000, // RM300 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/booking?paymentSuccess=true`,
      cancel_url: `${req.headers.get("origin")}/contact?paymentCanceled=true`,
      client_reference_id: contactDetails.email || "",
      customer_email: contactDetails.email || "",
    });

    // Create Supabase client with the service role key to write to the database if needed
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    
    if (supabaseUrl && supabaseServiceKey) {
      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false }
      });
      
      // Optionally log the payment attempt
      await supabaseAdmin.from("payment_logs").insert({
        email: contactDetails.email,
        name: contactDetails.name,
        amount: 300,
        stripe_session_id: session.id,
        status: "pending"
      });
    }

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200
      }
    );
  } catch (error) {
    console.error("Error creating payment session:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500
      }
    );
  }
});
