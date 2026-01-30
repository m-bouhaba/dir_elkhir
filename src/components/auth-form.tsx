"use client";

import React from "react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";
import SignInForm from "@/app/(routes)/(auth)/components/signin/form";
import SignUpForm from "@/app/(routes)/(auth)/components/form";

export function AuthForm() {
  return (
    <Card className="w-full max-w-md border-border/50 shadow-xl">
      <CardHeader className="space-y-1 pb-4 text-center">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
          <Heart
            className="h-6 w-6 text-primary-foreground"
            fill="currentColor"
          />
        </div>
        <CardTitle className="font-serif text-2xl">Welcome to Dir-Khir</CardTitle>
        <CardDescription>Join our community of changemakers</CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* Login Form (Better Auth + RHF + Zod) */}
          <TabsContent value="login" className="mt-4">
            <SignInForm />
          </TabsContent>

          {/* Register Form (Better Auth + RHF + Zod) */}
          <TabsContent value="register" className="mt-4">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 border-t border-border/50 pt-6">
        <p className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link href="#" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
