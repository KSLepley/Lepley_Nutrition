import Link from "next/link";
import type { Metadata } from "next";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { Section } from "@/components/ui/Section";
import { getPlanById, plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply for personalized meal plans and macro-based nutrition coaching focused on body recomposition and long-term performance.",
  keywords: [
    "Personalized meal plans",
    "Macro-based nutrition coaching",
    "Body recomposition",
    "Sustainable fat loss",
    "Muscle-building nutrition"
  ]
};

const steps = [
  {
    title: "Step 1 - Apply",
    description:
      "You submit height, weight, gender, activity level, eating habits, food preferences, time availability, and goals."
  },
  {
    title: "Step 2 - Strategic Calculation",
    description:
      "Your plan is built using your metabolic needs, past intake patterns, training schedule, and lifestyle constraints."
  },
  {
    title: "Step 3 - Delivery + 1:1 Support",
    description:
      "You receive a structured plan with macros, grocery lists, meal ideas, timing strategy, and ongoing direct support with adjustments as needed."
  }
];

type ApplyPageProps = {
  searchParams: Promise<{ plan?: string }>;
};

export default async function ApplyPage({ searchParams }: ApplyPageProps) {
  const { plan } = await searchParams;
  const selectedPlan = getPlanById(plan);

  return (
    <main>
      {selectedPlan ? (
        <Section className="pt-24 md:pt-28">
          <div className="rounded-2xl border border-sage/50 bg-sage/10 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Selected Plan</p>
            <p className="mt-2 font-[family-name:var(--font-serif)] text-3xl">{selectedPlan.name}</p>
            <p className="mt-2 text-sm text-muted">Selected Plan: {selectedPlan.name}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {plans.map((planOption) => {
                const isActive = planOption.id === selectedPlan.id;
                return (
                  <Link
                    key={planOption.id}
                    href={`/apply?plan=${planOption.id}`}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive ? "border-ink bg-ink text-ivory" : "border-beige bg-ivory text-ink hover:bg-beige"
                    }`}
                  >
                    {planOption.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
      ) : (
        <Section className="pt-24 md:pt-28">
          <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Plan Selection</p>
            <p className="mt-2 text-sm text-muted">
              Want to preselect your tier? Choose a plan first on the plans page.
            </p>
            <Link href="/plans" className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
              View Plans
            </Link>
          </div>
        </Section>
      )}

      <Section className={selectedPlan ? "pt-4" : "pt-4"}>
        <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">How It Works</p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl">A structured process designed for real life.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-xl border border-beige bg-ivory p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Application</p>
            <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-5xl">
              Apply for Your Personalized Plan
            </h1>
            <p className="mt-5 max-w-lg text-muted">
              Complete this quick intake form so your program can be built around your body, training load, and weekly schedule.
            </p>
          </div>
          <ApplyForm selectedPlan={selectedPlan?.name} />
        </div>
      </Section>
    </main>
  );
}
