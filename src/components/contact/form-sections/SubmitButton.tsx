
import React from "react";
import { Button } from "@/components/ui/button";

const SubmitButton: React.FC = () => {
  return (
    <div className="pt-4">
      <Button 
        type="submit" 
        className="w-full bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
        size="lg"
      >
        Proceed to Booking Calendar
      </Button>
      <p className="text-gray-500 text-sm text-center mt-3">
        Select your details to proceed to our booking calendar.
      </p>
    </div>
  );
};

export default SubmitButton;
