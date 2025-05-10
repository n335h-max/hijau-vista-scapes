
import React from "react";

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
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="font-medium text-hijau-blue mb-4">Booking Summary</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium">{contactDetails.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Contact</p>
          <p className="font-medium">{contactDetails.phone}</p>
          <p className="text-sm">{contactDetails.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">{contactDetails.service}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Address</p>
          <p className="font-medium">{contactDetails.address}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
