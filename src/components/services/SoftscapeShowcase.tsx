
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Plant, Droplet, List } from "lucide-react";

interface SoftscapeService {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  price: number;
}

const SoftscapeShowcase = () => {
  // Softscape services data
  const softscapeServices: SoftscapeService[] = [
    {
      id: 1,
      name: "Tropical Garden Design",
      description: "Lush, vibrant tropical gardens featuring exotic plants, colorful flowers, and natural stone accents.",
      icon: <Plant className="h-5 w-5" />,
      image: "/lovable-uploads/8fc258f6-46b3-4443-b0be-a81c4f0c8085.png",
      features: ["Exotic plants", "Natural stones", "Low maintenance", "Year-round beauty"],
      price: 4800
    },
    {
      id: 2,
      name: "Premium Plant Selection",
      description: "Carefully curated selection of premium plants to create a visually stunning and balanced landscape design.",
      icon: <Droplet className="h-5 w-5" />,
      image: "/lovable-uploads/6d48415f-3c31-4f13-bfdb-64c19a36d0f3.png",
      features: ["Curated plants", "Color coordination", "Seasonal varieties", "Expert arrangement"],
      price: 3200
    },
    {
      id: 3,
      name: "Mixed Garden Landscapes",
      description: "Beautiful mixed garden designs combining flowers, shrubs, and decorative elements for a harmonious outdoor space.",
      icon: <List className="h-5 w-5" />,
      image: "/lovable-uploads/0c08177c-abfa-475a-ab4f-26b0d98aa520.png",
      features: ["Mixed plantings", "Color themes", "Seasonal interest", "Easy maintenance"],
      price: 5500
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Plant className="h-8 w-8 text-green-700" />
            </div>
          </div>
          <h2 className="heading-medium text-hijau-dark mb-2">Softscape Solutions</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Our softscape services focus on the living elements of your landscape - plants, flowers, trees, and shrubs.
            We select the perfect plant palette to bring color, texture, and life to your outdoor spaces throughout the seasons.
          </p>
        </div>

        {/* Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softscapeServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover-grow">
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute top-3 left-3 bg-white/90 text-green-700 rounded-full p-2">
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
                
                <p className="font-bold text-green-700 text-lg mb-4">
                  From RM{service.price.toLocaleString()}/project
                </p>
                
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link to={`/contact?service=Softscape - ${service.name}`}>
                    Get Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-hijau-dark/80 mb-4">
            Looking for custom softscape designs for your specific environment and aesthetic preferences?
            Our plant experts can create the perfect plant composition for your space.
          </p>
          <Button asChild variant="outline" className="bg-white hover:bg-green-50 border-green-700 text-green-700">
            <Link to="/contact?service=Custom Softscape Design">Request Custom Design</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftscapeShowcase;
