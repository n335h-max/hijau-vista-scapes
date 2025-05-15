
import React from "react";
import { formatPhoneNumber } from "@/lib/utils";

interface BookingSummaryProps {
  contactDetails: {
    name: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    outsideNegeriSembilan?: boolean;
  };
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ contactDetails }) => {
  const { name, phone, email, address, service, outsideNegeriSembilan } = contactDetails;
  
  // Calculate total amount - base price is 0, add RM300 if outside Negeri Sembilan
  const additionalCharge = outsideNegeriSembilan ? 300 : 0;
  const totalAmount = additionalCharge;

  return (
    <div className="bg-hijau-blue/5 p-4 sm:p-6 rounded-lg border border-hijau-blue/30">
      <h3 className="font-medium text-hijau-blue mb-4 text-lg">Booking Summary</h3>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm text-hijau-blue/70">Name</p>
          <p className="font-medium">{name}</p>
        </div>
        
        <div>
          <p className="text-sm text-hijau-blue/70">Phone</p>
          <p className="font-medium">{formatPhoneNumber(phone)}</p>
        </div>
        
        <div>
          <p className="text-sm text-hijau-blue/70">Email</p>
          <p className="font-medium">{email}</p>
        </div>
        
        <div>
          <p className="text-sm text-hijau-blue/70">Address</p>
          <p className="font-medium">{address}</p>
        </div>
        
        <div>
          <p className="text-sm text-hijau-blue/70">Service Package</p>
          <p className="font-medium">{service}</p>
        </div>

        {outsideNegeriSembilan && (
          <div className="mt-4 border-t border-hijau-blue/20 pt-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-hijau-blue">Location Fee (Outside Negeri Sembilan)</p>
              <p className="font-semibold text-hijau-blue">RM 300</p>
            </div>
            <div className="flex justify-between items-center mt-2 font-bold text-hijau-blue">
              <p>Total Amount</p>
              <p>RM {totalAmount}</p>
            </div>
            <p className="text-xs text-hijau-blue/70 mt-2">
              * This amount will need to be paid via our payment gateway after confirming your booking.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSummary;
