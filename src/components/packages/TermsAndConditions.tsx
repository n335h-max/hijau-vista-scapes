
import React from "react";
import { InfoIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="section-padding bg-nature-gradient">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mb-6 text-center" id="terms-heading">Terms & Conditions</h2>
        
        <Card className="border-2 border-hijau-blue/20 shadow-nature max-w-3xl mx-auto">
          <CardContent className="p-4 md:p-6">
            <ul className="space-y-4" aria-labelledby="terms-heading">
              <motion.li 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <InfoIcon className="h-5 w-5 text-hijau-blue mt-1 flex-shrink-0" aria-hidden="true" />
                <span>This offer is available to the first 100 eligible customers who qualify for cashback. Terms apply and availability is on a first-come, first-served basis.</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <InfoIcon className="h-5 w-5 text-hijau-blue mt-1 flex-shrink-0" aria-hidden="true" />
                <span>An appointment fee of RM2,000 is required for each package and will be deducted from the total package price.</span>
              </motion.li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TermsAndConditions;
