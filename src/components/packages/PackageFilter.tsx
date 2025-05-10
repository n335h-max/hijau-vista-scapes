
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Filter } from "lucide-react";
import { PackageCategory } from "@/types/packages";

interface PackageFilterProps {
  category: PackageCategory;
  setCategory: (category: PackageCategory) => void;
}

const PackageFilter: React.FC<PackageFilterProps> = ({ category, setCategory }) => {
  return (
    <section className="py-8 bg-hijau-light">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-medium text-hijau-dark">Our Packages</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-hijau-dark/70">Filter by:</span>
            <ToggleGroup 
              type="single" 
              value={category} 
              onValueChange={(value) => value && setCategory(value as PackageCategory)}
            >
              <ToggleGroupItem value="residential" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Residential</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="commercial" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Commercial</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageFilter;
