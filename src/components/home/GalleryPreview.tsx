
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-hijau-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-dark mb-4">Our Recent Projects</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Take a look at some of our recent landscape transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="overflow-hidden rounded-lg shadow-md hover-grow">
              <img
                src={`https://source.unsplash.com/random/600x400?landscape,garden&sig=${item}`}
                alt={`Landscape project ${item}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="group">
            <Link to="/gallery" className="flex items-center">
              View Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
