
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationBanner: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-hijau-blue/20 to-hijau-yellow/20">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-hijau-dark">
          Not sure which package is <span className="text-hijau-blue">right</span> for you?
        </h2>
        <p className="text-hijau-dark/80 mb-6 max-w-2xl mx-auto">
          Our landscape experts can help you choose the perfect package for your needs and budget.
          <span className="text-hijau-blue font-medium"> Contact us today for a free consultation!</span>
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-hijau-blue to-hijau-blue-dark hover:from-hijau-blue-dark hover:to-hijau-blue shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-hijau-blue/10"
        >
          <Link to="/contact?package=Consultation" className="px-8">Contact Us For Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default ConsultationBanner;
