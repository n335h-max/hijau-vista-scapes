
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConstructionShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="heading-medium text-hijau-dark mb-4">Professional Construction Services</h2>
            <p className="text-hijau-dark/80 mb-6">
              Our skilled construction team brings your landscape designs to life with precision and 
              attention to detail. From patios and walkways to retaining walls and outdoor structures, 
              we handle all aspects of landscape construction.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-hijau-blue flex items-center justify-center text-white font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-medium text-hijau-dark">Expert Craftsmanship</h3>
                  <p className="text-sm text-hijau-dark/70">
                    Our team of skilled craftsmen brings years of experience to every project, ensuring 
                    high-quality results that stand the test of time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-hijau-blue flex items-center justify-center text-white font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-medium text-hijau-dark">Quality Materials</h3>
                  <p className="text-sm text-hijau-dark/70">
                    We use only the highest quality materials for your landscape construction, sourced 
                    from trusted suppliers to ensure durability and longevity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-hijau-blue flex items-center justify-center text-white font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-medium text-hijau-dark">Attention to Detail</h3>
                  <p className="text-sm text-hijau-dark/70">
                    Every aspect of your landscape construction is executed with precision and care, 
                    from precise measurements to perfect finishes.
                  </p>
                </div>
              </div>
            </div>
            
            <Button
              asChild
              className="bg-hijau-blue hover:bg-hijau-blue/90"
            >
              <Link to="/contact?service=Construction">
                Schedule a Construction Consultation
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img 
                  src="/lovable-uploads/2ea8d5b1-53a9-46ed-86ca-d77ddd731cbc.png" 
                  alt="Construction services" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                  alt="Completed patio project" 
                  className="w-full h-36 object-cover rounded-lg shadow-md" 
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                  alt="Garden pathway construction" 
                  className="w-full h-36 object-cover rounded-lg shadow-md" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionShowcase;
