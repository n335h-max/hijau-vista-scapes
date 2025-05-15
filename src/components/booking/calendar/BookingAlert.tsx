
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarIcon } from "lucide-react";

const BookingAlert = () => {
  return (
    <Alert className="bg-blue-50 border-blue-200 text-xs sm:text-sm">
      <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
      <AlertTitle className="text-blue-700 font-medium text-sm sm:text-base">Booking Information</AlertTitle>
      <AlertDescription className="text-blue-600 mt-1">
        <p>Consultations are available Monday-Saturday, from 10:00 AM to 4:00 PM.</p>
        <p className="mt-1">Please book at least 24 hours in advance.</p>
      </AlertDescription>
    </Alert>
  );
};

export default BookingAlert;
