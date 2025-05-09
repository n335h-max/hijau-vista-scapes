
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GalleryCTA = () => {
  return (
    <section className="section-padding bg-hijau-blue text-white">
      <div className="container-custom text-center">
        <h2 className="heading-medium mb-4">Inspired by Our Work?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Let us create a beautiful, functional landscape for your property. 
          Contact us today to schedule a consultation.
        </p>
        <Button asChild size="lg" className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default GalleryCTA;
