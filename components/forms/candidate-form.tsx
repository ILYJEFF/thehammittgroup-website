"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { LoadingSpinner } from "@/components/ui/loading";

const candidateSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  currentLocation: z.string().min(2, "Current location is required"),
  desiredLocation: z.enum(["DFW", "Austin", "Houston", "San Antonio"], {
    required_error: "Please select a desired location",
  }),
  industry: z.string().min(2, "Industry is required"),
  positionType: z.string().min(2, "Position type is required"),
  coverLetter: z.string().optional(),
  resume: z.instanceof(FileList).refine((files) => files.length > 0, "Resume is required"),
});

type CandidateFormData = z.infer<typeof candidateSchema>;

export function CandidateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CandidateFormData>({
    resolver: zodResolver(candidateSchema),
  });

  const onSubmit = async (data: CandidateFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("currentLocation", data.currentLocation);
      formData.append("desiredLocation", data.desiredLocation);
      formData.append("industry", data.industry);
      formData.append("positionType", data.positionType);
      if (data.coverLetter) {
        formData.append("coverLetter", data.coverLetter);
      }
      formData.append("resume", data.resume[0]);

      const response = await fetch("/api/candidate", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Resume submitted!", {
          description: "We'll review your submission and be in touch soon.",
        });
        reset();
      } else {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || "Submission failed");
      }
    } catch (error: any) {
      toast.error("Submission failed", {
        description: error.message || "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="firstName"
            {...register("firstName")}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="lastName"
            {...register("lastName")}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-700 mb-2">
          Current Location <span className="text-red-500">*</span>
        </label>
        <Input
          id="currentLocation"
          {...register("currentLocation")}
          placeholder="City, State"
        />
        {errors.currentLocation && (
          <p className="mt-1 text-sm text-red-600">{errors.currentLocation.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="desiredLocation" className="block text-sm font-medium text-gray-700 mb-2">
          Desired Location <span className="text-red-500">*</span>
        </label>
        <Select id="desiredLocation" {...register("desiredLocation")}>
          <option value="">Select a location</option>
          <option value="DFW">Dallas-Fort Worth</option>
          <option value="Austin">Austin</option>
          <option value="Houston">Houston</option>
          <option value="San Antonio">San Antonio</option>
        </Select>
        {errors.desiredLocation && (
          <p className="mt-1 text-sm text-red-600">{errors.desiredLocation.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry Experience <span className="text-red-500">*</span>
          </label>
          <Input
            id="industry"
            {...register("industry")}
            placeholder="e.g., Automotive, Aerospace"
          />
          {errors.industry && (
            <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="positionType" className="block text-sm font-medium text-gray-700 mb-2">
            Position Type <span className="text-red-500">*</span>
          </label>
          <Input
            id="positionType"
            {...register("positionType")}
            placeholder="e.g., Plant Manager, Production Supervisor"
          />
          {errors.positionType && (
            <p className="mt-1 text-sm text-red-600">{errors.positionType.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
          Resume <span className="text-red-500">*</span>
        </label>
        <Input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          {...register("resume")}
        />
        <p className="mt-1 text-sm text-gray-500">
          Accepted formats: PDF, DOC, DOCX (Max 10MB)
        </p>
        {errors.resume && (
          <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
          Cover Letter (Optional)
        </label>
        <Textarea
          id="coverLetter"
          rows={6}
          {...register("coverLetter")}
          placeholder="Tell us about yourself and your career goals..."
        />
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
          "Submit Resume"
        )}
      </Button>
    </form>
  );
}

