
import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

interface BookingFormHeaderProps {
  setIsOpen: (isOpen: boolean) => void;
}

const BookingFormHeader: React.FC<BookingFormHeaderProps> = ({ setIsOpen }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-hijau-blue flex items-center">
        <CalendarClock className="mr-2 h-5 w-5" />
        Add Manual Booking
      </h2>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="text-gray-500 hover:text-gray-700"
      >
        Cancel
      </Button>
    </div>
  );
};

export default BookingFormHeader;
