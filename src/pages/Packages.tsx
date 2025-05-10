
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Droplet, Construction, Filter, ArrowRight, ArrowDown, ArrowUp } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ServiceCard } from "@/components/packages/ServiceCard";
import { PackageCard } from "@/components/packages/PackageCard";
import { toast } from "@/hooks/use-toast";

// Package category type for filtering
type PackageCategory = "residential" | "commercial";

// Service interface
interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Package interface
interface Package {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  minPrice: number;
  features: string[];
  category: PackageCategory[];
  icon: React.ReactNode;
  color: string;
}

// Custom package service options
const serviceOptions = [
  "Landscape Design & Build",
  "Consultation",
  "Landscape 3D & CAD Drawing",
  "Landscape Ideas (Hardscape & Softscape)",
  "Construction",
  "Natural & Artificial Grass Installation",
  "Water Feature",
  "Tiny House / Playhouse",
  "Lawn Maintenance",
  "Nursery",
];

// Services list
const services: Service[] = [
  {
    id: 1,
    name: "Landscape Design & Build",
    description: "Comprehensive landscape design and implementation services tailored to your property and preferences.",
    image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Consultation",
    description: "Expert advice and guidance for your landscaping project from our experienced professionals.",
    image: "https://images.unsplash.com/photo-1542744173-8659b8e39c0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  },
  {
    id: 3,
    name: "Landscape 3D & CAD Drawing",
    description: "Detailed 3D visualizations and CAD drawings to help you envision your perfect landscape before construction begins.",
    image: "https://images.unsplash.com/photo-1524511751214-b0a384dd9eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 4,
    name: "Landscape Ideas (Hardscape & Softscape)",
    description: "Creative landscape solutions combining hardscape elements (patios, walkways) with softscape features (plants, trees).",
    image: "https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    name: "Construction",
    description: "Expert implementation of landscape designs with quality materials and craftsmanship.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    name: "Natural & Artificial Grass Installation",
    description: "Professional installation of natural or artificial grass for a perfect lawn all year round.",
    image: "https://images.unsplash.com/photo-1588072303330-bfbcc1b94f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
  },
  {
    id: 7,
    name: "Water Feature",
    description: "Custom water features including ponds, fountains, and waterfalls to add tranquility and visual interest.",
    image: "https://images.unsplash.com/photo-1588072303330-bfbcc1b94f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
  },
  {
    id: 8,
    name: "Tiny House / Playhouse",
    description: "Custom built tiny houses and playhouses to add charm and functionality to your landscape.",
    image: "https://images.unsplash.com/photo-1588072303330-bfbcc1b94f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
  },
  {
    id: 9,
    name: "Lawn Maintenance",
    description: "Regular maintenance services to keep your landscape looking its best year-round.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 10,
    name: "Nursery",
    description: "Quality plants, trees, and shrubs selected for your specific landscape needs and local climate.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

// Form schema
const customPackageSchema = z.object({
  services: z.array(z.string()).min(1, {
    message: "Please select at least one service",
  }),
});

type CustomPackageFormValues = z.infer<typeof customPackageSchema>;

const Packages = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<PackageCategory>("residential");
  const [customPackageDialogOpen, setCustomPackageDialogOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Form for custom package
  const form = useForm<CustomPackageFormValues>({
    resolver: zodResolver(customPackageSchema),
    defaultValues: {
      services: [],
    },
  });

  // Handle package selection
  const handleSelectPackage = (packageName: string) => {
    navigate(`/contact?package=${encodeURIComponent(packageName)}`);
  };

  // Toggle service selection
  const toggleServiceSelection = (serviceName: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceName)) {
        return prev.filter(name => name !== serviceName);
      } else {
        return [...prev, serviceName];
      }
    });
  };

  // Create custom package - opens dialog
  const handleCreateCustomPackage = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service for your custom package",
        variant: "destructive",
      });
      // Scroll to services section if not visible
      if (!showServices) {
        setShowServices(true);
        setTimeout(() => {
          document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return;
    }
    setCustomPackageDialogOpen(true);
    form.setValue("services", selectedServices);
  };

  // Submit custom package form
  const onSubmitCustomPackage = (data: CustomPackageFormValues) => {
    // Create a message from selected services
    const servicesMessage = `Selected services:\n${data.services.join("\n")}`;
    
    // Navigate to contact page with the selected services
    navigate(`/contact?package=Custom Package&message=${encodeURIComponent(servicesMessage)}`);
    
    // Close the dialog
    setCustomPackageDialogOpen(false);
  };

  // Scroll to services section
  const scrollToServices = () => {
    setShowServices(true);
    setTimeout(() => {
      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // List of packages
  const packages: Package[] = [
    {
      id: 1,
      name: "Smart Package",
      description: "Perfect for small spaces or simple upgrades to enhance your outdoor area.",
      priceRange: "RM2,000 and below",
      minPrice: 2000,
      icon: <Leaf className="h-10 w-10" />,
      color: "bg-hijau-blue/10 text-hijau-blue",
      features: [
        "Free Quotation & Consultation",
        "Plant",
        "Artificial Grass",
        "Chipping Stones",
        "Pebbles Stones"
      ],
      category: ["residential", "commercial"]
    },
    {
      id: 2,
      name: "Signature Package",
      description: "Our most popular option for a complete landscape transformation with premium elements.",
      priceRange: "RM2,001 - RM9,999",
      minPrice: 2001,
      icon: <Construction className="h-10 w-10" />,
      color: "bg-green-100 text-green-700",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Artificial or Natural Grass",
        "Stepping Slab",
        "Planter Box",
        "Mixed Pebbles Stones"
      ],
      category: ["residential", "commercial"]
    },
    {
      id: 3,
      name: "Elite Package",
      description: "The ultimate luxury landscape package with premium features for discerning clients.",
      priceRange: "RM10,000 - RM40,000",
      minPrice: 10000,
      icon: <Droplet className="h-10 w-10" />,
      color: "bg-purple-100 text-purple-700",
      features: [
        "Free Quotation & Consultation",
        "Plants",
        "Stepping Slab",
        "Water Feature / Fountain",
        "Artificial or Natural Grass",
        "Planter Box",
        "Garden Lighting"
      ],
      category: ["residential", "commercial"]
    },
    {
      id: 4,
      name: "Custom Package",
      description: "You dream it, we build it. A fully customizable package tailored to your specific needs.",
      priceRange: "Fully customizable",
      minPrice: 0,
      icon: <Construction className="h-10 w-10" />,
      color: "bg-amber-100 text-amber-700",
      features: ["Fully customizable", "You dream it, we build it"],
      category: ["residential", "commercial"]
    }
  ];

  // Filter packages based on category
  const filteredPackages = packages.filter(pkg => pkg.category.includes(category));

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
            <h1 className="heading-large mb-4">Landscape Packages</h1>
            <p className="text-lg md:text-xl">
              We offer a range of curated packages to transform your outdoor spaces,
              from simple enhancements to luxurious complete landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Explorer Section */}
      <section className="section-padding bg-hijau-light">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-hijau-dark">
            Want to build your dream landscape? See our services first!
          </h2>
          
          {!showServices ? (
            <Button 
              onClick={scrollToServices}
              size="lg" 
              className="bg-hijau-blue hover:bg-hijau-blue/90"
            >
              Explore Services
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="mb-8 flex justify-center">
              <Button 
                onClick={() => setShowServices(false)} 
                variant="outline" 
                className="bg-white"
              >
                Hide Services
                <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Services List */}
      {showServices && (
        <section id="services-section" className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Services</h2>
            <p className="text-center text-hijau-dark/70 mb-10 max-w-2xl mx-auto">
              Select one or more services you're interested in to create your custom package, 
              or explore our pre-designed packages below.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  name={service.name}
                  description={service.description}
                  image={service.image}
                  isSelected={selectedServices.includes(service.name)}
                  onSelect={() => toggleServiceSelection(service.name)}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                onClick={handleCreateCustomPackage}
                size="lg"
                className="bg-hijau-blue hover:bg-hijau-blue/90"
              >
                Create My Custom Package
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 bg-hijau-light">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-medium text-hijau-dark">Our Packages</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-hijau-dark/70">Filter by:</span>
              <ToggleGroup type="single" value={category} onValueChange={(value) => value && setCategory(value as PackageCategory)}>
                <ToggleGroupItem value="residential" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Residential</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="commercial" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Commercial</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Packages List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard 
                key={pkg.id}
                package={pkg}
                onSelect={() => handleSelectPackage(pkg.name)}
                onCustomize={pkg.name === "Custom Package" ? scrollToServices : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-10 bg-hijau-yellow/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-hijau-dark">
            Not sure which package is right for you?
          </h2>
          <p className="text-hijau-dark/80 mb-6 max-w-2xl mx-auto">
            Our landscape experts can help you choose the perfect package for your needs and budget.
            Contact us today for a free consultation!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-hijau-blue hover:bg-hijau-blue/90"
          >
            <Link to="/contact">Contact Us For Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Bottom Banner */}
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

      {/* Custom Package Dialog */}
      <Dialog open={customPackageDialogOpen} onOpenChange={setCustomPackageDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-hijau-blue">Create Your Custom Package</DialogTitle>
            <DialogDescription>
              You've selected {selectedServices.length} service(s) for your custom landscape package.
              You can review and confirm your selections below.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitCustomPackage)} className="space-y-6">
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {selectedServices.map((service) => (
                        <FormField
                          key={service}
                          control={form.control}
                          name="services"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={service}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, service])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== service
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal cursor-pointer">
                                  {service}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setCustomPackageDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-hijau-blue hover:bg-hijau-blue/90"
                >
                  Book Custom Package
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Packages;
