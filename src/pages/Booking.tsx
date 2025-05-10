
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingConfirmation from "@/components/booking/BookingConfirmation";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get contact details from location state or redirect back to contact page
  useEffect(() => {
    // If no contact details, redirect to contact page
    if (!location.state || !location.state.contactDetails) {
      toast({
        title: "Information Missing",
        description: "Please fill out the contact form first.",
        variant: "destructive",
      });
      navigate("/contact");
    }
  }, [location.state, navigate, toast]);

  const handleBookingComplete = async (date: Date, time: string) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    // Get contact details from location state
    const contactDetails = location.state.contactDetails;
    
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
            address: savedBooking.address
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

  if (!location.state || !location.state.contactDetails) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="heading-large mb-4 relative">
              Book Your Appointment
              <span className="absolute -bottom-4 left-0 w-24 h-1 bg-hijau-yellow"></span>
            </h1>
            <p className="text-lg md:text-xl mt-6 opacity-90">
              Select your preferred date and time for your landscaping consultation
            </p>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {!isConfirmed ? (
            <BookingCalendar
              contactDetails={location.state.contactDetails}
              onBookingComplete={handleBookingComplete}
            />
          ) : (
            <BookingConfirmation bookingDetails={bookingDetails} />
          )}
        </div>
      </section>
    </>
  );
};

export default Booking;
