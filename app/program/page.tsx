import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Personalized Performance Nutrition",
  description:
    "Macro-based nutrition coaching for body recomposition with personalized performance nutrition built around your schedule and goals.",
  keywords: [
    "Personalized meal plans",
    "Macro-based nutrition coaching",
    "Body recomposition",
    "Sustainable fat loss",
    "Muscle-building nutrition"
  ]
};

const whatYouGet = [
  "Personalized calorie & macro breakdown",
  "Ingredient-specific meal structure",
  "Multiple meal ideas (not one rigid template)",
  "Full grocery haul list",
  "Meal prep guidance for work or school",
  "Strategic meal timing (cardio, lifting, long work days)"
];

const specialtyFocus = [
  "Fat loss",
  "Muscle gain",
  "Body recomposition",
  "Skin health & inflammation support",
  "Performance optimization"
];

const whoThisIsFor = [
  "Athletes and active individuals",
  "Busy professionals",
  "People rebuilding their health",
  "Anyone wanting structure without extreme dieting",
  "Men and women of all ages"
];

const mostPlans = [
  "Drop calories aggressively",
  "Ignore previous eating habits",
  "Provide one rigid template",
  "Don't adjust to stress or lifestyle"
];

const thisApproach = [
  "Builds from your current intake",
  "Protects muscle while reducing fat",
  "Prioritizes sustainability",
  "Minimizes bloating",
  "Adjusts as your body adapts"
];

const faqs = [
  {
    question: "What is included in the Custom Structured Nutrition Plan?",
    answer:
      "The plan includes a personalized calorie + macro target, 3-4 meal ideas for breakfast, lunch, dinner, snack ideas, pre- and post-workout meals, a weekly grocery list, meal timing guidance, and a food substitution guide."
  },
  {
    question: "How does the support messaging work?",
    answer:
      "All clients can ask questions about implementation or food swaps. In the $97 plan, responses are typically within 24-48 hours. In the $147 support plan, priority responses are provided within the hour during business hours."
  },
  {
    question: "How long will it take to receive my plan?",
    answer:
      "After submission, plans are usually delivered within 48-72 hours depending on current volume."
  },
  {
    question: "Can I request changes after receiving my plan?",
    answer:
      "Yes - Tier 1 includes 1 adjustment within 14 days. Tier 2 includes up to 2 macro adjustments and structured refinement over 2 weeks."
  },
  {
    question: "What if I have specific dietary preferences or allergies?",
    answer:
      "Your intake form captures likes, dislikes, and restrictions, and your plan is tailored accordingly."
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. The structured meal options and guidance support people at any level of experience or training."
  },
  {
    question: "Will you write my meals for every day?",
    answer:
      "The plan provides a structured framework with multiple meal options to choose from based on your preferences - not rigid exact day-by-day instructions. This teaches flexibility and sustainability."
  },
  {
    question: "Do I need to track macros?",
    answer:
      "Tracking macros is recommended to stay on target; guidance is provided on how to do this if you are unfamiliar."
  },
  {
    question: "When should I expect results?",
    answer:
      "Results vary by individual, but adherence to the structure with consistent tracking typically leads to noticeable progress within a few weeks."
  },
  {
    question: "What if I don't live near you?",
    answer:
      "This is a fully remote service - plans and support work anywhere in the world."
  }
];

export default function ProgramPage() {
  return (
    <main>
      <Section className="pt-24 md:pt-28">
        <div className="rounded-2xl bg-beige/60 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Program Overview</p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl md:text-6xl">Personalized Performance Nutrition</h1>
          <p className="mt-5 max-w-3xl text-muted">
            This is not a generic PDF meal plan. Every program is built around your body, your schedule, your food
            preferences, and your goals.
          </p>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl">What You Get</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-beige pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Specialty Focus Options</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {specialtyFocus.map((item) => (
                <li key={item} className="rounded-xl bg-ivory px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl">Who This Is For</h2>
            <ul className="mt-6 space-y-4">
              {whoThisIsFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-sage/50 bg-sage/10 p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl">Why This Is Different</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Most plans</p>
                <ul className="mt-3 space-y-3">
                  {mostPlans.map((item) => (
                    <li key={item} className="rounded-lg bg-ivory/90 px-3 py-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">This approach</p>
                <ul className="mt-3 space-y-3">
                  {thisApproach.map((item) => (
                    <li key={item} className="rounded-lg bg-ivory px-3 py-2 text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Testimonials</p>
          <h3 className="mt-3 font-[family-name:var(--font-serif)] text-2xl">Client outcomes and transformation stories coming soon.</h3>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-beige">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-base font-semibold leading-snug text-ink md:text-lg">{faq.question}</h3>
                <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted md:text-[15px]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-ink px-8 py-10 text-ivory md:flex md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/70">Take the next step</p>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl">Apply for Your Plan</h2>
          </div>
          <Button href="/apply" variant="secondary" className="mt-6 border-ivory text-ivory hover:bg-white/10 md:mt-0">
            Apply for Your Plan
          </Button>
        </div>
      </Section>
    </main>
  );
}
