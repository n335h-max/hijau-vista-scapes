
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="section-padding bg-hijau-blue text-white">
      <div className="container-custom text-center">
        <h2 className="heading-medium mb-4">Ready to Transform Your Landscape?</h2>
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
