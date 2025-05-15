
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  
  const heroImages = [
    // First image removed
    "/lovable-uploads/67b37ebe-693d-4dd4-ab03-42145f237f85.png",
    "/lovable-uploads/2a003a1b-532d-46e8-bb41-2d2e5b1fc4fa.png",
    "/lovable-uploads/41c05190-02e0-4a32-99a1-fdca6bba4f59.png",
    "/lovable-uploads/15452662-2597-4414-a794-3b589cf6cb91.png",
    "/lovable-uploads/474dca0f-d87a-44ce-846b-db71422fd38c.png",
    // New images
    "/lovable-uploads/202c9ed7-b2f7-4781-8496-737fdcf809dd.png",
    "/lovable-uploads/3f82aae2-c144-4b5e-b996-e4b2170e0b2a.png",
    "/lovable-uploads/ea123fb5-18d1-4a9b-bd54-bd5fb0b2b01c.png",
    "/lovable-uploads/709c4739-60a7-4fb1-ad9b-01ae2dc9672a.png",
    "/lovable-uploads/0c0689f1-ffa9-418e-a8d5-79ec0c75aa13.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-[75vh] md:h-screen overflow-hidden">
      {/* Auto-sliding background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: current === index ? 1 : 0,
            zIndex: current === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-hijau-blue/40"></div>
        </div>
      ))}
      
      <div className="container-custom relative h-full flex items-center z-10">
        <motion.div 
          className="max-w-2xl text-white px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4 text-white">
            Hijau Group <span className="text-hijau-yellow">Landscape</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 md:mb-8 font-display">
            Your landscape partner with <span className="text-hijau-yellow font-bold">12 years</span> of excellence
          </p>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl">
            Transform your outdoor spaces with our professional landscaping services. 
            We create beautiful, sustainable landscapes that enhance your property value.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button asChild size="lg" className="bg-hijau-blue hover:bg-hijau-blue-dark text-white shadow-lg border border-hijau-blue/20 rounded-full">
              <Link to="/packages">Our Packages</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-hijau-yellow text-hijau-blue hover:text-hijau-dark hover:bg-white border-hijau-yellow rounded-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "bg-hijau-yellow w-8" : "bg-white/60"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
