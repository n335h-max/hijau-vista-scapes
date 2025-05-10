
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PackageCardProps {
  package: {
    id: number;
    name: string;
    description: string;
    priceRange: string;
    minPrice: number;
    features: string[];
    category: string[];
    icon: React.ReactNode;
    color: string;
  };
  onSelect: () => void;
  onCustomize?: () => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  package: pkg,
  onSelect,
  onCustomize,
}) => {
  return (
    <Card className="overflow-hidden border-2 hover:border-hijau-blue hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="p-6 border-b">
          <div className={`w-16 h-16 rounded-full ${pkg.color} flex items-center justify-center mb-4 mx-auto`}>
            {pkg.icon}
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">{pkg.name}</h3>
          <p className="text-center font-bold text-lg text-hijau-blue mb-2">
            {pkg.priceRange}
          </p>
          <p className="text-hijau-dark/70 text-center text-sm">
            {pkg.description}
          </p>
        </div>
        
        <div className="p-6">
          <ul className="space-y-3">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 pt-0">
          {pkg.name === "Custom Package" ? (
            <Button 
              onClick={onCustomize}
              className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
            >
              Create My Package
            </Button>
          ) : (
            <Button
              onClick={onSelect}
              className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
            >
              Select Package
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
