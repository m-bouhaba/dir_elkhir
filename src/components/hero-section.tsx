import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ZelligePattern } from "@/components/zellige-pattern";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Moroccan Hero Background — community, solidarity, transition */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/zzlij.jpg"
          alt="Moroccan neighborhood life and community solidarity"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Subtle zellige texture */}
        <div className="absolute inset-0 opacity-[0.08]">
          <ZelligePattern className="text-primary" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur">
            <Heart className="h-4 w-4 text-primary" fill="currentColor" />
            <span className="text-sm font-medium text-primary">
              Citizen Solidarity Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Local solidarity,</span>
            <span className="block text-primary">
              from Tangier to Lagouira
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Connect with your neighbors, propose real community needs,
            and take action together. Dir-Khir turns solidarity into impact.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/propose">
                Propose a Need
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base bg-white/10 text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link href="#needs">Explore Needs</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <Users className="mb-2 h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-white">2,500+</span>
              <span className="text-sm text-white/80">
                Active Citizens
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <Heart className="mb-2 h-6 w-6 text-terracotta" />
              <span className="text-2xl font-bold text-white">850+</span>
              <span className="text-sm text-white/80">
                Needs Fulfilled
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <MapPin className="mb-2 h-6 w-6 text-teal" />
              <span className="text-2xl font-bold text-white">45+</span>
              <span className="text-sm text-white/80">
                Cities Connected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
