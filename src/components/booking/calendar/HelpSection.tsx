
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Phone } from "lucide-react";

const HelpSection = () => {
  return (
    <Card className="border-hijau-yellow/20 bg-hijau-yellow/5">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-start">
          <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-hijau-yellow flex-shrink-0 mr-3" />
          <div>
            <h3 className="font-medium text-sm sm:text-base mb-1">Need Help?</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2">
              If you have any questions or need assistance with your booking, please call our customer service.
            </p>
            <div className="flex items-center text-hijau-blue-dark font-medium">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm sm:text-base">+60 11-1062 9990</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelpSection;
