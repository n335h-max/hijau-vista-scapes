
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesExplorerProps {
  showServices: boolean;
  setShowServices: (show: boolean) => void;
  scrollToServices: () => void;
}

const ServicesExplorer: React.FC<ServicesExplorerProps> = ({
  showServices,
  setShowServices,
  scrollToServices,
}) => {
  return (
    <section className="section-padding bg-hijau-yellow/20">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-hijau-dark">
          Want to build your dream landscape? See our services first!
        </h2>
        
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {!showServices ? (
            <Button 
              onClick={scrollToServices}
              size="lg" 
              className="bg-hijau-blue hover:bg-hijau-blue/90"
            >
              Explore Services
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="mb-8 flex justify-center">
              <Button 
                onClick={() => setShowServices(false)} 
                variant="outline" 
                className="bg-white"
              >
                Hide Services
                <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesExplorer;
