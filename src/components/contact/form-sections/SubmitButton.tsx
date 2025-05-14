
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const SubmitButton: React.FC = () => {
  return (
    <div className="pt-6">
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-hijau-blue to-hijau-blue-dark hover:from-hijau-blue-dark hover:to-hijau-blue shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 rounded-md text-white font-medium border border-hijau-blue/20"
        size="lg"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Proceed to Booking Calendar
        <ArrowRight className="ml-1 h-5 w-5" />
      </Button>
      <p className="text-gray-500 text-sm text-center mt-3">
        Select your details and package to proceed to our booking calendar.
        <span className="text-hijau-yellow-dark font-medium"> We're open Monday to Saturday, 9am to 5:30pm.</span>
      </p>
    </div>
  );
};

export default SubmitButton;
