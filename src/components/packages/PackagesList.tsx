
import React from "react";
import { PackageCard } from "@/components/packages/PackageCard";
import { Package } from "@/types/packages";
import { AnimatePresence, motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

interface PackagesListProps {
  packages: Package[];
  handleSelectPackage: (packageName: string) => void;
  scrollToServices: () => void;
}

const PackagesList: React.FC<PackagesListProps> = ({ 
  packages,
  handleSelectPackage,
  scrollToServices
}) => {
  const isMobile = useMobile();
  
  return (
    <section className="section-padding bg-hijau-yellow/20" id="packages-list">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mb-6 md:mb-10 text-center" id="packages-heading">Our Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          <AnimatePresence mode="wait">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
                className="h-full"
              >
                <PackageCard 
                  package={pkg}
                  onSelect={() => handleSelectPackage(pkg.name)}
                  onCustomize={pkg.name === "Custom Package" ? scrollToServices : undefined}
                  isMobile={isMobile}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PackagesList;
