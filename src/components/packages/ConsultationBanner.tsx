
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationBanner: React.FC = () => {
  return (
    <section className="py-10 bg-hijau-yellow/30">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-hijau-dark">
          Not sure which package is right for you?
        </h2>
        <p className="text-hijau-dark/80 mb-6 max-w-2xl mx-auto">
          Our landscape experts can help you choose the perfect package for your needs and budget.
          Contact us today for a free consultation!
        </p>
        <Button
          asChild
          size="lg"
          className="bg-hijau-blue hover:bg-hijau-blue/90"
        >
          <Link to="/contact?package=Consultation">Contact Us For Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default ConsultationBanner;
