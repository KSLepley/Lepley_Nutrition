"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  goal: string;
  nutritionStruggle: string;
  trackingMacros: "yes" | "no";
};

type ApplyFormProps = {
  selectedPlan?: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  age: "",
  gender: "",
  height: "",
  weight: "",
  activityLevel: "",
  goal: "fat loss",
  nutritionStruggle: "",
  trackingMacros: "no"
};

export function ApplyForm({ selectedPlan }: ApplyFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!termsAccepted) {
      setTermsError("You must agree to the Terms & Conditions before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setTermsError(null);

    const payload = {
      ...formData,
      selectedPlan: selectedPlan ?? "Not selected"
    };

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      // Optional dev log for local debugging.
      console.log("Apply form submission:", payload);
      setIsSubmitted(true);
      setFormData(initialFormData);
      setTermsAccepted(false);
    } catch (error) {
      console.error(error);
      setSubmitError("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-ink">
            Name
            <input
              required
              type="text"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            />
          </label>

          <label className="text-sm font-medium text-ink">
            Email
            <input
              required
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            />
          </label>

          <label className="text-sm font-medium text-ink">
            Age
            <input
              required
              type="number"
              min={1}
              value={formData.age}
              onChange={(event) => setFormData({ ...formData, age: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            />
          </label>

          <label className="text-sm font-medium text-ink">
            Gender
            <select
              required
              value={formData.gender}
              onChange={(event) => setFormData({ ...formData, gender: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="text-sm font-medium text-ink">
            Height
            <input
              required
              type="text"
              placeholder={"e.g. 5'7\""}
              value={formData.height}
              onChange={(event) => setFormData({ ...formData, height: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            />
          </label>

          <label className="text-sm font-medium text-ink">
            Weight
            <input
              required
              type="text"
              placeholder="e.g. 155 lbs"
              value={formData.weight}
              onChange={(event) => setFormData({ ...formData, weight: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            />
          </label>

          <label className="text-sm font-medium text-ink">
            Activity Level
            <select
              required
              value={formData.activityLevel}
              onChange={(event) => setFormData({ ...formData, activityLevel: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            >
              <option value="" disabled>
                Select activity level
              </option>
              <option value="lightly active">Lightly active</option>
              <option value="moderately active">Moderately active</option>
              <option value="very active">Very active</option>
              <option value="athlete-level">Athlete-level training</option>
            </select>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Guidelines: Lightly active = about 2 x 20-minute moderate heart-rate sessions per week. Moderately active =
              about 3-4 x 30-45-minute sessions per week. Very active = about 5-6 x 45-60-minute sessions per week.
              Athlete-level = 6+ sessions per week, often with longer duration or two-a-day training.
            </p>
          </label>

          <label className="text-sm font-medium text-ink md:col-span-2">
            Goal
            <select
              required
              value={formData.goal}
              onChange={(event) => setFormData({ ...formData, goal: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            >
              <option value="fat loss">Fat loss</option>
              <option value="muscle gain">Muscle gain</option>
              <option value="recomposition">Recomposition</option>
            </select>
          </label>

          <label className="text-sm font-medium text-ink md:col-span-2">
            Biggest Nutrition Struggle
            <textarea
              required
              rows={4}
              value={formData.nutritionStruggle}
              onChange={(event) => setFormData({ ...formData, nutritionStruggle: event.target.value })}
              className="mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none"
            />
          </label>

          <fieldset className="md:col-span-2">
            <legend className="text-sm font-medium text-ink">Currently tracking macros?</legend>
            <div className="mt-3 flex gap-6">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="trackingMacros"
                  value="yes"
                  checked={formData.trackingMacros === "yes"}
                  onChange={() => setFormData({ ...formData, trackingMacros: "yes" })}
                  className="h-4 w-4 border-beige text-ink focus:ring-sage"
                />
                Yes
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="trackingMacros"
                  value="no"
                  checked={formData.trackingMacros === "no"}
                  onChange={() => setFormData({ ...formData, trackingMacros: "no" })}
                  className="h-4 w-4 border-beige text-ink focus:ring-sage"
                />
                No
              </label>
            </div>
          </fieldset>
        </div>

        <div>
          <label className="inline-flex items-start gap-3 text-sm leading-relaxed text-ink">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => {
                setTermsAccepted(event.target.checked);
                if (event.target.checked) setTermsError(null);
              }}
              className="mt-1 h-4 w-4 border-beige text-ink focus:ring-sage"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="font-semibold underline underline-offset-4">
                Terms &amp; Conditions
              </Link>{" "}
              and understand this service does not provide medical advice.
            </span>
          </label>
          {termsError ? <p className="mt-2 text-xs text-red-700">{termsError}</p> : null}
        </div>

        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>

        {isSubmitted ? (
          <p className="rounded-xl border border-sage/50 bg-sage/20 px-4 py-3 text-sm text-ink">
            Your application has been received. Expect a response within 48 hours.
          </p>
        ) : null}

        {submitError ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p>
        ) : null}
      </form>
    </div>
  );
}
