
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Construction, Droplet, Square } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    cashback?: string;
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
    <Card className="h-full overflow-hidden border-2 hover:border-hijau-blue hover:shadow-lg transition-all duration-300 flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-6 border-b bg-gradient-to-b from-white to-gray-50">
          <div className={`w-16 h-16 rounded-full ${pkg.color} flex items-center justify-center mb-4 mx-auto shadow-soft`}>
            {pkg.icon}
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">{pkg.name}</h3>
          <p className="text-center font-bold text-lg text-hijau-blue mb-2">
            {pkg.priceRange}
          </p>
          {pkg.cashback && (
            <div className="flex justify-center">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-medium px-3 py-1">
                {pkg.cashback}
              </Badge>
            </div>
          )}
          <p className="text-hijau-dark/70 text-center text-sm mt-3">
            {pkg.description}
          </p>
        </div>
        
        <div className="p-6 flex-grow">
          <ul className="space-y-3">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 pt-0 mt-auto">
          {pkg.name === "Custom Package" ? (
            <Button 
              onClick={onCustomize}
              className="w-full bg-hijau-blue hover:bg-hijau-blue/90 shadow-button"
            >
              Create My Package
            </Button>
          ) : (
            <Button
              onClick={onSelect}
              className="w-full bg-hijau-blue hover:bg-hijau-blue/90 shadow-button"
            >
              Select Package
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
