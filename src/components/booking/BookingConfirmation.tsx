
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BookingConfirmationProps {
  bookingDetails: {
    name: string;
    service: string;
    date: Date;
    time: string;
    email: string;
  };
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ bookingDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto transition-all animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="heading-medium text-hijau-blue">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for choosing Hijau Group Landscape Services
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-medium text-hijau-blue mb-4 pb-2 border-b border-gray-200">
          Booking Details
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-500">Name:</p>
            <p className="font-medium">{bookingDetails.name}</p>
            
            <p className="text-gray-500">Service:</p>
            <p className="font-medium">{bookingDetails.service}</p>
            
            <p className="text-gray-500">Date:</p>
            <p className="font-medium">
              {bookingDetails.date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            
            <p className="text-gray-500">Time:</p>
            <p className="font-medium">{bookingDetails.time}</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
        <h3 className="font-medium text-hijau-blue mb-2">What's Next?</h3>
        <p className="text-gray-600 mb-3">
          We've sent a confirmation email to <span className="font-medium">{bookingDetails.email}</span> with all 
          the details of your booking.
        </p>
        <p className="text-gray-600">
          Our team will contact you shortly to confirm your appointment and answer any questions
          you might have.
        </p>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="flex-1"
        >
          Return to Home
        </Button>
        <Button
          onClick={() => navigate("/services")}
          className="flex-1 bg-hijau-blue hover:bg-hijau-blue/90"
        >
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
