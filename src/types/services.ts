
export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Custom package service options
export const serviceOptions = [
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
export const servicesData: Service[] = [
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
    image: "/lovable-uploads/ecc2acb1-bde1-4ebe-8468-a4d9a3f3c167.png",
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
    image: "/lovable-uploads/3246ee22-2aa0-41e7-80dd-fbd2edb15701.png",
  },
  {
    id: 5,
    name: "Construction",
    description: "Expert implementation of landscape designs with quality materials and craftsmanship.",
    image: "/lovable-uploads/2ea8d5b1-53a9-46ed-86ca-d77ddd731cbc.png",
  },
  {
    id: 6,
    name: "Natural & Artificial Grass Installation",
    description: "Professional installation of natural or artificial grass for a perfect lawn all year round.",
    image: "/lovable-uploads/58779427-850f-4b04-9e07-3840a10a14b4.png",
  },
  {
    id: 7,
    name: "Water Feature",
    description: "Custom water features including ponds, fountains, and waterfalls to add tranquility and visual interest.",
    image: "/lovable-uploads/a4f968e6-4116-4c2b-ba91-d14a74c66f42.png",
  },
  {
    id: 8,
    name: "Tiny House / Playhouse",
    description: "Custom built tiny houses and playhouses to add charm and functionality to your landscape.",
    image: "/lovable-uploads/c7dbe7b8-ca6f-4692-a3ab-5405385314e2.png",
  },
  {
    id: 9,
    name: "Lawn Maintenance",
    description: "Regular maintenance services to keep your landscape looking its best year-round.",
    image: "/lovable-uploads/62324110-9625-4f23-8d77-1de29328b202.png",
  },
  {
    id: 10,
    name: "Nursery",
    description: "Quality plants, trees, and shrubs selected for your specific landscape needs and local climate.",
    image: "/lovable-uploads/980b9789-354d-4730-9095-827baeb82535.png",
  },
];
