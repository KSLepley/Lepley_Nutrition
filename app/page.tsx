import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Personalized Meal Plans",
  description:
    "Personalized meal plans and macro-based nutrition coaching for body recomposition, sustainable fat loss, and muscle-building nutrition.",
  keywords: [
    "Personalized meal plans",
    "Macro-based nutrition coaching",
    "Body recomposition",
    "Sustainable fat loss",
    "Muscle-building nutrition"
  ]
};

const idealForItems = [
  "People who lift and want visible results",
  "People tired of guessing macros",
  "People who want structure without restriction",
  "People who struggle with bloating"
];

const philosophyItems = [
  "Muscle retention",
  "Sustainable fat loss",
  "Energy optimization",
  "Hormonal balance",
  "Reduced bloating",
  "Long-term adherence"
];

const founderHighlights = [
  "STEM graduate",
  "Former college athlete",
  "50lb transformation rebuild",
  "Performance-based nutrition approach"
];

const galleryImages = [
  { src: "/images/physique-1.jpg", alt: "Body recomposition progress with a strong, athletic physique", position: "center 30%" },
  { src: "/images/physique-2.jpg", alt: "Lean muscle-focused progress from personalized macro coaching" },
  { src: "/images/lifestyle-1.jpg", alt: "Active lifestyle and sustainable nutrition habits in daily routine" }
];

const mealGalleryImages = [
  { src: "/images/Image%20(2).jpeg", alt: "High-protein whole-food meal prepared for nutrition coaching clients" },
  { src: "/images/Image%20(3).jpeg", alt: "Balanced meal example with protein, carbs, and healthy fats" },
  { src: "/images/Image%20(5).jpeg", alt: "Prepared whole-food meal option from structured nutrition planning" },
  { src: "/images/Image%20(6).jpeg", alt: "Macro-friendly meal built for performance and recovery" },
  { src: "/images/Image%20(7).jpeg", alt: "Flexible high-protein meal idea with balanced macros" }
];

export default function HomePage() {
  return (
    <main>
      <Section className="pt-24 md:pt-28">
        <div className="rounded-2xl bg-beige/60 p-8 md:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">Personalized Nutrition Coaching</p>
          <h1 className="max-w-4xl font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-6xl">
            Custom Meal Plans Built Around Your Body &mdash; Not Trends.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            High-protein. Low-bloat. Sustainable. Built for real life.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/program">View The Program</Button>
            <Button href="/apply" variant="secondary">
              Apply Now
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-beige bg-white/40 p-8 md:p-10">
          <h2 className="max-w-3xl font-[family-name:var(--font-serif)] text-3xl leading-tight md:text-4xl">Built From Experience</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-muted">
            Hi! My name is Kaylie Lepley and I a STEM college graduate, former college athlete, and lifelong multi-sport competitor with a deep focus on
            performance, health, and sustainable results.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted">
            My background blends analytical and algorithmic thinking with real-world physical performance.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted">I have personally experienced both extremes of transformation:</p>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-[15px] leading-relaxed">
              <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
              <span>Gaining over 50 pounds during COVID and rebuilding my body through disciplined nutrition.</span>
            </li>
            <li className="flex items-start gap-3 text-[15px] leading-relaxed">
              <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
              <span>Becoming underweight during college due to stress, to the point where I battled with Hypothalamic amenorrhea, but learned how to properly fuel and restore my health.</span>
            </li>
          </ul>
          <p className="mt-5 max-w-4xl leading-relaxed text-muted">
            Through research, structure, and experimentation, I developed a sustainable, performance-based nutrition system
            focused on body recomposition, energy optimization, and longevity.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted">
            Today I live an active lifestyle centered around lifting, outdoor movement, and pushing physical limits while
            maintaining flexibility and balance with mostly whole foods and structured macro planning.
          </p>
          <div className="mt-8 border-t border-beige pt-6">
            <Button href="/apply">Start Your Custom Plan</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-2xl border border-ink/15 bg-ink px-8 py-12 text-ivory md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory/70">The Philosophy</p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-serif)] text-3xl leading-tight md:text-5xl">
            Nutrition should build your body &mdash; not punish it.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ivory/80 md:text-base">
            Extreme deficits, elimination diets, and rigid templates fail long-term. Real transformation comes from
            structure, consistency, and intelligent macro balance.
          </p>
          <div className="my-8 border-t border-ivory/20" />
          <ul className="grid gap-3 md:grid-cols-2">
            {philosophyItems.map((item) => (
              <li key={item} className="rounded-xl border border-ivory/20 bg-white/5 px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-8 rounded-2xl border border-beige bg-white/40 p-6 md:grid-cols-[1fr_1fr] md:items-center md:p-8">
          <div>
            <div className="relative h-[420px] overflow-hidden rounded-2xl bg-beige/50">
              <Image
                src="/images/kaylie-profile.jpg"
                alt="Founder portrait for Lepley Nutrition performance-based coaching"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-xs text-muted"> UCSC Class of 2025 </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">About the Founder</p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl">Built on science, tested in real life.</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              I coach from both data and lived experience, translating complex nutrition strategy into practical structure
              for busy, performance-focused lives.
            </p>
            <ul className="mt-5 space-y-3">
              {founderHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Physique / Lifestyle Gallery</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {galleryImages.map((image) => (
              <figure key={image.src} className="relative h-72 overflow-hidden rounded-xl bg-beige/40">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: image.position ?? "center" }}
                />
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Meal Gallery</p>
          <div className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {mealGalleryImages.map((image) => (
              <figure
                key={image.src}
                className="relative aspect-square w-[56vw] shrink-0 snap-start overflow-hidden rounded-xl bg-beige/40 sm:w-[32vw] lg:w-[21vw]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-2xl border border-sage/50 bg-ivory p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Who This Is For</p>
          <ul className="mt-5 space-y-4">
            {idealForItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-ink px-8 py-10 text-ivory md:flex md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/70">Ready to begin</p>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl">Start Your Custom Plan</h2>
          </div>
          <Button href="/apply" variant="secondary" className="mt-6 border-ivory text-ivory hover:bg-white/10 md:mt-0">
            Apply Now
          </Button>
        </div>
      </Section>
    </main>
  );
}
