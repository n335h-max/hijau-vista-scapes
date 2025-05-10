
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  image,
  isSelected,
  onSelect,
}) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 overflow-hidden ${
        isSelected 
          ? "border-2 border-hijau-blue shadow-lg ring-2 ring-hijau-blue/20" 
          : "hover:shadow-md"
      }`}
      onClick={onSelect}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-4 relative">
        {isSelected && (
          <div className="absolute -top-5 -right-5 bg-hijau-blue text-white w-10 h-10 rounded-full flex items-center justify-center transform rotate-12">
            <Check className="h-5 w-5" />
          </div>
        )}
        <h3 className="font-semibold mb-2 text-hijau-dark">{name}</h3>
        <p className="text-sm text-hijau-dark/70 line-clamp-2">{description}</p>
        
        <div className={`mt-3 text-sm font-medium ${
          isSelected ? "text-hijau-blue" : "text-gray-500"
        }`}>
          {isSelected ? "Selected" : "Click to select"} 
        </div>
      </CardContent>
    </Card>
  );
};
