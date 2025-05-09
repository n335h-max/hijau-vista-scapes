
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Droplets } from "lucide-react";

interface WaterFeature {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  price: number;
}

const WaterFeatureShowcase = () => {
  // Water features data
  const waterFeatures: WaterFeature[] = [
    {
      id: 1,
      name: "Tiered Stone Fountain",
      description: "Elegant multi-tiered stone fountain with pebble accents and subtle lighting. Perfect for patios and small garden spaces.",
      image: "/lovable-uploads/1a73e93c-f297-44cc-ab0d-e55e138cc1c4.png",
      features: ["LED lighting", "Multi-tiered design", "Stone construction", "Pebble accents"],
      price: 1200
    },
    {
      id: 2,
      name: "Courtyard Water Feature",
      description: "Circular brick design with central fountain, ideal for commercial spaces and courtyards. Includes surrounding planter space for aquatic plants.",
      image: "/lovable-uploads/a9c4ca83-e448-409b-9e91-b64670c53707.png", 
      features: ["Brick construction", "Low maintenance", "Large diameter", "Commercial grade"],
      price: 3500
    },
    {
      id: 3,
      name: "Lily Pond Feature",
      description: "Contemporary water feature with lily pads and tropical plants. Creates a serene atmosphere in side gardens and pathways.",
      image: "/lovable-uploads/5257138f-1fee-4821-8102-c17c89b6b7c4.png",
      features: ["Aquatic plants", "Flat design", "Modern aesthetic", "Easy maintenance"],
      price: 1800
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center">
              <Droplets className="h-8 w-8 text-hijau-blue" />
            </div>
          </div>
          <h2 className="heading-medium text-hijau-dark mb-2">Water Features</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Enhance your outdoor space with our custom water features. From elegant fountains to serene ponds,
            our water features bring tranquility and visual interest to any landscape.
          </p>
        </div>

        {/* Water Features Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waterFeatures.map((feature) => (
            <Card key={feature.id} className="overflow-hidden hover-grow">
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-hijau-dark/70 mb-4">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.features.map((feat, index) => (
                    <span key={index} className="bg-hijau-light text-hijau-dark text-xs font-medium px-2.5 py-1 rounded-full">
                      {feat}
                    </span>
                  ))}
                </div>
                
                <p className="font-bold text-hijau-blue text-lg mb-4">
                  RM{feature.price.toLocaleString()}
                </p>
                
                <Button
                  asChild
                  className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                >
                  <Link to={`/contact?service=Water Feature - ${feature.name}`}>
                    Get Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-hijau-dark/80 mb-4">
            All our water features are custom designed and built to your specifications. We can create unique designs
            that perfectly complement your landscape and architecture.
          </p>
          <Button asChild variant="outline" className="bg-white hover:bg-hijau-yellow/20">
            <Link to="/contact?service=Custom Water Feature Design">Request Custom Design</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WaterFeatureShowcase;
