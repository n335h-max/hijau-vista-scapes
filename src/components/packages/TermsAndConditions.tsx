
import React from "react";
import { InfoIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="section-padding bg-nature-gradient">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mb-6 text-center">Terms & Conditions</h2>
        
        <Card className="border-2 border-hijau-blue/20 shadow-nature">
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <InfoIcon className="h-5 w-5 text-hijau-blue mt-1 flex-shrink-0" />
                <span>This offer is limited to the first 100 customers eligible for cashback.</span>
              </li>
              <li className="flex items-start gap-2">
                <InfoIcon className="h-5 w-5 text-hijau-blue mt-1 flex-shrink-0" />
                <span>A booking fee of RM2,000 is required for each package and will be deducted from the total package price.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TermsAndConditions;
