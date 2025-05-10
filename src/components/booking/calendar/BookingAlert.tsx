
import React from "react";
import { AlertTriangle } from "lucide-react";

const BookingAlert: React.FC = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
        <div>
          <h4 className="font-medium text-amber-800">Booking Information</h4>
          <p className="text-sm text-amber-700 mt-1">
            Time slots that are already booked will not be shown. We only display available time slots to prevent double bookings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingAlert;
