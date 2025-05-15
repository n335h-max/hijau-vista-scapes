
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Leaf, Construction, Droplet } from "lucide-react";
import PackagePreviewCard from "./PackagePreviewCard";

const ServicesPreview = () => {
  const packages = [
    {
      id: 1,
      name: "Smart Package",
      description: "Refresh Your Space, Revive Your Mood",
      priceRange: "RM2,000 & below",
      icon: <Leaf className="w-10 h-10 text-white" />,
      color: "bg-hijau-leaf text-white",
      features: [
        "Free Quotation & Consultation",
        "Plant",
        "Artificial Grass",
        "Chipping Stones",
        "Pebbles Stones"
      ]
    },
    {
      id: 2,
      name: "Signature Package",
      description: "Refresh Your Space, Revive Your Mood",
      priceRange: "RM2,001 - RM9,999",
      icon: <Construction className="w-10 h-10 text-white" />,
      color: "bg-hijau-forest text-white",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Artificial Grass / Natural Grass",
        "Stepping Slab",
        "Planter Box",
        "Mixed Pebbles Stones"
      ]
    },
    {
      id: 3,
      name: "Elite Package",
      description: "Refresh Your Space, Revive Your Mood",
      priceRange: "RM10,000 - RM40,000",
      icon: <Droplet className="w-10 h-10 text-white" />,
      color: "bg-hijau-blue text-white",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Plants with pot",
        "Stepping Slab",
        "Fountain / Water Feature",
        "Artificial Grass / Natural Grass",
        "Planter Box",
        "Mixed Herbs plants",
        "Garden Lighting"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-dark mb-4">Our Professional Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer premium landscaping packages designed to transform your outdoor spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackagePreviewCard
              key={pkg.id}
              name={pkg.name}
              description={pkg.description}
              priceRange={pkg.priceRange}
              icon={pkg.icon}
              color={pkg.color}
              features={pkg.features}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/packages" className="flex items-center gap-2">
              View All Packages
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
