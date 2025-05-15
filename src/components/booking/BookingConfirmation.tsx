
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
    address?: string;
    outsideNegeriSembilan?: boolean;
  };
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ bookingDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 sm:p-8 max-w-2xl mx-auto transition-all animate-fade-in">
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center bg-green-100 p-2 sm:p-3 rounded-full mb-3 sm:mb-4">
          <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
        </div>
        <h2 className="heading-medium text-hijau-blue text-xl sm:text-2xl">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Thank you for choosing Hijau Group Landscape Services
        </p>
      </div>

      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
        <h3 className="font-medium text-hijau-blue mb-3 sm:mb-4 pb-2 border-b border-gray-200">
          Booking Details
        </h3>
        <div className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-2 gap-1 sm:gap-2 text-sm sm:text-base">
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

            {bookingDetails.address && (
              <>
                <p className="text-gray-500">Address:</p>
                <p className="font-medium">{bookingDetails.address}</p>
              </>
            )}

            {bookingDetails.outsideNegeriSembilan && (
              <>
                <p className="text-gray-500">Location Fee:</p>
                <p className="font-medium text-green-600">Paid (RM 300)</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 border border-blue-100">
        <h3 className="font-medium text-hijau-blue mb-2">What's Next?</h3>
        <p className="text-gray-600 mb-3 text-sm sm:text-base">
          We've sent a confirmation email to <span className="font-medium">{bookingDetails.email}</span> with all 
          the details of your booking.
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          Our team will contact you shortly to confirm your appointment and answer any questions
          you might have.
        </p>
      </div>

      <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="w-full"
        >
          Return to Home
        </Button>
        <Button
          onClick={() => navigate("/services")}
          className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
        >
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
