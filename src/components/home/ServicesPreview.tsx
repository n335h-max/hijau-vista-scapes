
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";

const ServicesPreview = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hijau-blue">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
          <path d="M18 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16"/>
          <path d="M6 18h12"/>
        </svg>
      ),
      title: "Landscape Design",
      description: "Custom landscape designs that blend aesthetics with functionality.",
      regularPrice: "RM2,000",
      discountPrice: "RM1,800",
      serviceType: "design"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hijau-blue">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M12 12h.01"/>
          <path d="M17 12h.01"/>
          <path d="M7 12h.01"/>
        </svg>
      ),
      title: "Construction",
      description: "Expert implementation of landscape designs with quality materials.",
      regularPrice: "RM5,000",
      discountPrice: "RM4,500",
      serviceType: "construction"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hijau-blue">
          <path d="M8 6h10"/>
          <path d="M6 12h9"/>
          <path d="M11 18h7"/>
        </svg>
      ),
      title: "Maintenance",
      description: "Regular maintenance services to keep your landscape looking its best.",
      regularPrice: "RM500",
      discountPrice: "RM450",
      serviceType: "maintenance"
    },
  ];

  return (
    <section className="section-padding bg-hijau-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-dark mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            We offer a comprehensive range of landscaping services to meet 
            all your outdoor space needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              regularPrice={service.regularPrice}
              discountPrice={service.discountPrice}
              serviceType={service.serviceType}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-hijau-blue hover:bg-hijau-blue/90">
            <Link to="/packages">View All Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
