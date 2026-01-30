"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { NeedsGrid } from "@/components/needs-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ZelligePattern } from "@/components/zellige-pattern";
import { Plus, FileText, HandHeart, User, Settings } from "lucide-react";

// Sample data for user's needs
const myNeeds = [
  {
    id: "user-1",
    title: "Neighborhood Street Cleanup",
    description: "Organizing a cleanup of our main street this Saturday morning.",
    city: "Casablanca",
    category: "Cleaning",
    status: "open" as const,
    volunteerCount: 7,
  },
  {
    id: "user-2",
    title: "Tutoring for High School Students",
    description: "Looking for volunteers to help students prepare for their baccalaureate exams.",
    city: "Casablanca",
    category: "Education",
    status: "open" as const,
    volunteerCount: 3,
  },
  {
    id: "user-3",
    title: "Food Drive for Ramadan",
    description: "Collected food packages for distribution during Ramadan.",
    city: "Casablanca",
    category: "Donation",
    status: "completed" as const,
    volunteerCount: 28,
  },
];

// Sample data for user's participations
const myParticipations = [
  {
    id: "part-1",
    title: "Beach Cleanup Campaign in Ain Diab",
    description: "Help us clean the beautiful Ain Diab beach this weekend.",
    city: "Casablanca",
    category: "Cleaning",
    status: "open" as const,
    volunteerCount: 12,
  },
  {
    id: "part-2",
    title: "Blood Donation Drive",
    description: "Monthly blood donation drive at the regional hospital.",
    city: "Rabat",
    category: "Healthcare",
    status: "completed" as const,
    volunteerCount: 45,
  },
  {
    id: "part-3",
    title: "School Supplies Collection",
    description: "Collecting supplies for rural schools in the Atlas region.",
    city: "Marrakech",
    category: "Education",
    status: "open" as const,
    volunteerCount: 19,
  },
];

export default function DashboardPage() {
  const [needs, setNeeds] = useState(myNeeds);

  const handleMarkResolved = (id: string) => {
    setNeeds((prev) =>
      prev.map((need) =>
        need.id === id ? { ...need, status: "completed" as const } : need
      )
    );
    alert("Need marked as resolved. Thank you for your contribution!");
  };

  const openNeedsCount = needs.filter((n) => n.status === "open").length;
  const completedNeedsCount = needs.filter((n) => n.status === "completed").length;
  const participationsCount = myParticipations.length;

  return (
    <div className="min-h-screen bg-background">

      <main className="relative py-8 sm:py-12">
        {/* Background Pattern */}
        <ZelligePattern className="text-primary opacity-50" />
        
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <User className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  My Dashboard
                </h1>
                <p className="text-muted-foreground">Manage your needs and participations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button size="sm" asChild>
                <Link href="/propose">
                  <Plus className="mr-2 h-4 w-4" />
                  New Need
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardDescription>Active Needs</CardDescription>
                <CardTitle className="text-3xl font-bold text-primary">{openNeedsCount}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Needs awaiting volunteers</p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardDescription>Completed</CardDescription>
                <CardTitle className="text-3xl font-bold text-emerald-light">{completedNeedsCount}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Successfully fulfilled</p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardDescription>Participations</CardDescription>
                <CardTitle className="text-3xl font-bold text-terracotta">{participationsCount}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Actions you joined</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="my-needs" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2 sm:w-auto sm:inline-flex">
              <TabsTrigger value="my-needs" className="gap-2">
                <FileText className="h-4 w-4" />
                My Needs
              </TabsTrigger>
              <TabsTrigger value="participations" className="gap-2">
                <HandHeart className="h-4 w-4" />
                My Participations
              </TabsTrigger>
            </TabsList>

            {/* My Needs Tab */}
            <TabsContent value="my-needs">
              {needs.length > 0 ? (
                <NeedsGrid
                  needs={needs}
                  showResolveButton={true}
                  onMarkResolved={handleMarkResolved}
                />
              ) : (
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <div className="mb-4 rounded-full bg-muted p-4">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      No needs posted yet
                    </h3>
                    <p className="mb-6 mt-1 text-center text-sm text-muted-foreground">
                      Share your first community need and get help from volunteers
                    </p>
                    <Button asChild>
                      <Link href="/propose">
                        <Plus className="mr-2 h-4 w-4" />
                        Propose a Needrtrt
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Participations Tab */}
            <TabsContent value="participations">
              {myParticipations.length > 0 ? (
                <NeedsGrid needs={myParticipations} />
              ) : (
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <div className="mb-4 rounded-full bg-muted p-4">
                      <HandHeart className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      No participations yet
                    </h3>
                    <p className="mb-6 mt-1 text-center text-sm text-muted-foreground">
                      Join community actions and make a difference
                    </p>
                    <Button asChild>
                      <Link href="/#needs">Explore Needs</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Dir-Khir - Building solidarity across Morocco
          </p>
        </div>
      </footer>
    </div>
  );
}
