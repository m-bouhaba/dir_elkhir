import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ZelligePattern } from "@/components/zellige-pattern";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <ZelligePattern className="text-primary" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <Heart className="h-4 w-4 text-primary" fill="currentColor" />
            <span className="text-sm font-medium text-primary">Citizen Solidarity Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="block text-balance">Local solidarity,</span>
            <span className="block text-balance text-primary">from Tangier to Lagouira</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Connect with your neighbors, propose community needs, and take action together. 
            Dir-Khir brings Moroccans together to build stronger, more supportive communities.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/propose">
                Propose a Need
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent" asChild>
              <Link href="#needs">
                Explore Needs
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <Users className="mb-2 h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">2,500+</span>
              <span className="text-sm text-muted-foreground">Active Citizens</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <Heart className="mb-2 h-6 w-6 text-terracotta" />
              <span className="text-2xl font-bold text-foreground">850+</span>
              <span className="text-sm text-muted-foreground">Needs Fulfilled</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <MapPin className="mb-2 h-6 w-6 text-teal" />
              <span className="text-2xl font-bold text-foreground">45+</span>
              <span className="text-sm text-muted-foreground">Cities Connected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
