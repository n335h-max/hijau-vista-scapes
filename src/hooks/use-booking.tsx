
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ContactDetails {
  name: string;
  email: string;
  phone: string;
  package: string;
  address?: string;
  outsideNegeriSembilan?: boolean;
}

export const useBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactDetails, setContactDetails] = useState<ContactDetails | null>(null);
  const paymentSuccess = searchParams.get("paymentSuccess") === "true";

  // Get contact details from location state or localStorage (if coming from payment)
  useEffect(() => {
    // Check if we're coming back from successful payment
    if (paymentSuccess) {
      const savedFormData = localStorage.getItem("contactFormData");
      
      if (savedFormData) {
        try {
          const parsedData = JSON.parse(savedFormData);
          setContactDetails(parsedData);
          
          // Show success toast
          toast({
            title: "Payment Successful",
            description: "Your location fee has been paid. Now please select your appointment time.",
          });
          
          // Clear the saved form data
          localStorage.removeItem("contactFormData");
        } catch (error) {
          console.error("Error parsing saved form data:", error);
          navigate("/contact");
        }
      } else {
        // If no saved data found, redirect to contact page
        toast({
          title: "Information Missing",
          description: "Please fill out the contact form again.",
          variant: "destructive",
        });
        navigate("/contact");
      }
    } else if (location.state && location.state.contactDetails) {
      // Regular flow - coming directly from Contact form
      setContactDetails(location.state.contactDetails);
    } else {
      // No data found, redirect to contact page
      toast({
        title: "Information Missing",
        description: "Please fill out the contact form first.",
        variant: "destructive",
      });
      navigate("/contact");
    }
  }, [location.state, navigate, toast, paymentSuccess]);

  const handleBookingComplete = async (date: Date, time: string) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    if (!contactDetails) {
      toast({
        title: "Error",
        description: "Contact details missing. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Create booking object
    const newBookingDetails = {
      name: contactDetails.name,
      email: contactDetails.email,
      phone: contactDetails.phone,
      service: contactDetails.package,
      // Convert Date to ISO string for Supabase
      date: date.toISOString(),
      time: time,
      address: contactDetails.address || "Not provided",
      outsideNegeriSembilan: contactDetails.outsideNegeriSembilan || false,
    };
    
    try {
      // Save booking to Supabase
      const { data, error } = await supabase
        .from('bookings')
        .insert(newBookingDetails)
        .select();
      
      if (error) {
        throw error;
      }
      
      // Create a complete booking details object that has all needed properties
      // regardless of what Supabase returns
      const savedBooking = {
        ...data[0],
        date: new Date(data[0].date),
        // Ensure outsideNegeriSembilan is available from our original request
        outsideNegeriSembilan: newBookingDetails.outsideNegeriSembilan
      };
      
      setBookingDetails(savedBooking);
      
      // Send confirmation email
      try {
        const emailResponse = await supabase.functions.invoke('send-booking-confirmation', {
          body: {
            name: savedBooking.name,
            email: savedBooking.email,
            service: savedBooking.service,
            date: savedBooking.date.toISOString(),
            time: savedBooking.time,
            address: savedBooking.address,
            outsideNegeriSembilan: savedBooking.outsideNegeriSembilan
          },
        });
        
        if (emailResponse.error) {
          console.error("Email sending failed:", emailResponse.error);
          toast({
            title: "Email Notification",
            description: "Your booking was confirmed, but we couldn't send the confirmation email.",
            variant: "default",
          });
        }
      } catch (emailError) {
        // If email fails, log error but continue with booking confirmation
        console.error("Error sending confirmation email:", emailError);
      }
      
      setIsConfirmed(true);
      
      toast({
        title: "Booking Confirmed!",
        description: "Your appointment has been successfully scheduled. A confirmation email has been sent to your email address.",
      });
      
      console.log("Booking confirmed and saved to Supabase:", savedBooking);
    } catch (error: any) {
      console.error("Error saving booking:", error);
      toast({
        title: "Booking Error",
        description: error.message || "Failed to save your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isConfirmed,
    bookingDetails,
    contactDetails,
    isSubmitting,
    handleBookingComplete
  };
};
