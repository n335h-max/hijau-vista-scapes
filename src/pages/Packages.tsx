
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Construction, Droplet } from "lucide-react";
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

const Packages = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<PackageCategory>("residential");
  const [customPackageDialogOpen, setCustomPackageDialogOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // List of packages
  const packages: Package[] = [
    {
      id: 1,
      name: "Smart Package",
      description: "Perfect for small spaces or simple upgrades to enhance your outdoor area.",
      priceRange: "RM2,000 and below",
      minPrice: 2000,
      icon: <Leaf className="h-10 w-10" />,
      color: "bg-hijau-blue/10 text-hijau-blue",
      features: [
        "Free Quotation & Consultation",
        "Plant",
        "Artificial Grass",
        "Chipping Stones",
        "Pebbles Stones"
      ],
      category: ["residential", "commercial"]
    },
    {
      id: 2,
      name: "Signature Package",
      description: "Our most popular option for a complete landscape transformation with premium elements.",
      priceRange: "RM2,001 - RM9,999",
      minPrice: 2001,
      icon: <Construction className="h-10 w-10" />,
      color: "bg-green-100 text-green-700",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Artificial or Natural Grass",
        "Stepping Slab",
        "Planter Box",
        "Mixed Pebbles Stones"
      ],
      category: ["residential", "commercial"]
    },
    {
      id: 3,
      name: "Elite Package",
      description: "The ultimate luxury landscape package with premium features for discerning clients.",
      priceRange: "RM10,000 - RM40,000",
      minPrice: 10000,
      icon: <Droplet className="h-10 w-10" />,
      color: "bg-purple-100 text-purple-700",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Stepping Slab",
        "Water Feature / Fountain",
        "Artificial or Natural Grass",
        "Planter Box",
        "Garden Lighting"
      ],
      category: ["residential", "commercial"]
    },
    {
      id: 4,
      name: "Custom Package",
      description: "You dream it, we build it. A fully customizable package tailored to your specific needs.",
      priceRange: "Fully customizable",
      minPrice: 0,
      icon: <Construction className="h-10 w-10" />,
      color: "bg-amber-100 text-amber-700",
      features: ["Fully customizable", "You dream it, we build it"],
      category: ["residential", "commercial"]
    }
  ];

  // Handle package selection
  const handleSelectPackage = (packageName: string) => {
    navigate(`/contact?package=${encodeURIComponent(packageName)}`);
  };

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

  // Create custom package - opens dialog
  const handleCreateCustomPackage = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service for your custom package",
        variant: "destructive",
      });
      // Scroll to services section if not visible
      if (!showServices) {
        setShowServices(true);
        setTimeout(() => {
          document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return;
    }
    setCustomPackageDialogOpen(true);
  };

  // Submit custom package form
  const onSubmitCustomPackage = (data: { services: string[] }) => {
    // Create a message from selected services
    const servicesMessage = `Selected services:\n${data.services.join("\n")}`;
    
    // Navigate to contact page with the selected services
    navigate(`/contact?package=Custom Package&message=${encodeURIComponent(servicesMessage)}`);
    
    // Close the dialog
    setCustomPackageDialogOpen(false);
  };

  // Scroll to services section
  const scrollToServices = () => {
    setShowServices(true);
    setTimeout(() => {
      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
        scrollToServices={scrollToServices}
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
        scrollToServices={scrollToServices}
      />

      {/* Consultation Banner */}
      <ConsultationBanner />

      {/* Bottom Banner */}
      <BottomBanner 
        scrollToServices={scrollToServices}
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
