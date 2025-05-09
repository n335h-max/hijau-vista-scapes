
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Droplet, Construction, Filter, ArrowRight } from "lucide-react";
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

// Package category type for filtering
type PackageCategory = "residential" | "commercial";

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

  // Create custom package - opens dialog
  const handleCreateCustomPackage = () => {
    setCustomPackageDialogOpen(true);
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

      {/* Filter Section */}
      <section className="py-8 bg-hijau-light">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-medium text-hijau-dark">Choose Your Package</h2>
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
              <Card key={pkg.id} className="overflow-hidden border-2 hover:border-hijau-blue hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <div className={`w-16 h-16 rounded-full ${pkg.color} flex items-center justify-center mb-4 mx-auto`}>
                      {pkg.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">{pkg.name}</h3>
                    <p className="text-center font-bold text-lg text-hijau-blue mb-2">
                      {pkg.priceRange}
                    </p>
                    <p className="text-hijau-dark/70 text-center text-sm">
                      {pkg.description}
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 pt-0">
                    {pkg.name === "Custom Package" ? (
                      <Button 
                        onClick={handleCreateCustomPackage}
                        className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                      >
                        Create My Package
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleSelectPackage(pkg.name)}
                        className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
                      >
                        Select Package
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
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
              onClick={handleCreateCustomPackage}
              size="lg"
              className="bg-hijau-dark/20 text-white border border-white hover:bg-white hover:text-hijau-blue"
            >
              Create Custom Package
              <ArrowRight className="h-4 w-4" />
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
              Select the services you're interested in for your custom landscape package. 
              You can choose multiple options.
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
                      {serviceOptions.map((service) => (
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
