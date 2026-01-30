import { Header } from "@/components/header";
import { ProposeForm } from "@/components/propose-form";
import { ZelligePattern } from "@/components/zellige-pattern";

export default function ProposePage() {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="relative py-12 sm:py-16 lg:py-20">
        {/* Background Pattern */}
        <ZelligePattern className="text-primary" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Share a Community Need
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether it&apos;s a cleanup initiative, educational support, or emergency help,
              your neighbors are ready to assist.
            </p>
          </div>

          {/* Form */}
          <div className="flex justify-center">
            <ProposeForm />
          </div>
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
