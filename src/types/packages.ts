
import { ReactNode } from "react";

// Package category type for filtering
export type PackageCategory = "residential" | "commercial";

// Package interface
export interface Package {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  minPrice: number;
  features: string[];
  category: PackageCategory[];
  icon: ReactNode;
  color: string;
  cashback?: string;
}

// List of packages
export const packagesData: Package[] = [];  // We'll fill this in the Packages.tsx component since it contains React components
