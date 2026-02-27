import { Button } from "@/components/ui/Button";

type PlanCardProps = {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  note?: string;
  highlighted?: boolean;
};

export function PlanCard({
  title,
  price,
  subtitle,
  description,
  features,
  ctaLabel,
  ctaHref,
  note,
  highlighted = false
}: PlanCardProps) {
  return (
    <article className={`rounded-2xl border bg-white/40 p-6 md:p-8 ${highlighted ? "border-sage" : "border-beige"}`}>
      <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight">{title}</h2>
      <p className="mt-3 text-3xl font-semibold text-ink">{price}</p>
      <p className={`mt-1 text-sm ${highlighted ? "font-semibold text-ink" : "text-muted"}`}>{subtitle}</p>
      <p className="mt-5 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
            <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {note ? <p className="mt-6 text-xs leading-relaxed text-muted">{note}</p> : null}
      <Button href={ctaHref} className="mt-8 w-full">
        {ctaLabel}
      </Button>
    </article>
  );
}
