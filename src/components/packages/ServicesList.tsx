
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/packages/ServiceCard";
import { Service } from "@/types/services";
import { motion } from "framer-motion";

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
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  // Find the nursery service and update its image
  const updatedServices = services.map(service => {
    if (service.name === "Nursery") {
      return {
        ...service,
        image: "/lovable-uploads/980b9789-354d-4730-9095-827baeb82535.png"
      };
    }
    return service;
  });

  return (
    <motion.section 
      id="services-section" 
      className="section-padding bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <motion.h2 
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Services
        </motion.h2>
        
        <motion.p 
          className="text-center text-hijau-dark/70 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Select one or more services you're interested in to create your custom package, 
          or explore our pre-designed packages below.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {updatedServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                name={service.name}
                description={service.description}
                image={service.image}
                isSelected={selectedServices.includes(service.name)}
                onSelect={() => toggleServiceSelection(service.name)}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            onClick={handleCreateCustomPackage}
            size="lg"
            className="bg-hijau-blue hover:bg-hijau-blue/90"
          >
            Create My Custom Package
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesList;
