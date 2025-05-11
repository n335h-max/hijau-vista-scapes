
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface ClientLogo {
  name: string;
  logoUrl: string;
}

const TopClients = () => {
  const clientLogos: ClientLogo[] = [
    { name: "Samsung SDI Energy Sdn Bhd", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Samsung_SDI_logo.svg/1200px-Samsung_SDI_logo.svg.png" },
    { name: "KPJ Hospital", logoUrl: "https://kpj.com/wp-content/uploads/2021/11/KPJ-Healthcare-Logo-Feature-Image.png" },
    { name: "Mofaz Sdn Bhd", logoUrl: "https://www.ctoscredit.com.my/xml_public_compliance_check/images/product-logo/Mofaz.jpg" },
    { name: "Koperasi Kuatmaju Berhad", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2-ZN5WqiQBvjmTbBLXQB0gXcQrXtjm4FGrhk4oHJew&s" },
    { name: "Kismet Engineering Technologies Sdn Bhd", logoUrl: "https://cdn-c-design.azureedge.net/media/stories/thumbnail/UploadObject/37795_1.jpg" },
    { name: "UCSI International College", logoUrl: "https://ares.ucsi.edu.my/wp-content/uploads/2016/08/UCSI-01.png" },
    { name: "Yayasan Negeri Sembilan", logoUrl: "https://static.wixstatic.com/media/1a23d3_b84f3cc12b5d46fab0fdd3a3d2eefb97~mv2.jpg/v1/fill/w_147,h_125,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/yns%20logo.jpg" },
    { name: "Columbia Asia", logoUrl: "https://www.hospitalmanagement.net/wp-content/uploads/sites/9/2020/04/Columbia-Asia-hospitals-logo.jpg" },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
