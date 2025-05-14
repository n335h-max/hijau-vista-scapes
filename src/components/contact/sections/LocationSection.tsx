
import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

const LocationSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-hijau-blue/5 to-transparent p-6 rounded-lg border border-hijau-blue/10">
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-hijau-blue/10 p-3 rounded-full text-hijau-blue">
          <MapPin className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-hijau-blue">Our Locations</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-hijau-blue shadow-sm hover:shadow transition-shadow duration-300">
              <p className="font-semibold text-hijau-dark">Registered Address:</p>
              <p className="text-hijau-dark/70">No 168-1, Jalan S2 B22, Pusat Dagangan Seremban 2, 70300 Seremban, Negeri Sembilan</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-hijau-yellow shadow-sm hover:shadow transition-shadow duration-300">
              <p className="font-semibold text-hijau-dark">Site Office:</p>
              <p className="text-hijau-dark/70">No 324, Jalan S2 A7/2, Green Street Homes, 70300 Seremban, Negeri Sembilan</p>
            </div>
          </div>
          
          <a 
            href="https://maps.google.com/maps?cid=7425140252329389889" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-hijau-blue hover:text-hijau-dark transition-colors font-medium"
          >
            View on Map
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
