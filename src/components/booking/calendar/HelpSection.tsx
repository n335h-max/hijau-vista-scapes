
import React from "react";
import { PhoneCall, Clock } from "lucide-react";

const HelpSection: React.FC = () => {
  return (
    <div className="eco-card animate-fade-in">
      <h3 className="font-medium text-hijau-forest mb-3 flex items-center">
        <PhoneCall className="w-5 h-5 mr-2 text-hijau-leaf" />
        Need help?
      </h3>
      <p className="text-sm text-gray-700 mb-3 pl-7">
        Call us at <span className="font-medium">+60 11-1062 9990</span> if you 
        need assistance with your booking.
      </p>
      <div className="flex items-start mt-4">
        <Clock className="w-5 h-5 mr-2 text-hijau-leaf flex-shrink-0" />
        <p className="text-sm text-gray-700">
          Our booking hours are Monday to Friday, 9am to 5pm.
        </p>
      </div>
    </div>
  );
};

export default HelpSection;
