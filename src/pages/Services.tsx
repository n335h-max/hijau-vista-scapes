import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import GrassInstallationShowcase from "@/components/services/GrassInstallationShowcase";
import TinyHouseShowcase from "@/components/services/TinyHouseShowcase";
import WaterFeatureShowcase from "@/components/services/WaterFeatureShowcase";
import LawnMaintenanceShowcase from "@/components/services/LawnMaintenanceShowcase";

// Service types for filtering
type ServiceCategory = "all" | "residential" | "commercial";

// Service interface
interface Service {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  category: ServiceCategory[];
  image: string;
}

const Services = () => {
  const [filter, setFilter] = useState<ServiceCategory>("all");

  // List of services
  const services: Service[] = [
    {
      id: 1,
      name: "Landscape Design & Build",
      description: "Comprehensive landscape design and implementation services tailored to your property and preferences.",
      originalPrice: 5000,
      discountedPrice: 4500,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Consultation",
      description: "Expert advice and guidance for your landscaping project from our experienced professionals.",
      originalPrice: 500,
      discountedPrice: 450,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1542744173-8659b8e39c0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    },
    {
      id: 3,
      name: "Landscape 3D & CAD Drawing",
      description: "Detailed 3D visualizations and CAD drawings to help you envision your perfect landscape before construction begins.",
      originalPrice: 2000,
      discountedPrice: 1800,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1524511751214-b0a384dd9eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 4,
      name: "Landscape Ideas (Hardscape & Softscape)",
      description: "Creative landscape solutions combining hardscape elements (patios, walkways) with softscape features (plants, trees).",
      originalPrice: 1000,
      discountedPrice: 900,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      name: "Construction",
      description: "Expert implementation of landscape designs with quality materials and craftsmanship.",
      originalPrice: 10000,
      discountedPrice: 9000,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 7,
      name: "Water Feature",
      description: "Custom water features including ponds, fountains, and waterfalls to add tranquility and visual interest.",
      originalPrice: 4000,
      discountedPrice: 3600,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1588072303330-bfbcc1b94f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
    },
    // Tiny house/playhouse was here but is now showcased in a dedicated section
    {
      id: 9,
      name: "Lawn Maintenance",
      description: "Regular maintenance services to keep your landscape looking its best year-round.",
      originalPrice: 800,
      discountedPrice: 720,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 10,
      name: "Nursery",
      description: "Quality plants, trees, and shrubs selected for your specific landscape needs and local climate.",
      originalPrice: 2000,
      discountedPrice: 1800,
      category: ["residential", "commercial"],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  // Filter services based on category
  const filteredServices = filter === "all" 
    ? services 
    : services.filter(service => service.category.includes(filter));

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556061078-0c6067c677d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="heading-large mb-4">Our Services</h1>
            <p className="text-lg md:text-xl">
              Discover our comprehensive range of professional landscaping services
              designed to transform your outdoor spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-hijau-light">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-hijau-blue hover:bg-hijau-blue/90" : ""}
            >
              All Services
            </Button>
            <Button
              variant={filter === "residential" ? "default" : "outline"}
              onClick={() => setFilter("residential")}
              className={filter === "residential" ? "bg-hijau-blue hover:bg-hijau-blue/90" : ""}
            >
              Residential
            </Button>
            <Button
              variant={filter === "commercial" ? "default" : "outline"}
              onClick={() => setFilter("commercial")}
              className={filter === "commercial" ? "bg-hijau-blue hover:bg-hijau-blue/90" : ""}
            >
              Commercial
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover-grow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-hijau-dark/70 mb-4 h-24 overflow-hidden">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <p className="mb-3 flex items-center">
                      <span className="line-through text-gray-500 mr-2">
                        RM{service.originalPrice.toLocaleString()}
                      </span>
                      <span className="font-bold text-hijau-blue text-lg">
                        RM{service.discountedPrice.toLocaleString()}
                      </span>
                    </p>
                    <Button
                      asChild
                      className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                    >
                      <Link to={`/contact?service=${encodeURIComponent(service.name)}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lawn Maintenance Showcase Section */}
      <LawnMaintenanceShowcase />

      {/* Water Feature Showcase Section */}
      <WaterFeatureShowcase />

      {/* Grass Installation Showcase Section */}
      <GrassInstallationShowcase />

      {/* Tiny House Showcase Section */}
      <TinyHouseShowcase />

      {/* Bottom Banner */}
      <section className="py-12 bg-hijau-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Ready to transform your landscape? Get in touch for a free consultation!
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark"
          >
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
