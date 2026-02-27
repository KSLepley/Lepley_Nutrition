import type { Metadata } from "next";
import { PlanCard } from "@/components/plans/PlanCard";
import { Section } from "@/components/ui/Section";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Choose Your Plan",
  description:
    "Choose your personalized meal plan tier with macro-based nutrition coaching focused on body recomposition and sustainable fat loss.",
  keywords: [
    "Personalized meal plans",
    "Macro-based nutrition coaching",
    "Body recomposition",
    "Sustainable fat loss",
    "Muscle-building nutrition"
  ]
};

const ctaMap: Record<(typeof plans)[number]["id"], string> = {
  custom: "Apply for This Plan",
  support: "Apply for Support Plan"
};

const descriptionMap: Record<(typeof plans)[number]["id"], string> = {
  custom: "For self-motivated individuals who want structure without weekly check-ins.",
  support: "For individuals who want accountability, faster responses, and precision adjustments."
};

const noteMap: Partial<Record<(typeof plans)[number]["id"], string>> = {
  custom: "Ideal for people comfortable executing independently."
};

export default function PlansPage() {
  return (
    <main>
      <Section className="pt-24 md:pt-28">
        <div className="rounded-2xl bg-beige/60 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Pricing Tiers</p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl md:text-6xl">Choose Your Plan</h1>
          <p className="mt-5 max-w-3xl text-muted">
            Structured nutrition built around your body, your schedule, and your goals.
          </p>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => {
            return (
              <PlanCard
                key={plan.id}
                title={plan.name}
                price={plan.price}
                subtitle={plan.duration}
                description={descriptionMap[plan.id]}
                features={plan.features}
                ctaLabel={ctaMap[plan.id]}
                ctaHref={`/apply?plan=${plan.id}`}
                note={noteMap[plan.id]}
                highlighted={plan.id === "support"}
              />
            );
          })}
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Founding Client Rate</p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl">Founding Client Rate</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            These prices reflect early-stage founding rates while transformation case studies and testimonials are being
            built. Pricing will increase as demand grows.
          </p>
        </div>
      </Section>
    </main>
  );
}
