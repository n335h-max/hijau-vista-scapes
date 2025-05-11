import React from "react";
import { toast } from "@/hooks/use-toast";

interface CustomPackageManagerProps {
  selectedServices: string[];
  showServices: boolean;
  setShowServices: (show: boolean) => void;
  setCustomPackageDialogOpen: (open: boolean) => void;
}

// Create a custom hook instead of a component
export const useCustomPackageManager = ({
  selectedServices,
  showServices,
  setShowServices,
  setCustomPackageDialogOpen,
}: CustomPackageManagerProps) => {
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

// Keep the component for backward compatibility, but now it uses the hook internally
const CustomPackageManager: React.FC<CustomPackageManagerProps> = (props) => {
  // This is a dummy component that doesn't render anything
  // It's just here to maintain backward compatibility
  return null;
};

export default CustomPackageManager;
