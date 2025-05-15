
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PackagePreviewCardProps {
  name: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const PackagePreviewCard = ({ 
  name, 
  description, 
  priceRange, 
  icon, 
  color,
  features
}: PackagePreviewCardProps) => {
  return (
    <Card className="h-full overflow-hidden border-2 hover:border-hijau-blue hover:shadow-lg transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-hijau-blue/50 focus-within:ring-offset-2 group">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-4 md:p-6 border-b bg-gradient-to-b from-white to-hijau-light/30 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#195E8C_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>
          
          <motion.div 
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${color} flex items-center justify-center mb-4 mx-auto shadow-soft relative group-hover:shadow-highlight transition-all duration-300`}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-lg md:text-xl font-semibold text-center mb-2 group-hover:gradient-text transition-all duration-300">
            {name}
          </h3>
          
          <p className="text-center font-bold text-md md:text-lg text-hijau-blue mb-2">
            {priceRange}
          </p>
          
          <p className="text-hijau-dark/70 text-center text-sm mt-3">
            {description}
          </p>
        </div>
        
        <div className="p-4 md:p-6 flex-grow">
          <ul className="space-y-3">
            {features.slice(0, 4).map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-hijau-blue/10 rounded-full p-1 mt-0.5">
                  <Check className="h-3 w-3 text-hijau-blue flex-shrink-0" />
                </div>
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
            {features.length > 4 && (
              <li className="text-sm text-center text-hijau-blue/80 mt-2">
                + {features.length - 4} more features
              </li>
            )}
          </ul>
        </div>
        
        <div className="p-4 md:p-6 pt-0 mt-auto">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-hijau-blue to-hijau-blue-light hover:from-hijau-blue-light hover:to-hijau-blue shadow-button"
          >
            <Link to="/packages">
              View Package
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackagePreviewCard;
