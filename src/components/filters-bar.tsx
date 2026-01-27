"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Tag } from "lucide-react";

export interface FiltersBarProps {
  selectedCity: string;
  selectedCategory: string;
  onCityChange: (city: string) => void;
  onCategoryChange: (category: string) => void;
}

const cities = [
  "All Cities",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fes",
  "Tangier",
  "Agadir",
  "Meknes",
  "Oujda",
  "Kenitra",
  "Tetouan",
];

const categories = [
  "All Categories",
  "Cleaning",
  "Education",
  "Emergency",
  "Donation",
  "Healthcare",
  "Infrastructure",
];

export function FiltersBar({
  selectedCity,
  selectedCategory,
  onCityChange,
  onCategoryChange,
}: FiltersBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1 sm:max-w-[200px]">
        <Select value={selectedCity} onValueChange={onCityChange}>
          <SelectTrigger className="h-11 bg-card pl-10">
            <MapPin className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="relative flex-1 sm:max-w-[200px]">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="h-11 bg-card pl-10">
            <Tag className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
