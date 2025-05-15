
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import { Leaf, Construction, Droplet } from "lucide-react";

const ServicesPreview = () => {
  const packages = [
    {
      icon: <Leaf className="text-hijau-blue" />,
      title: "Smart Package",
      description: "Perfect for small spaces or simple upgrades to enhance your outdoor area.",
      discountPrice: "RM2,000 or below",
      serviceType: "smart-package"
    },
    {
      icon: <Construction className="text-hijau-blue" />,
      title: "Signature Package",
      description: "Our most popular option for a complete landscape transformation with premium elements.",
      discountPrice: "RM2,001 - RM9,999",
      serviceType: "signature-package"
    },
    {
      icon: <Droplet className="text-hijau-blue" />,
      title: "Elite Package",
      description: "The ultimate luxury landscape package with premium features for discerning clients.",
      discountPrice: "RM10,000 - RM40,000",
      serviceType: "elite-package"
    },
  ];

  return (
    <section className="section-padding bg-hijau-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-dark mb-4">Our Packages</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            We offer comprehensive landscape packages to transform your outdoor spaces
            into beautiful, functional environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <ServiceCard 
              key={index}
              icon={pkg.icon}
              title={pkg.title}
              description={pkg.description}
              regularPrice={pkg.regularPrice}
              discountPrice={pkg.discountPrice}
              serviceType={pkg.serviceType}
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
