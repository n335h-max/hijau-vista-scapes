
import React from "react";
import { Card } from "@/components/ui/card";

interface BookingSummaryProps {
  contactDetails: {
    name: string;
    phone: string;
    email: string;
    address: string;
    service: string;
  };
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ contactDetails }) => {
  return (
    <Card className="overflow-hidden border-hijau-blue/10">
      <div className="bg-hijau-blue text-white p-3 sm:p-4">
        <h3 className="font-medium text-sm sm:text-base">Booking Summary</h3>
      </div>
      <div className="p-3 sm:p-4 space-y-3">
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Name:</p>
          <p className="font-medium text-sm sm:text-base">{contactDetails.name}</p>
        </div>
        
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Phone:</p>
          <p className="font-medium text-sm sm:text-base">{contactDetails.phone}</p>
        </div>
        
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Email:</p>
          <p className="font-medium text-sm sm:text-base">{contactDetails.email}</p>
        </div>
        
        {contactDetails.address && (
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Address:</p>
            <p className="font-medium text-sm sm:text-base">{contactDetails.address}</p>
          </div>
        )}
        
        {contactDetails.service && (
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Service Package:</p>
            <p className="font-medium text-sm sm:text-base">{contactDetails.service}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default BookingSummary;
