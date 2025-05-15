
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { useMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const SubmitButton: React.FC = () => {
  const form = useFormContext();
  const isMobile = useMobile();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = async (values) => {
    // If location is outside Negeri Sembilan, handle payment first
    if (values.outsideNegeriSembilan) {
      try {
        toast({
          title: "Processing payment...",
          description: "You'll be redirected to our secure payment gateway.",
        });
        
        // Call the Supabase Edge Function to create a payment session
        const { data, error } = await supabase.functions.invoke("create-payment-session", {
          body: { contactDetails: values }
        });
        
        if (error) {
          throw new Error(error.message || "Failed to initialize payment");
        }
        
        if (data?.url) {
          // Store form data in localStorage so we can retrieve it after payment
          localStorage.setItem("contactFormData", JSON.stringify(values));
          
          // Redirect to Stripe Checkout
          window.location.href = data.url;
          return; // Stop here, we'll continue after payment
        } else {
          throw new Error("No payment URL received");
        }
      } catch (error) {
        console.error("Payment error:", error);
        toast({
          title: "Payment Error",
          description: error.message || "Could not process payment. Please try again.",
          variant: "destructive",
        });
        return; // Don't proceed if payment failed
      }
    } else {
      // Regular flow for locations in Negeri Sembilan (no payment needed)
      navigate("/booking", { state: { contactDetails: values } });
    }
  };
  
  return (
    <div className="pt-6">
      <Button 
        type="submit" 
        onClick={() => form.handleSubmit(handleSubmit)()} 
        className="w-full bg-gradient-to-r from-hijau-blue to-hijau-blue-dark hover:from-hijau-blue-dark hover:to-hijau-blue shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 rounded-md text-white font-medium border border-hijau-blue/20"
        size="lg"
      >
        <Calendar className="mr-2 h-5 w-5" />
        {isMobile ? "Proceed to Booking" : "Proceed to Booking Calendar"}
        <ArrowRight className="ml-1 h-5 w-5" />
      </Button>
      <p className="text-gray-500 text-xs md:text-sm text-center mt-3">
        Select your details and package to proceed to our booking calendar.
        <span className="text-hijau-yellow-dark font-medium"> We're open Monday to Saturday, 9am to 5:30pm.</span>
      </p>
    </div>
  );
};

export default SubmitButton;
