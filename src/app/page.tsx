"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FiltersBar } from "@/components/filters-bar";
import { NeedsGrid } from "@/components/needs-grid";

// Sample data for demonstration
const sampleNeeds = [
  {
    id: "1",
    title: "Beach Cleanup Campaign in Ain Diab",
    description: "Help us clean the beautiful Ain Diab beach this weekend. All equipment provided.",
    city: "Casablanca",
    category: "Cleaning",
    status: "open" as const,
    volunteerCount: 12,
  },
  {
    id: "2",
    title: "School Supplies for Rural Students",
    description: "Collecting notebooks, pens, and backpacks for students in the Atlas mountains.",
    city: "Marrakech",
    category: "Education",
    status: "open" as const,
    volunteerCount: 8,
  },
  {
    id: "3",
    title: "Emergency Food Distribution",
    description: "Urgent need for volunteers to help distribute food packages to families in need.",
    city: "Fes",
    category: "Emergency",
    status: "open" as const,
    volunteerCount: 25,
  },
  {
    id: "4",
    title: "Blood Donation Drive",
    description: "Join our monthly blood donation drive at the regional hospital.",
    city: "Rabat",
    category: "Healthcare",
    status: "open" as const,
    volunteerCount: 15,
  },
  {
    id: "5",
    title: "Clothing Drive for Winter",
    description: "Collecting warm clothes and blankets for homeless individuals.",
    city: "Tangier",
    category: "Donation",
    status: "completed" as const,
    volunteerCount: 42,
  },
  {
    id: "6",
    title: "Community Garden Project",
    description: "Help build a community garden in the Hay Mohammadi neighborhood.",
    city: "Casablanca",
    category: "Infrastructure",
    status: "open" as const,
    volunteerCount: 6,
  },
  {
    id: "7",
    title: "Free Tutoring Sessions",
    description: "Volunteer tutors needed for after-school math and science sessions.",
    city: "Agadir",
    category: "Education",
    status: "open" as const,
    volunteerCount: 3,
  },
  {
    id: "8",
    title: "Medina Restoration Help",
    description: "Assist local artisans in restoring historic buildings in the old medina.",
    city: "Fes",
    category: "Infrastructure",
    status: "open" as const,
    volunteerCount: 9,
  },
  {
    id: "9",
    title: "Senior Care Visits",
    description: "Spend time with elderly residents at the local care home.",
    city: "Meknes",
    category: "Healthcare",
    status: "completed" as const,
    volunteerCount: 18,
  },
];

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredNeeds = sampleNeeds.filter((need) => {
    const cityMatch = selectedCity === "All Cities" || need.city === selectedCity;
    const categoryMatch = selectedCategory === "All Categories" || need.category === selectedCategory;
    return cityMatch && categoryMatch;
  });

  const handleParticipate = (id: string) => {
    // In a real app, this would call an API
    console.log("Participating in need:", id);
    alert(`Thank you for volunteering! You'll be connected with the organizer soon.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* Needs Section */}
        <section id="needs" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Active Needs
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Find opportunities to help in your community
                </p>
              </div>
              <FiltersBar
                selectedCity={selectedCity}
                selectedCategory={selectedCategory}
                onCityChange={setSelectedCity}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Grid */}
            <NeedsGrid needs={filteredNeeds} onParticipate={handleParticipate} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className="font-serif text-lg font-semibold text-foreground">Dir-Khir</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building stronger communities across Morocco
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
