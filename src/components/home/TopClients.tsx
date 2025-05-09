
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopClients = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-dark mb-4">Our Top Clients</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Trusted by leading organizations across Malaysia for <span className="font-bold text-hijau-blue">12 years</span>.
          </p>
        </div>
        
        <div className="relative">
          <img 
            src="/lovable-uploads/f07eea40-7900-4e81-9220-406b26a33588.png" 
            alt="Top Clients of Hijau Group" 
            className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          />
          <div className="absolute -bottom-6 -right-6 bg-hijau-yellow text-hijau-blue font-bold text-2xl py-3 px-6 rounded-lg transform rotate-3 shadow-lg hidden md:block">
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
