"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("Login result:", result); // Debug log

      // Handle the case where ok is true but error is 'undefined' (NextAuth quirk)
      if (result?.ok && (!result.error || result.error === "undefined")) {
        // Verify session was actually created
        const session = await getSession();
        if (session) {
          router.push("/admin/dashboard");
          router.refresh();
        } else {
          setError("Session creation failed. Please try again.");
        }
      } else if (result?.error) {
        // Handle different error types
        const errorMessage = 
          result.error === "CredentialsSignin" || result.error === "undefined"
            ? "Invalid email or password" 
            : result.error === "Configuration"
            ? "Server configuration error. Please contact support."
            : typeof result.error === "string" && result.error !== "undefined"
            ? result.error
            : "Invalid email or password";
        setError(errorMessage);
      } else {
        setError("Unable to sign in. Please check your credentials and try again.");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMessage = 
        error?.message || 
        error?.toString() || 
        "An unexpected error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-safe">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl md:text-2xl">Admin Login</CardTitle>
          <CardDescription className="text-sm md:text-base">Sign in to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@example.com"
                className="h-12 md:h-11 touch-manipulation"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 md:h-11 touch-manipulation"
                autoComplete="current-password"
              />
            </div>
            {error && (
              <div className="p-3 bg-red-50 text-red-800 rounded-lg text-sm">
                {error}
              </div>
            )}
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full min-h-[48px] touch-manipulation" 
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

