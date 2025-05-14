
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Construction, Droplet, Square, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
  isMobile?: boolean;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  package: pkg,
  onSelect,
  onCustomize,
  isMobile = false,
}) => {
  return (
    <Card className="h-full overflow-hidden border-2 hover:border-hijau-blue hover:shadow-lg transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-hijau-blue/50 focus-within:ring-offset-2 group" role="group" aria-labelledby={`package-${pkg.id}-title`}>
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-4 md:p-6 border-b bg-gradient-to-b from-white to-hijau-light/30 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#195E8C_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>
          
          <motion.div 
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${pkg.color} flex items-center justify-center mb-4 mx-auto shadow-soft relative group-hover:shadow-highlight transition-all duration-300`}
            whileHover={{ scale: 1.05, rotate: 5 }}
            aria-hidden="true"
          >
            {pkg.icon}
          </motion.div>
          
          <h3 
            className="text-lg md:text-xl font-semibold text-center mb-2 group-hover:gradient-text transition-all duration-300" 
            id={`package-${pkg.id}-title`}
          >
            {pkg.name}
          </h3>
          
          <p className="text-center font-bold text-md md:text-lg text-hijau-blue mb-2" aria-label={`Price: ${pkg.priceRange}`}>
            {pkg.priceRange}
          </p>
          
          {pkg.cashback && (
            <div className="flex justify-center" aria-live="polite">
              <Badge variant="outline" className="bg-hijau-yellow/20 text-hijau-dark border-hijau-yellow font-medium px-3 py-1">
                {pkg.cashback}
              </Badge>
            </div>
          )}
          
          <p className="text-hijau-dark/70 text-center text-sm mt-3">
            {pkg.description}
          </p>
        </div>
        
        <div className="p-4 md:p-6 flex-grow">
          <ul className="space-y-3" aria-label="Package features">
            {pkg.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-hijau-blue/10 rounded-full p-1 mt-0.5">
                  <Check className="h-3 w-3 text-hijau-blue flex-shrink-0" aria-hidden="true" />
                </div>
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="p-4 md:p-6 pt-0 mt-auto">
          {pkg.name === "Custom Package" ? (
            <Button 
              onClick={onCustomize}
              className="w-full bg-gradient-to-r from-hijau-blue to-hijau-blue-light hover:from-hijau-blue-light hover:to-hijau-blue shadow-button flex items-center justify-center gap-2 transition-all duration-300"
              aria-label="Create custom package"
            >
              {isMobile ? "Customize" : "Create My Package"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button
              onClick={onSelect}
              className="w-full bg-gradient-to-r from-hijau-blue to-hijau-blue-light hover:from-hijau-blue-light hover:to-hijau-blue shadow-button flex items-center justify-center gap-2 transition-all duration-300"
              aria-label={`Select ${pkg.name}`}
            >
              {isMobile ? "Select" : "Select Package"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
