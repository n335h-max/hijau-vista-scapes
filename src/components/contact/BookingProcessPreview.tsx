
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Phone, Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BookingProcessPreview = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Contact Us",
      description: "Fill out our contact form",
      color: "bg-hijau-blue",
    },
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Schedule",
      description: "Choose your date and time",
      color: "bg-hijau-blue-light",
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Site Visit",
      description: "On-site assessment",
      color: "bg-hijau-yellow-dark",
    },
    {
      icon: <Check className="h-6 w-6 text-white" />,
      title: "Begin Project",
      description: "Start your transformation",
      color: "bg-hijau-yellow",
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="heading-medium text-hijau-blue mb-3 relative inline-block">
          Our Booking Process
          <span className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-hijau-yellow rounded-full"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Follow these simple steps to begin your landscaping journey with Hijau Group
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: false,
        }}
        className="w-full"
        ref={carouselRef}
      >
        <CarouselContent className="py-2">
          {steps.map((step, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4 pl-2 pr-2">
              <Card className="overflow-hidden border-none shadow hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <div className={`${step.color} h-2 w-full`}></div>
                  <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center absolute -top-6 left-4 shadow border-2 border-white transform -translate-y-1/4 z-10`}>
                    {step.icon}
                  </div>
                  <CardContent className="pt-8 pb-4 px-4">
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
          
          {/* Repeat the first few items to create a seamless loop effect */}
          {steps.slice(0, 3).map((step, index) => (
            <CarouselItem key={`repeat-${index}`} className="basis-full sm:basis-1/2 lg:basis-1/4 pl-2 pr-2">
              <Card className="overflow-hidden border-none shadow hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <div className={`${step.color} h-2 w-full`}></div>
                  <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center absolute -top-6 left-4 shadow border-2 border-white transform -translate-y-1/4 z-10`}>
                    {step.icon}
                  </div>
                  <CardContent className="pt-8 pb-4 px-4">
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BookingProcessPreview;
