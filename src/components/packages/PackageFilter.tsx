
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Filter } from "lucide-react";
import { PackageCategory } from "@/types/packages";
import { motion } from "framer-motion";

interface PackageFilterProps {
  category: PackageCategory;
  setCategory: (category: PackageCategory) => void;
}

const PackageFilter: React.FC<PackageFilterProps> = ({ category, setCategory }) => {
  return (
    <section className="py-8 bg-hijau-light">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="text-xl font-medium text-hijau-dark"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Our Packages
          </motion.h2>
          <motion.div 
            className="flex items-center gap-3"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-sm font-medium text-hijau-dark/70">Filter by:</span>
            <ToggleGroup 
              type="single" 
              value={category} 
              onValueChange={(value) => value && setCategory(value as PackageCategory)}
            >
              <ToggleGroupItem 
                value="residential" 
                className="flex items-center gap-1 relative"
              >
                {category === "residential" && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-hijau-blue/10 rounded-md"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Filter className="h-4 w-4" />
                <span>Residential</span>
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="commercial" 
                className="flex items-center gap-1 relative"
              >
                {category === "commercial" && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-hijau-blue/10 rounded-md"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Filter className="h-4 w-4" />
                <span>Commercial</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackageFilter;
