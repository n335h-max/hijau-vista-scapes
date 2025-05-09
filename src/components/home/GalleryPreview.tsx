
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GalleryPreview = () => {
  // Gallery images array with updated images including lawn maintenance
  const galleryImages = [
    "/lovable-uploads/ce002d00-e396-47a6-8a1c-0890bb70d2aa.png",
    "/lovable-uploads/e1133523-440f-4ec3-8b9f-a93906fc0272.png",
    "/lovable-uploads/96f1860e-e387-4f26-81ab-948b14420cbc.png",
    "/lovable-uploads/5ddcc32d-dfe8-4ac6-b43c-af1bed3a8191.png",
    "/lovable-uploads/5ab02348-939e-497b-865f-f5d6d14bcc81.png",
    "/lovable-uploads/1a73e93c-f297-44cc-ab0d-e55e138cc1c4.png",  // Water feature
    "/lovable-uploads/02a8e859-1456-4cf5-b47d-d1da981c88fb.png",  // Lawn maintenance
  ];

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
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover-grow">
              <img
                src={image}
                alt={`Landscape project ${index + 1}`}
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
