"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MapPin, Tag, Phone, Send, Lightbulb } from "lucide-react";

const cities = [
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
  "Cleaning",
  "Education",
  "Emergency",
  "Donation",
  "Healthcare",
  "Infrastructure",
];

export function ProposeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    city: "",
    category: "",
    whatsapp: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Your need has been published! Volunteers will be able to see it and offer help.");
    setFormData({
      title: "",
      description: "",
      city: "",
      category: "",
      whatsapp: "",
    });
  };

  return (
    <Card className="w-full max-w-2xl border-border/50 shadow-xl">
      <CardHeader className="pb-6">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Lightbulb className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-serif text-2xl">Propose a Community Need</CardTitle>
        <CardDescription className="text-base">
          Describe what your community needs. Volunteers across Morocco will see your request
          and offer their help.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              Title
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="E.g., Beach cleanup in Ain Diab"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              maxLength={100}
            />
            <p className="text-xs text-muted-foreground">
              Keep it short and descriptive (max 100 characters)
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the need in detail: what help is required, when, where, and any specific requirements..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Be specific about what volunteers should expect
            </p>
          </div>

          {/* City and Category Row */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                City
              </Label>
              <Select
                value={formData.city}
                onValueChange={(value) => setFormData({ ...formData, city: value })}
                required
              >
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select your city" />
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

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                Category
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
                required
              >
                <SelectTrigger id="category">
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

          {/* WhatsApp */}
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              WhatsApp Number
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="+212 6XX XXX XXX"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              required
            />
            <p className="text-xs text-muted-foreground">
              Volunteers will contact you via WhatsApp to coordinate
            </p>
          </div>

          {/* Info Box */}
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <h4 className="font-medium text-foreground">What happens next?</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Your need will be visible to all Dir-Khir volunteers</li>
              <li>Interested citizens will contact you via WhatsApp</li>
              <li>You can mark your need as resolved once help is received</li>
            </ul>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "Publishing..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Publish the Need
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
