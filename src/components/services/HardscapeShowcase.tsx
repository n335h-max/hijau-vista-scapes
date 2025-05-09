
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LayoutGrid, Square, Flower } from "lucide-react";

interface HardscapeService {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  price: number;
}

const HardscapeShowcase = () => {
  // Hardscape services data
  const hardscapeServices: HardscapeService[] = [
    {
      id: 1,
      name: "Modern Paved Walkways",
      description: "Clean, geometric paved walkways with grass accents, perfect for contemporary homes and minimalist landscape designs.",
      icon: <LayoutGrid className="h-5 w-5" />,
      image: "/lovable-uploads/4001e500-c4aa-44d2-97ea-c97f0bc4aaa9.png",
      features: ["Clean lines", "Grass accents", "Paver installation", "Modern design"],
      price: 5500
    },
    {
      id: 2,
      name: "Contemporary Planters",
      description: "Sleek, modern planters with integrated bench seating. Ideal for urban patios, decks, and entryways.",
      icon: <Square className="h-5 w-5" />,
      image: "/lovable-uploads/00c636ad-26e6-4f9b-b3a0-a4c96a426d11.png",
      features: ["Built-in seating", "Tropical plants", "Custom sizing", "Clean aesthetic"],
      price: 3800
    },
    {
      id: 3,
      name: "Decorative Flower Boxes",
      description: "Custom-designed planter boxes perfect for showcasing colorful flowering plants and creating vibrant outdoor spaces.",
      icon: <Flower className="h-5 w-5" />,
      image: "/lovable-uploads/cc5e13a5-09f0-4f8b-952c-4f3950f9e918.png",
      features: ["Flowering plants", "Coconut coir", "Low maintenance", "Year-round color"],
      price: 2200
    }
  ];

  return (
    <section className="section-padding bg-hijau-light">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center">
              <LayoutGrid className="h-8 w-8 text-hijau-blue" />
            </div>
          </div>
          <h2 className="heading-medium text-hijau-dark mb-2">Hardscape Solutions</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Our hardscaping services combine functionality with aesthetic appeal to create outdoor living spaces
            that are both beautiful and practical. From modern walkways to custom planters, we design and build
            hardscape elements that complement your landscape.
          </p>
        </div>

        {/* Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardscapeServices.map((service) => (
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
                  <Link to={`/contact?service=Hardscape - ${service.name}`}>
                    Get Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-hijau-dark/80 mb-4">
            We also offer custom hardscape design services for unique projects. Our team can create
            bespoke solutions that perfectly match your style and functional requirements.
          </p>
          <Button asChild variant="outline" className="bg-white hover:bg-hijau-yellow/20">
            <Link to="/contact?service=Custom Hardscape Design">Request Custom Design</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HardscapeShowcase;
