
import React from "react";
import { Phone, MapPin, FilePen, Lock, Package } from "lucide-react";

const BookingProcessPreview = () => {
  const steps = [
    { icon: <Phone className="h-6 w-6" />, title: "Contact Us" },
    { icon: <MapPin className="h-6 w-6" />, title: "Site Visit" },
    { icon: <FilePen className="h-6 w-6" />, title: "Design" },
    { icon: <Lock className="h-6 w-6" />, title: "Confirm" },
    { icon: <Package className="h-6 w-6" />, title: "Begin Project" }
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h3 className="font-semibold text-hijau-blue mb-4">Our Process</h3>
      <div className="flex flex-wrap justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center w-1/5 relative">
            <div className="bg-hijau-light p-2 rounded-full mb-2">
              {step.icon}
            </div>
            <p className="text-sm font-medium">{step.title}</p>
            
            {/* Connector line between steps */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 z-0"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingProcessPreview;
