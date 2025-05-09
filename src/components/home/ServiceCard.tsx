
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  regularPrice: string;
  discountPrice: string;
  serviceType: string;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  regularPrice, 
  discountPrice, 
  serviceType 
}: ServiceCardProps) => {
  return (
    <Card className="hover-grow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-hijau-dark/70 mb-4">
          {description}
        </p>
        <div className="mt-auto">
          <p className="mb-2">
            <span className="line-through text-gray-500">{regularPrice}</span>{" "}
            <span className="font-bold text-hijau-blue">{discountPrice}</span>
          </p>
          <Button asChild className="w-full bg-hijau-blue hover:bg-hijau-blue/90">
            <Link to={`/contact?service=${serviceType}`}>Book Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
