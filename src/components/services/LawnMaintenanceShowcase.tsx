
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Scissors, Shrub, TreeDeciduous } from "lucide-react";

interface MaintenanceService {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  price: number;
}

const LawnMaintenanceShowcase = () => {
  // Maintenance services data
  const maintenanceServices: MaintenanceService[] = [
    {
      id: 1,
      name: "Regular Lawn Mowing",
      description: "Professional lawn mowing service on a regular schedule to keep your lawn looking its best year-round.",
      icon: <Scissors className="h-5 w-5" />,
      image: "/lovable-uploads/02a8e859-1456-4cf5-b47d-d1da981c88fb.png",
      features: ["Weekly/bi-weekly options", "Edge trimming", "Clipping removal", "Path clearing"],
      price: 120
    },
    {
      id: 2,
      name: "Hedge & Shrub Trimming",
      description: "Expert pruning and shaping of hedges, shrubs and small trees to maintain their health and appearance.",
      icon: <Shrub className="h-5 w-5" />,
      image: "/lovable-uploads/34dd2997-ab4f-401f-9a49-ca854e42c640.png",
      features: ["Precision cutting", "Shape maintenance", "Growth control", "Debris cleanup"],
      price: 180
    },
    {
      id: 3,
      name: "Full Garden Maintenance",
      description: "Comprehensive garden care including lawn mowing, weeding, pruning, and general garden tidying.",
      icon: <TreeDeciduous className="h-5 w-5" />,
      image: "/lovable-uploads/7479f71c-f539-4ed9-befe-d3eafb69c899.png",
      features: ["Complete care", "Seasonal services", "Plant health checks", "Fertilization"],
      price: 300
    }
  ];

  return (
    <section className="section-padding bg-hijau-light">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center">
              <Scissors className="h-8 w-8 text-hijau-blue" />
            </div>
          </div>
          <h2 className="heading-medium text-hijau-dark mb-2">Lawn Maintenance</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Our professional lawn maintenance services keep your outdoor space looking pristine all year round.
            From regular mowing to comprehensive garden care, we provide reliable and expert maintenance.
          </p>
        </div>

        {/* Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {maintenanceServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover-grow">
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute top-3 left-3 bg-white/90 text-hijau-blue rounded-full p-2">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-hijau-dark/70 mb-4">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, index) => (
                    <span key={index} className="bg-hijau-light text-hijau-dark text-xs font-medium px-2.5 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <p className="font-bold text-hijau-blue text-lg mb-4">
                  From RM{service.price.toLocaleString()}/month
                </p>
                
                <Button
                  asChild
                  className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                >
                  <Link to={`/contact?service=Lawn Maintenance - ${service.name}`}>
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-hijau-dark/80 mb-4">
            We offer customized maintenance packages for residential and commercial properties.
            Contact us to discuss your specific lawn and garden maintenance needs.
          </p>
          <Button asChild variant="outline" className="bg-white hover:bg-hijau-yellow/20">
            <Link to="/contact?service=Custom Maintenance Package">Request Custom Package</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LawnMaintenanceShowcase;
