
import React from "react";
import { PackageCard } from "@/components/packages/PackageCard";
import { Package } from "@/types/packages";

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
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.id}
              package={pkg}
              onSelect={() => handleSelectPackage(pkg.name)}
              onCustomize={pkg.name === "Custom Package" ? scrollToServices : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesList;
