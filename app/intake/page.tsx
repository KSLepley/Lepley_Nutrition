import type { Metadata } from "next";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Client Intake",
  robots: {
    index: false,
    follow: false
  }
};

export default function IntakePage() {
  return (
    <main>
      <Section className="pt-24 md:pt-28">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Client Intake</p>
            <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-5xl">
              Let&rsquo;s Build Your Plan
            </h1>
            <p className="mt-5 max-w-lg text-muted">
              Fill this out as honestly as you can. There are no wrong answers. We&rsquo;ll go deeper on anything medical
              or sensitive on our call, this is just the practical stuff.
            </p>
          </div>
          <IntakeForm />
        </div>
      </Section>
    </main>
  );
}
