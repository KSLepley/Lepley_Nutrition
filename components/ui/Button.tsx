import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink text-ivory hover:bg-black",
  secondary: "bg-transparent border border-ink text-ink hover:bg-beige"
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";

export function Button({
  href,
  type = "button",
  variant = "primary",
  children,
  className = "",
  onClick,
  disabled = false
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
