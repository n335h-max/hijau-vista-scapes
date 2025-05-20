
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

interface AdminLoginSectionProps {
  onAdminLogin: () => void;
}

const AdminLoginSection: React.FC<AdminLoginSectionProps> = ({ onAdminLogin }) => {
  return (
    <div className="pt-6 border-t border-gray-100 flex justify-end">
      <Button 
        variant="outline" 
        onClick={onAdminLogin}
        className="text-hijau-blue border-hijau-blue hover:bg-gradient-to-r hover:from-hijau-blue hover:to-hijau-blue-dark hover:text-white transition-colors"
        aria-label="Admin Login"
      >
        <Shield className="mr-2 h-4 w-4" />
        Admin Login
      </Button>
    </div>
  );
};

export default AdminLoginSection;
