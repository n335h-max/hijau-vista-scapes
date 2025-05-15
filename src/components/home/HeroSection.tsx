
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] md:h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/3e161c21-6de3-4503-85f4-6d16a1b2d35d.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hijau-blue/60 to-black/50"></div>
      </div>
      
      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="heading-large mb-4 text-white animate-fade-in">
            Hijau Group <span className="text-hijau-yellow">Landscape</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-display animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your landscape partner with <span className="text-hijau-yellow font-bold">12 years</span> of excellence
          </p>
          <p className="text-lg mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Transform your outdoor spaces with our professional landscaping services. 
            We create beautiful, sustainable landscapes that enhance your property value.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="bg-hijau-blue hover:bg-hijau-blue-dark text-white shadow-lg border border-hijau-blue/20">
              <Link to="/packages">Our Packages</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-hijau-yellow/10 text-white hover:text-hijau-dark hover:bg-hijau-yellow border-hijau-yellow">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
