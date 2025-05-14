
import React from "react";
import { Mail } from "lucide-react";

const EmailSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-hijau-blue/5 to-hijau-yellow/5 p-6 rounded-lg border border-hijau-blue/10">
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-hijau-blue/10 p-3 rounded-full text-hijau-blue">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-hijau-blue">Email Address</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="mailto:info@hijaugroup.com" 
              className="bg-gradient-to-r from-white to-hijau-blue/5 rounded-lg p-3 border-l-4 border-hijau-blue shadow-sm hover:shadow transition-shadow duration-300 text-hijau-dark hover:text-hijau-blue"
            >
              info@hijaugroup.com
            </a>
            <a 
              href="mailto:support@hijaugroup.com" 
              className="bg-gradient-to-r from-white to-hijau-yellow/5 rounded-lg p-3 border-l-4 border-hijau-yellow shadow-sm hover:shadow transition-shadow duration-300 text-hijau-dark hover:text-hijau-blue"
            >
              support@hijaugroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
