import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "accent" | "success" | "danger";
  pulsing?: boolean;
  label: string;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, color = "accent", pulsing = false, label, ...props }, ref) => {
    const dotColor =
      color === "accent"
        ? "bg-[var(--accent)]"
        : color === "success"
        ? "bg-emerald-500"
        : "bg-rose-500";
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            dotColor,
            pulsing && "animate-pulse"
          )}
        />
        <span
          className="font-mono text-xs uppercase tracking-[0.15em]"
          style={{ color: 'var(--accent)' }}
        >
          {label}
        </span>
      </div>
    );
  }
);
Badge.displayName = "Badge";
