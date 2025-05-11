
import React from "react";
import { toast } from "@/hooks/use-toast";

interface CustomPackageManagerProps {
  selectedServices: string[];
  showServices: boolean;
  setShowServices: (show: boolean) => void;
  setCustomPackageDialogOpen: (open: boolean) => void;
}

const CustomPackageManager: React.FC<CustomPackageManagerProps> = ({
  selectedServices,
  showServices,
  setShowServices,
  setCustomPackageDialogOpen,
}) => {
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

  return { handleCreateCustomPackage };
};

export default CustomPackageManager;
