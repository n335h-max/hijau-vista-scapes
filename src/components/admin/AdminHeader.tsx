
import React from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { CalendarClock, LogOut } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  description?: string;
  onLogout?: () => void;
  icon?: React.ReactNode;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ 
  title, 
  description,
  onLogout,
  icon = <CalendarClock className="mr-2 h-5 w-5" />
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("isHijauAdmin");
    navigate("/contact");
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
    if (onLogout) onLogout();
  };

  return (
    <section className="relative h-[25vh]">
      <div className="bg-hijau-blue absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>

      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="heading-medium mb-2">{title}</h1>
          <p className="opacity-90 flex items-center">
            {icon}
            {description}
          </p>
        </div>
        <div className="ml-auto">
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-hijau-blue flex items-center gap-2 transition-all"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminHeader;
