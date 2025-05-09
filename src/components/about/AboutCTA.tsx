
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="section-padding bg-hijau-blue text-white">
      <div className="container-custom text-center">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="/lovable-uploads/09459ed9-aef9-43f6-80f7-fa2c86a42871.png" 
            alt="Hijau Group Logo" 
            className="h-16 w-auto mb-4"
          />
          <h2 className="heading-medium">Ready to Transform Your Landscape?</h2>
        </div>
        <p className="max-w-2xl mx-auto mb-8">
          Contact us today to schedule a consultation with our team of landscape experts. 
          Let's bring your outdoor vision to life!
        </p>
        <Button asChild size="lg" className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default AboutCTA;
