"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "@/components/ui/loading";
import { trackConversion } from "@/components/analytics/google-analytics";

const contactSchema = z.object({
  companyName: z.string().optional(),
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  city: z.string().min(2, "City is required"),
  industry: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Track conversion
        trackConversion("contact_form_submission", 1);
        
        toast.success("Thank you!", {
          description: "We've received your message and will be in touch soon.",
        });
        reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        // Handle validation errors
        if (errorData.errors && Array.isArray(errorData.errors)) {
          const errorMessages = errorData.errors.map((e: any) => e.message).join(", ");
          throw new Error(errorMessages || "Please check your form and try again.");
        }
        throw new Error(errorData.message || "Submission failed. Please try again.");
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        description: error.message || "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="contactName"
            {...register("contactName")}
            placeholder="John Doe"
            className="h-11"
          />
          {errors.contactName && (
            <p className="mt-2 text-sm text-red-600">{errors.contactName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2.5">
            Company Name <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <Input
            id="companyName"
            {...register("companyName")}
            placeholder="Your company name"
            className="h-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2.5">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            className="h-11"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(555) 123-4567"
            className="h-11"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2.5">
            City <span className="text-red-500">*</span>
          </label>
          <Input
            id="city"
            {...register("city")}
            placeholder="e.g., Dallas, Austin, Houston, San Antonio"
            className="h-11"
          />
          {errors.city && (
            <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2.5">
            Industry of Interest <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <Input
            id="industry"
            {...register("industry")}
            placeholder="e.g., Automotive, Aerospace"
            className="h-11"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2.5">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          rows={6}
          {...register("message")}
          placeholder="Tell us about your hiring needs, timeline, and any specific requirements..."
          className="resize-none"
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <LoadingSpinner size="sm" />
            Submitting...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

