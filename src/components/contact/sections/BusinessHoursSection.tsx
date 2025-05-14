
import React from "react";
import { Clock } from "lucide-react";

const BusinessHoursSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-transparent to-hijau-yellow/5 p-6 rounded-lg border border-hijau-yellow/10">
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-hijau-blue/10 p-3 rounded-full text-hijau-blue">
          <Clock className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-hijau-blue">Business Hours</h3>
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-2">
              <div className="py-1.5 px-3 rounded bg-hijau-blue/5">
                <span className="font-medium text-hijau-dark">Monday - Friday:</span>
              </div>
              <div className="py-1.5 px-3 rounded bg-hijau-blue/10 text-center">
                <span className="font-semibold text-hijau-blue">9:00 AM - 5:30 PM</span>
              </div>
              
              <div className="py-1.5 px-3 rounded bg-hijau-blue/5">
                <span className="font-medium text-hijau-dark">Saturday:</span>
              </div>
              <div className="py-1.5 px-3 rounded bg-hijau-blue/10 text-center">
                <span className="font-semibold text-hijau-blue">9:00 AM - 5:30 PM</span>
              </div>
              
              <div className="py-1.5 px-3 rounded bg-hijau-yellow/5">
                <span className="font-medium text-hijau-dark">Sunday:</span>
              </div>
              <div className="py-1.5 px-3 rounded bg-hijau-yellow/10 text-center">
                <span className="font-semibold text-hijau-dark">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHoursSection;
