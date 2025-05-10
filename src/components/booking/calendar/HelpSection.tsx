
import React from "react";

const HelpSection: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium text-hijau-blue mb-2">Need help?</h3>
      <p className="text-sm text-gray-600 mb-2">
        Call us at <span className="font-medium">+60 11-1062 9990</span> if you 
        need assistance with your booking.
      </p>
      <p className="text-sm text-gray-600">
        Our booking hours are Monday to Friday, 9am to 5pm.
      </p>
    </div>
  );
};

export default HelpSection;
