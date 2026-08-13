import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span
            className={cn(
              "h-px w-8 shrink-0",
              light ? "bg-copper-200/60" : "rule-copper"
            )}
          />
          <p
            className={cn(
              "text-[11px] font-bold uppercase tracking-[0.22em]",
              light ? "text-copper-200" : "text-copper"
            )}
          >
            {eyebrow}
          </p>
          {align === "center" ? (
            <span
              className={cn(
                "h-px w-8 shrink-0 rotate-180",
                light ? "bg-copper-200/60" : "rule-copper"
              )}
            />
          ) : null}
        </div>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-ink-800/80"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
