import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Interface for gallery items
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
}

const Gallery = () => {
  const [openImage, setOpenImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery items - adding the images from GalleryPreview
  const galleryItems: GalleryItem[] = [
    // Project images from GalleryPreview
    {
      id: 1,
      title: "Zen Garden Transformation",
      description: "A peaceful garden space with native plantings and stone pathways.",
      type: "Residential",
      image: "/lovable-uploads/ce002d00-e396-47a6-8a1c-0890bb70d2aa.png"
    },
    {
      id: 2,
      title: "Modern Backyard Design",
      description: "Clean lines and contemporary elements create this stunning backyard retreat.",
      type: "Residential",
      image: "/lovable-uploads/e1133523-440f-4ec3-8b9f-a93906fc0272.png"
    },
    {
      id: 3,
      title: "Tropical Garden Path",
      description: "Lush foliage and vibrant color create a tropical paradise in this garden.",
      type: "Residential",
      image: "/lovable-uploads/96f1860e-e387-4f26-81ab-948b14420cbc.png"
    },
    {
      id: 4,
      title: "Elegant Patio Design",
      description: "A functional and beautiful outdoor living space with custom paving.",
      type: "Residential",
      image: "/lovable-uploads/5ddcc32d-dfe8-4ac6-b43c-af1bed3a8191.png"
    },
    {
      id: 5,
      title: "Tranquil Garden Retreat",
      description: "A serene garden space designed for relaxation and contemplation.",
      type: "Residential",
      image: "/lovable-uploads/5ab02348-939e-497b-865f-f5d6d14bcc81.png"
    },
    {
      id: 6,
      title: "Custom Water Feature",
      description: "A striking water feature that serves as the centerpiece of this landscape design.",
      type: "Residential",
      image: "/lovable-uploads/1a73e93c-f297-44cc-ab0d-e55e138cc1c4.png"
    },
    {
      id: 7,
      title: "Modern Hardscape Installation",
      description: "Contemporary hardscaping elements create structure and flow in this landscape.",
      type: "Commercial",
      image: "/lovable-uploads/4001e500-c4aa-44d2-97ea-c97f0bc4aaa9.png"
    },
    {
      id: 8,
      title: "Lush Softscape Design",
      description: "Carefully selected plants create texture, color, and year-round interest.",
      type: "Residential",
      image: "/lovable-uploads/8fc258f6-46b3-4443-b0be-a81c4f0c8085.png"
    },
    {
      id: 9,
      title: "Native Plant Garden",
      description: "A sustainable landscape featuring local native plants and eco-friendly design.",
      type: "Residential",
      image: "/lovable-uploads/6d48415f-3c31-4f13-bfdb-64c19a36d0f3.png"
    },
    // Original gallery items
    {
      id: 10,
      title: "Modern Backyard Transformation",
      description: "A complete backyard redesign featuring custom hardscaping, water features, and native plantings.",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 11,
      title: "Corporate Campus Landscaping",
      description: "Extensive landscaping project for a corporate campus, including outdoor meeting areas and sustainable plantings.",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 12,
      title: "Tropical Garden Oasis",
      description: "A lush tropical garden design featuring exotic plants, stone pathways, and ambient lighting.",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 13,
      title: "Minimalist Zen Garden",
      description: "A peaceful Zen garden with carefully arranged rocks, gravel, and minimal plantings for meditation and reflection.",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
    },
    {
      id: 14,
      title: "Hotel Entrance Redesign",
      description: "A grand entrance landscaping project for a luxury hotel, featuring fountain, seasonal flowers, and elegant pathways.",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1582408897969-de5c5cf0e4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 15,
      title: "Children's Play Garden",
      description: "A family-friendly garden design with safe play areas, climbing structures, and edible garden sections.",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1591594147133-5f6738feea56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 16,
      title: "Desert Landscape",
      description: "A water-conscious desert landscape featuring cacti, succulents, and decorative rock arrangements.",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1564223288351-a96bae6ff33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
    },
    {
      id: 17,
      title: "Shopping Center Green Spaces",
      description: "Multiple connected green spaces for a large shopping center, providing restful areas for visitors.",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1589786742745-71d7195e095a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 18,
      title: "Rooftop Garden",
      description: "An urban rooftop garden featuring container plantings, seating areas, and spectacular city views.",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1598901865264-bc2885c5da0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
    },
    {
      id: 19,
      title: "Urban Garden Terrace",
      description: "A small urban terrace transformed into a verdant oasis with vertical gardening and space-saving design.",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 20,
      title: "Community Park Project",
      description: "A collaborative project to revitalize a community park with native plantings, play areas, and gathering spaces.",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1605146433370-1c7548407a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 21,
      title: "Eco-Friendly Home Landscape",
      description: "A sustainable landscape design featuring rainwater harvesting, native plants, and solar-powered lighting.",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  // Open the lightbox with the clicked image
  const openLightbox = (item: GalleryItem, index: number) => {
    setOpenImage(item);
    setCurrentIndex(index);
  };

  // Navigate to the next image in the lightbox
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
    setOpenImage(galleryItems[currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1]);
  };

  // Navigate to the previous image in the lightbox
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
    setOpenImage(galleryItems[currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605490011908-3358b8d9c229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="heading-large mb-4">Our Gallery</h1>
            <p className="text-lg md:text-xl">
              Explore our portfolio of completed projects and get inspired for your own landscape transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover-grow cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-none overflow-hidden">
          {openImage && (
            <>
              <div className="relative">
                <img
                  src={openImage.image}
                  alt={openImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
              <div className="p-4 bg-white">
                <DialogHeader>
                  <DialogTitle>{openImage.title}</DialogTitle>
                  <DialogDescription>{openImage.description}</DialogDescription>
                </DialogHeader>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="section-padding bg-hijau-blue text-white">
        <div className="container-custom text-center">
          <h2 className="heading-medium mb-4">Inspired by Our Work?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let us create a beautiful, functional landscape for your property. 
            Contact us today to schedule a consultation.
          </p>
          <Button asChild size="lg" className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
