
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/packages/ServiceCard";
import { Service } from "@/types/services";

interface ServicesListProps {
  services: Service[];
  selectedServices: string[];
  toggleServiceSelection: (serviceName: string) => void;
  handleCreateCustomPackage: () => void;
}

const ServicesList: React.FC<ServicesListProps> = ({
  services,
  selectedServices,
  toggleServiceSelection,
  handleCreateCustomPackage,
}) => {
  return (
    <section id="services-section" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Services</h2>
        <p className="text-center text-hijau-dark/70 mb-10 max-w-2xl mx-auto">
          Select one or more services you're interested in to create your custom package, 
          or explore our pre-designed packages below.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              image={service.image}
              isSelected={selectedServices.includes(service.name)}
              onSelect={() => toggleServiceSelection(service.name)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            onClick={handleCreateCustomPackage}
            size="lg"
            className="bg-hijau-blue hover:bg-hijau-blue/90"
          >
            Create My Custom Package
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
