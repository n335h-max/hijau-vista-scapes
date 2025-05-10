
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BottomBannerProps {
  scrollToServices: () => void;
}

const BottomBanner: React.FC<BottomBannerProps> = ({ scrollToServices }) => {
  return (
    <section className="py-12 bg-hijau-blue text-white">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to transform your landscape? Choose a package or create your own!
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark"
          >
            <Link to="/contact">Contact Us Now</Link>
          </Button>
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-hijau-dark/20 text-white border border-white hover:bg-white hover:text-hijau-blue"
          >
            Create Custom Package
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
