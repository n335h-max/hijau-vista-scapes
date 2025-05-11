
import { useNavigate } from "react-router-dom";

export const usePackageNavigation = () => {
  const navigate = useNavigate();

  // Handle package selection
  const handleSelectPackage = (packageName: string) => {
    navigate(`/contact?package=${encodeURIComponent(packageName)}`);
  };

  // Scroll to services section
  const scrollToServices = () => {
    const showServices = true;
    setTimeout(() => {
      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
    return showServices;
  };

  // Submit custom package form
  const onSubmitCustomPackage = (data: { services: string[] }) => {
    // Create a message from selected services
    const servicesMessage = `Selected services:\n${data.services.join("\n")}`;
    
    // Navigate to contact page with the selected services
    navigate(`/contact?package=Custom Package&message=${encodeURIComponent(servicesMessage)}`);
    
    return false; // to close the dialog
  };

  return {
    handleSelectPackage,
    scrollToServices,
    onSubmitCustomPackage
  };
};
