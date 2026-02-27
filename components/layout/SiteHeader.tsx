import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/plans", label: "Plans" },
  { href: "/apply", label: "Apply" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-beige/80 bg-ivory/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-serif)] text-lg">
          Lepley Nutrition
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
