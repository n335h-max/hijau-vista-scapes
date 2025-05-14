
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Construction, Droplet, Square } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { servicesData } from "@/types/services";
import { Package, PackageCategory } from "@/types/packages";

// Import our refactored components
import HeroSection from "@/components/packages/HeroSection";
import ServicesExplorer from "@/components/packages/ServicesExplorer";
import ServicesList from "@/components/packages/ServicesList";
import PackageFilter from "@/components/packages/PackageFilter";
import PackagesList from "@/components/packages/PackagesList";
import ConsultationBanner from "@/components/packages/ConsultationBanner";
import BottomBanner from "@/components/packages/BottomBanner";
import CustomPackageDialog from "@/components/packages/CustomPackageDialog";
import { usePackageNavigation } from "@/components/packages/usePackageNavigation";
import { useCustomPackageManager } from "@/components/packages/CustomPackageManager";
import TermsAndConditions from "@/components/packages/TermsAndConditions";

const Packages = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<PackageCategory>("residential");
  const [customPackageDialogOpen, setCustomPackageDialogOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Use our custom navigation hook
  const { handleSelectPackage, scrollToServices, onSubmitCustomPackage } = usePackageNavigation();

  // Use our custom package manager hook
  const { handleCreateCustomPackage } = useCustomPackageManager({ 
    selectedServices, 
    showServices, 
    setShowServices, 
    setCustomPackageDialogOpen 
  });

  // Toggle service selection
  const toggleServiceSelection = (serviceName: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceName)) {
        return prev.filter(name => name !== serviceName);
      } else {
        return [...prev, serviceName];
      }
    });
  };

  // List of packages with updated information
  const packages: Package[] = [
    {
      id: 1,
      name: "Smart Package",
      description: "Refresh Your Space, Revive Your Mood",
      priceRange: "RM2,000 & below",
      minPrice: 2000,
      icon: <Leaf className="h-8 w-8 text-white" />,
      color: "bg-hijau-leaf text-white",
      features: [
        "Free Quotation & Consultation",
        "Plant",
        "Artificial Grass",
        "Chipping Stones",
        "Pebbles Stones"
      ],
      cashback: "",
      category: ["residential", "commercial"]
    },
    {
      id: 2,
      name: "Signature Package",
      description: "Refresh Your Space, Revive Your Mood",
      priceRange: "RM2,001 - RM9,999",
      minPrice: 2001,
      icon: <Construction className="h-8 w-8 text-white" />,
      color: "bg-hijau-forest text-white",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Artificial Grass / Natural Grass",
        "Stepping Slab",
        "Planter Box",
        "Mixed Pebbles Stones"
      ],
      cashback: "Cashback: 5%",
      category: ["residential", "commercial"]
    },
    {
      id: 3,
      name: "Elite Package",
      description: "Refresh Your Space, Revive Your Mood",
      priceRange: "RM10,000 - RM40,000",
      minPrice: 10000,
      icon: <Droplet className="h-8 w-8 text-white" />,
      color: "bg-hijau-blue text-white",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Plants with pot",
        "Stepping Slab",
        "Fountain / Water Feature",
        "Artificial Grass / Natural Grass",
        "Planter Box",
        "Mixed Herbs plants",
        "Garden Lighting"
      ],
      cashback: "Cashback: RM2,000",
      category: ["residential", "commercial"]
    },
    {
      id: 4,
      name: "Custom Package",
      description: "You dream it, we build it. A fully customizable package tailored to your specific needs.",
      priceRange: "Fully customizable",
      minPrice: 0,
      icon: <Square className="h-8 w-8 text-white" />,
      color: "bg-amber-600 text-white",
      features: [
        "Fully customizable", 
        "You dream it, we build it",
        "Mix and match services",
        "Tailored to your needs",
        "Personalized consultation"
      ],
      cashback: "",
      category: ["residential", "commercial"]
    }
  ];

  // Handler for showing services
  const handleShowServices = () => {
    setShowServices(true);
    return scrollToServices();
  };

  // Filter packages based on category
  const filteredPackages = packages.filter(pkg => pkg.category.includes(category));

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Explorer Section */}
      <ServicesExplorer 
        showServices={showServices}
        setShowServices={setShowServices}
        scrollToServices={handleShowServices}
      />

      {/* Services List */}
      {showServices && (
        <ServicesList 
          services={servicesData}
          selectedServices={selectedServices}
          toggleServiceSelection={toggleServiceSelection}
          handleCreateCustomPackage={handleCreateCustomPackage}
        />
      )}

      {/* Filter Section */}
      <PackageFilter 
        category={category}
        setCategory={setCategory}
      />

      {/* Packages List */}
      <PackagesList 
        packages={filteredPackages}
        handleSelectPackage={handleSelectPackage}
        scrollToServices={handleShowServices}
      />

      {/* Terms and Conditions */}
      <TermsAndConditions />

      {/* Consultation Banner */}
      <ConsultationBanner />

      {/* Bottom Banner */}
      <BottomBanner 
        scrollToServices={handleShowServices}
      />

      {/* Custom Package Dialog */}
      <CustomPackageDialog 
        open={customPackageDialogOpen}
        setOpen={setCustomPackageDialogOpen}
        selectedServices={selectedServices}
        onSubmit={onSubmitCustomPackage}
      />
    </>
  );
};

export default Packages;
