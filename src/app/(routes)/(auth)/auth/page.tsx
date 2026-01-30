import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { ZelligePattern } from "@/components/zellige-pattern";
import { ArrowLeft } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      {/* Background Pattern */}
      <ZelligePattern className="text-primary" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-terracotta/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      {/* Back to Home */}
      <Link
        href="/"
        className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:left-8 sm:top-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Auth Form */}
      <div className="relative z-10 w-full max-w-md">
        <AuthForm />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <p className="text-center text-sm text-muted-foreground">
          Building solidarity across Morocco
        </p>
      </div>
    </div>
  );
}
