
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import BookingProcess from "@/components/booking/BookingProcess";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactDetails, setContactDetails] = useState<any>(null);
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
      
      // Update booking details with the returned data from Supabase
      // Convert date string back to Date object for the UI
      const savedBooking = {
        ...data[0],
        date: new Date(data[0].date)
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

  // Main render
  return (
    <>
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1631892896784-cec78594f266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container-custom relative h-full flex items-center px-4 sm:px-6">
          <div className="max-w-xl text-white">
            <h1 className="heading-large mb-3 sm:mb-4 relative text-2xl sm:text-3xl md:text-4xl">
              Book Your Consultation
              <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-16 sm:w-24 h-1 bg-hijau-yellow"></span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 opacity-90">
              Schedule your landscaping consultation to begin the journey
              to your perfect outdoor space.
            </p>
          </div>
        </div>
      </section>

      <BookingProcess />

      <section className="section-padding bg-gray-50 px-4 sm:px-6">
        <div className="container-custom">
          {!isConfirmed ? (
            contactDetails ? (
              <BookingCalendar
                contactDetails={{
                  ...contactDetails,
                  service: contactDetails.package // Map package to service for BookingCalendar
                }}
                onBookingComplete={handleBookingComplete}
              />
            ) : (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hijau-blue mx-auto mb-4"></div>
                <p className="text-hijau-blue">Loading your booking details...</p>
              </div>
            )
          ) : (
            <BookingConfirmation bookingDetails={bookingDetails} />
          )}
        </div>
      </section>
    </>
  );
};

export default BookingPage;
