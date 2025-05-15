import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";

interface ClientLogo {
  name: string;
  logoUrl: string;
}

const TopClients = () => {
  const clientLogos: ClientLogo[] = [
    { name: "KPJ Healthcare", logoUrl: "/lovable-uploads/40c7647e-26d4-420d-b6d5-976a239fc567.png" },
    { name: "Mofaz Sdn Bhd", logoUrl: "/lovable-uploads/bfb571a4-dbfc-49cc-b9fe-9fdd58e83869.png" },
    { name: "Kismet Engineering Technologies Sdn Bhd", logoUrl: "/lovable-uploads/09a246a6-f378-467d-ac01-df7aea7e4b19.png" },
    { name: "UCSI International School", logoUrl: "/lovable-uploads/172a3b65-a471-497c-bde9-5f7346466f50.png" },
    { name: "Columbia Asia", logoUrl: "/lovable-uploads/c140ffde-3793-4b0b-8329-75263a95c0aa.png" },
    { name: "Samsung SDI", logoUrl: "/lovable-uploads/4915ef0a-86a2-44a2-ab7c-eea5fbe0f42d.png" },
    { name: "Yayasan Negeri Sembilan", logoUrl: "/lovable-uploads/bd98451f-46d8-4870-8ce3-d8980d4216f9.png" },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  
  useEffect(() => {
    let scrollInterval: ReturnType<typeof setInterval>;
    let isPaused = false;
    
    // Auto-scroll function
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && carouselRef.current) {
          const carousel = carouselRef.current;
          const scrollAmount = 1; // Smooth scrolling amount
          carousel.scrollLeft += scrollAmount;
          
          // Reset to beginning when reaching the end
          if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10) {
            carousel.scrollLeft = 0;
          }
        }
      }, 20); // Smaller interval for smoother scrolling
    };
    
    // Start auto-scrolling
    startAutoScroll();
    
    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };
    
    const handleMouseLeave = () => {
      isPaused = false;
    };
    
    if (carouselRef.current) {
      carouselRef.current.addEventListener('mouseenter', handleMouseEnter);
      carouselRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Clean up
    return () => {
      clearInterval(scrollInterval);
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('mouseenter', handleMouseEnter);
        carouselRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-hijau-light/40">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-medium text-hijau-dark mb-4">Trusted by Top Clients</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Leading organizations across Malaysia have trusted us for <span className="font-bold text-hijau-blue">12 years</span>.
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex overflow-hidden space-x-4 mb-12 cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {clientLogos.map((client, index) => (
            <div 
              key={index} 
              className="flex-none w-48 md:w-64"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-24 w-full flex items-center justify-center mb-4">
                    <img 
                      src={client.logoUrl} 
                      alt={`${client.name} Logo`} 
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center text-hijau-dark">{client.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
          
          {/* Duplicate first few items for continuous scrolling */}
          {clientLogos.slice(0, 4).map((client, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="flex-none w-48 md:w-64"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-24 w-full flex items-center justify-center mb-4">
                    <img 
                      src={client.logoUrl} 
                      alt={`${client.name} Logo`} 
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center text-hijau-dark">{client.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center mt-8">
          <div className="bg-hijau-yellow text-hijau-blue font-bold py-3 px-6 rounded-lg transform rotate-2 shadow-lg animate-pulse-gentle">
            12 YEARS OF EXCELLENCE
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg font-medium text-hijau-dark/90 mb-6">
            Join our growing list of satisfied clients who trust Hijau Group for their landscaping needs.
          </p>
          <Button asChild variant="outline" className="group">
            <Link to="/contact" className="flex items-center">
              Become Our Client
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopClients;
