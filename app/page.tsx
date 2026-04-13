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
  "CS & AI degree. I approach nutrition the same way I approach code: find the problem, build a system, test it, and improve it.",
  "Athlete since I was a kid. I grew up competing and I still train every day.",
  "Been on both sides. Gained 50+ lbs, lost too much weight, and rebuilt from each. Not theory. Real life.",
  "Helping people with their nutrition since 2020. Friends, gym partners, and now clients."
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
            Custom Meal Plans Built Around Your Body. Not Trends.
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
          <h2 className="max-w-3xl font-[family-name:var(--font-serif)] text-3xl leading-tight md:text-4xl">Built From Experience. Not a Textbook.</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-muted">
            Hey, I&rsquo;m Kaylie. I have a degree in Computer Science and AI, I&rsquo;ve been in sports my whole life, and I&rsquo;ve been helping people with their nutrition since 2020.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted">
            I didn&rsquo;t learn this from a weekend course. I learned it by going through it myself, doing the research, and then helping the people around me do the same thing. My CS background means I think about nutrition like a system: look at what&rsquo;s actually going on, figure out what&rsquo;s not working, build something that fits your real life, and adjust as you go.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted">I&rsquo;ve been on both sides of it:</p>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-[15px] leading-relaxed">
              <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
              <span>I gained over 50 pounds during COVID. I didn&rsquo;t crash diet my way out of it. I built a structured plan, stuck with it, and rebuilt my body the right way.</span>
            </li>
            <li className="flex items-start gap-3 text-[15px] leading-relaxed">
              <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
              <span>In college I went the other direction. Stress took over, I got dangerously underweight, and I lost my period (Hypothalamic amenorrhea). I had to learn how to properly fuel my body and get my health back on track.</span>
            </li>
          </ul>
          <p className="mt-5 max-w-4xl leading-relaxed text-muted">
            Most people giving nutrition advice have only been on one side. I&rsquo;ve been on both, and I figured my way out each time. That&rsquo;s what I bring to every plan I build.
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
            Nutrition should build your body. Not punish it.
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
            <p className="mt-3 text-xs text-muted">UCSC &rsquo;25, Computer Science &amp; AI</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">About the Founder</p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl">I think like an engineer. I train like an athlete. I coach from experience.</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              I don&rsquo;t coach from a script. I look at your data, your habits, and your goals, then I build something that actually makes sense for how you live. My CS background is how I think through problems. My years in sports are how I understand what your body needs.
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
