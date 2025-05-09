
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HardHat, Forklift, Hammer, Construction } from "lucide-react";

interface ConstructionService {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  price: number;
}

const ConstructionShowcase = () => {
  // Construction services data
  const constructionServices: ConstructionService[] = [
    {
      id: 1,
      name: "Building Construction",
      description: "Complete construction services for residential and commercial buildings with professional craftsmanship and quality materials.",
      icon: <Construction className="h-5 w-5" />,
      image: "/lovable-uploads/d25d3afa-b35e-4040-b1be-c24a64540d72.png",
      features: ["Foundation work", "Structural framing", "Exterior finishing", "Professional crews"],
      price: 15000
    },
    {
      id: 2,
      name: "Hardscaping Installation",
      description: "Expert installation of pavers, retaining walls, patios, and other hardscape elements to enhance your outdoor living spaces.",
      icon: <Hammer className="h-5 w-5" />,
      image: "/lovable-uploads/78e59329-8a88-4974-92e2-ec048608e28b.png",
      features: ["Paver installation", "Retaining walls", "Patio construction", "Walkways"],
      price: 8000
    },
    {
      id: 3,
      name: "Decking & Structures",
      description: "Custom decks, pergolas, gazebos and other outdoor structures built to your specifications with attention to detail.",
      icon: <Forklift className="h-5 w-5" />,
      image: "/lovable-uploads/2c821c52-9821-4c9e-bd30-fb787c0e2317.png",
      features: ["Custom design", "Quality materials", "Expert assembly", "Long-lasting finishes"],
      price: 12000
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center">
              <HardHat className="h-8 w-8 text-hijau-blue" />
            </div>
          </div>
          <h2 className="heading-medium text-hijau-dark mb-2">Construction Services</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Our professional construction team brings expertise and quality craftsmanship to every project.
            From hardscaping to complete outdoor structures, we handle all aspects of landscape construction.
          </p>
        </div>

        {/* Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constructionServices.map((service) => (
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
                  From RM{service.price.toLocaleString()}/project
                </p>
                
                <Button
                  asChild
                  className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                >
                  <Link to={`/contact?service=Construction - ${service.name}`}>
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-hijau-dark/80 mb-4">
            We provide detailed quotes and consultations for all construction projects.
            Our team will work with you from design to completion for a seamless experience.
          </p>
          <Button asChild variant="outline" className="bg-white hover:bg-hijau-yellow/20">
            <Link to="/contact?service=Custom Construction Project">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConstructionShowcase;
