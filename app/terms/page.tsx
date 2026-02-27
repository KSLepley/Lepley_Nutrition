import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Lepley Nutrition coaching services, including disclaimer, refund policy, and communication boundaries.",
  keywords: [
    "Terms and Conditions",
    "Nutrition coaching terms",
    "Refund policy",
    "No medical advice",
    "Lepley Nutrition"
  ]
};

const termsSections = [
  {
    heading: "No Medical Advice Disclaimer",
    body:
      "All nutrition guidance and plan recommendations are provided for educational purposes only and do not constitute medical advice."
  },
  {
    heading: "Not a Registered Dietitian",
    body:
      "Services are provided as nutrition coaching and are not licensed medical or dietetic care."
  },
  {
    heading: "Medical Clearance Responsibility",
    body:
      "Each client is responsible for consulting a physician before beginning any nutrition or training program."
  },
  {
    heading: "No Guaranteed Results",
    body:
      "Results vary based on adherence, lifestyle, training consistency, and individual factors. No specific outcomes are guaranteed."
  },
  {
    heading: "Refund Policy",
    body:
      "Refunds are available within 24 hours of purchase if work has not yet begun. No refunds are provided after plan delivery."
  }
];

export default function TermsPage() {
  return (
    <main>
      <Section className="pt-24 md:pt-28">
        <div className="rounded-2xl bg-beige/60 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Policy</p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl md:text-6xl">Terms &amp; Conditions</h1>
          <p className="mt-5 max-w-3xl text-muted">Please review these terms before purchasing or starting your nutrition plan.</p>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
          <div className="space-y-8">
            {termsSections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl">{section.heading}</h2>
                <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted md:text-base">{section.body}</p>
              </article>
            ))}

            <article>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl">Communication Boundaries</h2>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted md:text-base">
                Response windows are based on selected support level and business-hour availability. Weekend response timing may vary.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="rounded-xl border border-beige bg-ivory px-4 py-3 text-sm text-ink">
                  <span className="font-semibold">Standard Plan:</span> 24-48 hours
                </li>
                <li className="rounded-xl border border-beige bg-ivory px-4 py-3 text-sm text-ink">
                  <span className="font-semibold">Support Plan:</span> Within the hour during business hours
                </li>
              </ul>
            </article>
          </div>
        </div>
      </Section>
    </main>
  );
}
