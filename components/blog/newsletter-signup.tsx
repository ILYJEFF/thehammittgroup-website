"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, we'll use a simple API route
      // You can integrate with Mailchimp, ConvertKit, or Resend later
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Successfully subscribed!", {
          description: "You'll receive our latest manufacturing insights and updates.",
        });
        setEmail("");
      } else {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || "Subscription failed");
      }
    } catch (error: any) {
      toast.error("Subscription failed", {
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
      <p className="text-primary-100 mb-4 text-sm">
        Get the latest manufacturing recruitment insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-white text-gray-900"
        />
        <Button
          type="submit"
          variant="secondary"
          disabled={isSubmitting}
          className="whitespace-nowrap"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      <p className="text-xs text-primary-200 mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}

