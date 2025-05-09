
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TinyHouseOption {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const TinyHouseShowcase = () => {
  // Tiny house options data
  const tinyHouseOptions: TinyHouseOption[] = [
    {
      id: 1,
      name: "Modern Studio Tiny House",
      description: "Contemporary tiny house with clean lines, perfect for a backyard studio or guest house. Features large windows and an open deck area.",
      image: "/lovable-uploads/5ddcc32d-dfe8-4ac6-b43c-af1bed3a8191.png",
      features: ["Open deck", "Large windows", "Modern design", "Low maintenance"]
    },
    {
      id: 2,
      name: "Blue Cottage Playhouse",
      description: "Charming blue cottage-style playhouse with decorative trim and French doors, perfect for children's play or as a garden feature.",
      image: "/lovable-uploads/5ab02348-939e-497b-865f-f5d6d14bcc81.png",
      features: ["French doors", "Decorative trim", "Multiple windows", "Cottage style"]
    },
    {
      id: 3,
      name: "Compact Garden Office",
      description: "Modern gray tiny house perfect for a home office or studio space with sleek design and large glass doors for natural light.",
      image: "/lovable-uploads/0c08177c-abfa-475a-ab4f-26b0d98aa520.png",
      features: ["Full-size doors", "Insulated walls", "Modern aesthetic", "Compact design"]
    },
    {
      id: 4,
      name: "Classic White Playhouse",
      description: "Adorable white playhouse with charming details, perfect for children with its welcoming design and child-friendly features.",
      image: "/lovable-uploads/8fc258f6-46b3-4443-b0be-a81c4f0c8085.png",
      features: ["Child-sized door", "Decorative elements", "Safe design", "Easy assembly"]
    },
    {
      id: 5,
      name: "Modern Container Café",
      description: "Contemporary container-style structure that can be used as a tiny café, retail space, or outdoor entertainment area.",
      image: "/lovable-uploads/4502db10-1a90-482c-868f-b1dbad24a070.png",
      features: ["Glass frontage", "Commercial grade", "Modern aesthetic", "Customizable interior"]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="heading-medium text-hijau-dark mb-2">Tiny Houses & Playhouses</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Transform your outdoor space with our custom-built tiny houses and playhouses.
            Whether you need a backyard office, guest house, or a magical playhouse for children,
            we create beautiful, functional structures tailored to your needs.
          </p>
        </div>

        {/* Tiny House Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tinyHouseOptions.map((option) => (
            <Card key={option.id} className="overflow-hidden hover-grow">
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                <p className="text-hijau-dark/70 mb-4">
                  {option.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {option.features.map((feature, index) => (
                    <span key={index} className="bg-hijau-light text-hijau-dark text-xs font-medium px-2.5 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button
                  asChild
                  className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                >
                  <Link to={`/contact?service=Tiny House - ${option.name}`}>
                    Get Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-hijau-dark/80 mb-4">
            All our tiny houses and playhouses are custom built to your specifications.
            We can create any size, style, or design to match your vision and requirements.
          </p>
          <Button asChild variant="outline" className="bg-white hover:bg-hijau-yellow/20">
            <Link to="/contact?service=Custom Tiny House Design">Get a Free Design Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TinyHouseShowcase;
