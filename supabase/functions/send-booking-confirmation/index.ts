
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingConfirmationRequest {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  address: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingDetails: BookingConfirmationRequest = await req.json();
    const { name, email, service, date, time, address } = bookingDetails;

    console.log("Sending confirmation email to:", email);
    
    // Format date for readability
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Updated from address to use the new domain
    const emailResponse = await resend.emails.send({
      from: "Hijau Landscape <admin@hijaugrouplandscape.com.my>", 
      to: [email],
      subject: "Your Landscaping Appointment is Confirmed!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2c5282; margin-top: 30px;">Booking Confirmation</h1>
          <p>Hello ${name},</p>
          <p>Thank you for choosing Hijau Group Landscape Services! Your appointment has been successfully scheduled.</p>
          
          <div style="background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #2c5282; font-size: 18px; margin-top: 0;">Appointment Details</h2>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Address:</strong> ${address}</p>
          </div>
          
          <p>Our team will be in touch shortly to confirm all details. If you need to make any changes to your appointment, please contact us at (555) 123-4567.</p>
          
          <p>We look forward to working with you!</p>
          
          <p style="margin-top: 30px;">Best regards,<br>The Hijau Landscape Team</p>
        </div>
      `,
    });

    // Handle Resend API response - including specific error for domain validation
    if (emailResponse.error) {
      console.error("Email error:", emailResponse.error);
      
      if (emailResponse.error.message?.includes("verify a domain")) {
        return new Response(
          JSON.stringify({
            error: "Domain verification required",
            message: "You need to verify the domain hijaugrouplandscape.com.my at resend.com/domains and update the 'from' email address",
            details: emailResponse.error
          }),
          {
            status: 403,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
      
      return new Response(
        JSON.stringify({ error: emailResponse.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
