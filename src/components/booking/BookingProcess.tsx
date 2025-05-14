
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Phone, Check } from "lucide-react";

const BookingProcess = () => {
  const steps = [
    {
      icon: <Phone className="h-8 w-8 text-white" />,
      title: "Contact Us",
      description: "Fill out our contact form with your details",
      color: "bg-hijau-blue",
      active: false,
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Schedule Consultation",
      description: "Select your preferred date and time",
      color: "bg-hijau-blue-light",
      active: true,
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "On-Site Visit",
      description: "Our experts will visit your location",
      color: "bg-hijau-yellow-dark",
      active: false,
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: "Project Commencement",
      description: "Begin transforming your outdoor space",
      color: "bg-hijau-yellow",
      active: false,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-medium text-hijau-blue mb-3">Your Booking Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You're at step 2 of our process. Choose your preferred consultation date and time to continue.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0">
            <div className="absolute top-0 left-0 h-full bg-hijau-blue w-[30%]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center mb-4 ${step.active ? 'ring-4 ring-hijau-yellow/30 animate-pulse-gentle' : ''}`}>
                  {step.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-1 ${step.active ? 'text-hijau-blue' : 'text-gray-700'}`}>{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
