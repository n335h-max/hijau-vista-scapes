
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[75vh] md:h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/10570302-7029-4bc1-beff-496304e7da04.png')",
        }}
      >
        <div className="absolute inset-0 bg-hijau-blue/30"></div>
      </div>
      
      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-2xl text-white px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4 text-white animate-fade-in">
            Hijau Group <span className="text-hijau-yellow">Landscape</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 md:mb-8 font-display animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your landscape partner with <span className="text-hijau-yellow font-bold">12 years</span> of excellence
          </p>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Transform your outdoor spaces with our professional landscaping services. 
            We create beautiful, sustainable landscapes that enhance your property value.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="bg-hijau-blue hover:bg-hijau-blue-dark text-white shadow-lg border border-hijau-blue/20 rounded-full">
              <Link to="/packages">Our Packages</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-hijau-yellow text-hijau-blue hover:text-hijau-dark hover:bg-white border-hijau-yellow rounded-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
