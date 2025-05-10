
import React from "react";
import { PackageCard } from "@/components/packages/PackageCard";
import { Package } from "@/types/packages";
import { AnimatePresence, motion } from "framer-motion";

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
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <PackageCard 
                  package={pkg}
                  onSelect={() => handleSelectPackage(pkg.name)}
                  onCustomize={pkg.name === "Custom Package" ? scrollToServices : undefined}
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
