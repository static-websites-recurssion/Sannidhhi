import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-gradient-to-br from-brand-600 to-brand text-white shadow-lg shadow-brand/30 hover:from-brand hover:to-brand-800 hover:shadow-xl hover:shadow-brand/35 active:scale-[0.99]",
  secondary:
    "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-copper-200/60 hover:bg-white/20 active:scale-[0.99]",
  outline:
    "border border-ink-900/12 bg-white text-ink-900 shadow-warm hover:border-copper/45 hover:text-brand active:scale-[0.99]",
  /** Outline sitting on a dark panel — never pairs white text with a white fill */
  outlineLight:
    "border border-white/35 bg-white/5 text-white backdrop-blur-md hover:border-copper-200/70 hover:bg-white/15 active:scale-[0.99]",
  ghost: "text-ink-800 hover:text-brand",
} as const;

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    variants[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
