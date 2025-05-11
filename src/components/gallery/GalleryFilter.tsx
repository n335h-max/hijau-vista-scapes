
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface GalleryFilterProps {
  onFilterChange: (ids: number[] | null) => void;
  activeFilter: number[] | null;
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({ onFilterChange, activeFilter }) => {
  // Featured projects IDs
  const featuredProjectIds = [3, 6, 7, 10];
  
  const isFilterActive = activeFilter !== null;

  return (
    <div className="container-custom py-6">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-hijau-blue" />
          <h3 className="text-lg font-medium">Featured Projects</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={isFilterActive ? "outline" : "default"}
            className={!isFilterActive ? "bg-hijau-blue hover:bg-hijau-blue/90" : ""}
            onClick={() => onFilterChange(null)}
          >
            All Projects
          </Button>
          <Button
            variant={isFilterActive ? "default" : "outline"}
            className={isFilterActive ? "bg-hijau-blue hover:bg-hijau-blue/90" : ""}
            onClick={() => onFilterChange(featuredProjectIds)}
          >
            Featured Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;
