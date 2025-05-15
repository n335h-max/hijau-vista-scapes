
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Phone, Check } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const BookingProcess = () => {
  const isMobile = useMobile();
  
  const steps = [
    {
      icon: <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "Contact Us",
      description: "Fill out our contact form with your details",
      color: "bg-hijau-blue",
      active: false,
    },
    {
      icon: <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "Schedule Consultation",
      description: "Select your preferred date and time",
      color: "bg-hijau-blue-light",
      active: true,
    },
    {
      icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "On-Site Visit",
      description: "Our experts will visit your location",
      color: "bg-hijau-yellow-dark",
      active: false,
    },
    {
      icon: <Check className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "Project Commencement",
      description: "Begin transforming your outdoor space",
      color: "bg-hijau-yellow",
      active: false,
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="heading-medium text-hijau-blue mb-2 sm:mb-3 text-2xl sm:text-3xl">Your Booking Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            You're at step 2 of our process. Choose your preferred consultation date and time to continue.
          </p>
        </div>

        <div className="relative">
          {/* Progress line - hidden on mobile, shown on larger screens */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0">
            <div className="absolute top-0 left-0 h-full bg-hijau-blue w-[30%]"></div>
          </div>

          {isMobile ? (
            // Mobile layout - vertical steps
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className={`flex items-center p-3 rounded-lg ${step.active ? 'bg-gray-50 border border-hijau-blue/20' : ''}`}>
                  <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center mr-4 ${step.active ? 'ring-2 ring-hijau-yellow/30 animate-pulse-gentle' : ''}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={`text-base font-semibold mb-0.5 ${step.active ? 'text-hijau-blue' : 'text-gray-700'}`}>{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop layout - horizontal steps
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`${step.color} h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${step.active ? 'ring-4 ring-hijau-yellow/30 animate-pulse-gentle' : ''}`}>
                    {step.icon}
                  </div>
                  <h3 className={`text-base sm:text-lg font-semibold mb-1 text-center ${step.active ? 'text-hijau-blue' : 'text-gray-700'}`}>{step.title}</h3>
                  <p className="text-gray-600 text-center text-xs sm:text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
