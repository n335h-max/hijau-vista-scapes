
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import { ChevronRight, Leaf, Wrench, Droplets, PaintBucket, Shovel, Trees } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: <Leaf className="w-10 h-10 text-hijau-blue" />,
      title: "Lawn Care",
      description: "Professional lawn mowing, edging, and maintenance services to keep your yard looking pristine.",
      discountPrice: "$49",
      serviceType: "maintenance"
    },
    {
      icon: <Trees className="w-10 h-10 text-hijau-blue" />,
      title: "Garden Design",
      description: "Custom garden designs that reflect your style while enhancing your property's natural beauty.",
      discountPrice: "$199",
      serviceType: "design"
    },
    {
      icon: <Shovel className="w-10 h-10 text-hijau-blue" />,
      title: "Planting & Mulching",
      description: "Expert plant selection and installation with premium mulch for healthy, beautiful landscapes.",
      discountPrice: "$149",
      serviceType: "installation"
    },
    {
      icon: <Wrench className="w-10 h-10 text-hijau-blue" />,
      title: "Hardscaping",
      description: "Custom patios, walkways, and retaining walls that combine functionality with aesthetic appeal.",
      discountPrice: "$299",
      serviceType: "construction"
    },
    {
      icon: <Droplets className="w-10 h-10 text-hijau-blue" />,
      title: "Irrigation Systems",
      description: "Water-efficient irrigation systems designed, installed, and maintained to keep your landscape thriving.",
      discountPrice: "$189",
      serviceType: "installation"
    },
    {
      icon: <PaintBucket className="w-10 h-10 text-hijau-blue" />,
      title: "Outdoor Lighting",
      description: "Enhance your property's beauty and security with professionally designed lighting solutions.",
      discountPrice: "$159",
      serviceType: "installation"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-dark mb-4">Our Professional Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of landscaping services to transform and maintain your outdoor spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.discountPrice} 
              serviceType={service.serviceType}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
