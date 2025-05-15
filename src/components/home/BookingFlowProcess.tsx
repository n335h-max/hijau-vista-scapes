
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Phone, Check } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMobile } from "@/hooks/use-mobile";

const BookingFlowProcess = () => {
  const isMobile = useMobile();
  
  const steps = [
    {
      icon: <Phone className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "Contact Us",
      description: "Fill out our contact form with your details and service requirements.",
      color: "bg-hijau-blue",
    },
    {
      icon: <Calendar className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "Schedule Consultation",
      description: "Select your preferred date and time for the consultation.",
      color: "bg-hijau-blue-light",
    },
    {
      icon: <MapPin className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "On-Site Visit",
      description: "Our experts will visit your location to assess and discuss your needs.",
      color: "bg-hijau-yellow-dark",
    },
    {
      icon: <Check className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "Project Commencement",
      description: "After approval, we begin transforming your space according to the plan.",
      color: "bg-hijau-yellow",
    },
  ];

  return (
    <div className="mb-8 sm:mb-12">
      <div className="text-center mb-6 sm:mb-10 px-4">
        <h2 className="heading-medium text-hijau-blue mb-2 sm:mb-3 text-xl sm:text-2xl">How Our Booking Process Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Our streamlined process makes it easy to get your landscaping project started. 
          Follow these simple steps to begin your journey with Hijau Group Landscape.
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
      >
        <CarouselContent className="py-2 sm:py-4">
          {steps.map((step, index) => (
            <CarouselItem key={index} className={isMobile ? "basis-full" : "md:basis-1/2 lg:basis-1/4"}>
              <div className="p-1">
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className={`${step.color} absolute top-0 h-2 sm:h-3 w-full`}></div>
                    <div className="absolute -top-6 -right-6 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gray-100/30 z-0"></div>
                    <div className={`${step.color} h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold absolute -top-6 sm:-top-8 left-4 sm:left-6 shadow-lg transform -translate-y-1/4 z-10 border-4 border-white`}>
                      {step.icon}
                    </div>
                    <CardContent className="pt-8 sm:pt-10 pb-4 sm:pb-6 px-4 sm:px-6 mt-3">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                      <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gray-100/20 rounded-tl-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gray-100/30 z-0"></div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
          
          {/* Repeat the first few items to create a seamless loop effect */}
          {steps.slice(0, 3).map((step, index) => (
            <CarouselItem key={`repeat-${index}`} className={isMobile ? "basis-full" : "md:basis-1/2 lg:basis-1/4"}>
              <div className="p-1">
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className={`${step.color} absolute top-0 h-2 sm:h-3 w-full`}></div>
                    <div className="absolute -top-6 -right-6 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gray-100/30 z-0"></div>
                    <div className={`${step.color} h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold absolute -top-6 sm:-top-8 left-4 sm:left-6 shadow-lg transform -translate-y-1/4 z-10 border-4 border-white`}>
                      {step.icon}
                    </div>
                    <CardContent className="pt-8 sm:pt-10 pb-4 sm:pb-6 px-4 sm:px-6 mt-3">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                      <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gray-100/20 rounded-tl-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gray-100/30 z-0"></div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BookingFlowProcess;
