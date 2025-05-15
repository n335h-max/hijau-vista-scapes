
import React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface ConfirmationPanelProps {
  selectedDate: Date | undefined;
  selectedTime: string | null;
  onBookingSubmit: () => void;
}

const ConfirmationPanel: React.FC<ConfirmationPanelProps> = ({
  selectedDate,
  selectedTime,
  onBookingSubmit
}) => {
  if (!selectedDate || !selectedTime) return null;

  return (
    <div className="bg-hijau-blue/5 p-4 sm:p-6 rounded-lg border border-hijau-blue/30 animate-fade-in">
      <h3 className="font-medium text-hijau-blue mb-2 text-sm sm:text-base">Selected Appointment</h3>
      <p className="text-base sm:text-lg font-semibold">
        {format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
      </p>
      <Button
        onClick={onBookingSubmit}
        className="w-full mt-4 bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
        size="lg"
      >
        Confirm Booking
      </Button>
    </div>
  );
};

export default ConfirmationPanel;
