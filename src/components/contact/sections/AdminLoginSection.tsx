
import React from "react";
import { Button } from "@/components/ui/button";

interface AdminLoginSectionProps {
  onAdminLogin: () => void;
}

const AdminLoginSection: React.FC<AdminLoginSectionProps> = ({ onAdminLogin }) => {
  return (
    <div className="pt-6 border-t border-gray-100 flex justify-end">
      <Button 
        variant="outline" 
        onClick={onAdminLogin}
        className="text-hijau-blue border-hijau-blue hover:bg-hijau-blue hover:text-white transition-colors"
      >
        Admin Login
      </Button>
    </div>
  );
};

export default AdminLoginSection;
