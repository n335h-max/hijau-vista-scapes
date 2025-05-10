import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Grass types interface
interface GrassType {
  id: number;
  name: string;
  type: "natural" | "artificial";
  description: string;
  image: string;
}

const GrassInstallationShowcase = () => {
  const [activeTab, setActiveTab] = useState<"natural" | "artificial">("natural");

  // Grass types data
  const grassTypes: GrassType[] = [
    {
      id: 1,
      name: "Premium Garden Lawn",
      type: "natural",
      description: "Lush natural grass ideal for residential gardens with excellent drought resistance and low maintenance needs.",
      image: "/lovable-uploads/ce002d00-e396-47a6-8a1c-0890bb70d2aa.png"
    },
    {
      id: 2,
      name: "Philippine Grass",
      type: "natural",
      description: "Dense, fine-textured natural grass perfect for tropical climates with high foot traffic tolerance.",
      image: "/lovable-uploads/6d48415f-3c31-4f13-bfdb-64c19a36d0f3.png"
    },
    {
      id: 3,
      name: "Cowgrass Variety",
      type: "natural",
      description: "Hardy natural grass with excellent heat tolerance, ideal for sunny areas and with minimal watering requirements.",
      image: "/lovable-uploads/e1133523-440f-4ec3-8b9f-a93906fc0272.png"
    },
    {
      id: 4,
      name: "Premium Artificial Turf",
      type: "artificial",
      description: "High-quality synthetic grass with realistic appearance and feel, perfect for low-maintenance landscapes.",
      image: "/lovable-uploads/58779427-850f-4b04-9e07-3840a10a14b4.png"
    },
    {
      id: 5,
      name: "Decorative Artificial Grass",
      type: "artificial",
      description: "Ideal for creating evergreen garden spaces with stone features and decorative elements.",
      image: "/lovable-uploads/d96d9c3e-98ae-4314-93b5-11957619afaf.png"
    },
    {
      id: 6,
      name: "Premium Landscape Turf",
      type: "artificial",
      description: "Perfect for creating maintenance-free garden areas with clean edges and beautiful year-round appearance.",
      image: "/lovable-uploads/f6ca4da8-a7d1-46d5-9638-6cba9b73eb61.png"
    }
  ];

  // Filter grass types based on active tab
  const filteredGrass = grassTypes.filter(grass => grass.type === activeTab);

  return (
    <section className="section-padding bg-hijau-light">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="heading-medium text-hijau-dark mb-2">Natural & Artificial Grass Installation</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Transform your landscape with our premium grass installation services.
            Whether you prefer natural or artificial solutions, we offer high-quality options for every need.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("natural")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "natural"
                  ? "bg-hijau-blue text-white"
                  : "text-hijau-dark hover:bg-gray-100"
              )}
            >
              Natural Grass
            </button>
            <button
              onClick={() => setActiveTab("artificial")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "artificial"
                  ? "bg-hijau-blue text-white"
                  : "text-hijau-dark hover:bg-gray-100"
              )}
            >
              Artificial Grass
            </button>
          </div>
        </div>

        {/* Grass options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGrass.map((grass) => (
            <Card key={grass.id} className="overflow-hidden hover-grow">
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={grass.image}
                    alt={grass.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute top-2 right-2 bg-hijau-blue text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {grass.type === "natural" ? "Natural" : "Artificial"}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{grass.name}</h3>
                <p className="text-hijau-dark/70 mb-6">
                  {grass.description}
                </p>
                <Button
                  asChild
                  className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                >
                  <Link to={`/contact?service=Grass Installation - ${grass.name}`}>
                    Book Installation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-hijau-dark/80 mb-4">
            Our professional team ensures proper installation and provides maintenance guidance to keep your lawn looking its best.
          </p>
          <Button asChild variant="outline" className="bg-white hover:bg-hijau-yellow/20">
            <Link to="/contact?service=Grass Installation Consultation">Get a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrassInstallationShowcase;
