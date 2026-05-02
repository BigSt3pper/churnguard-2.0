import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  pulsing?: boolean;
}

export const SectionLabel = React.forwardRef<HTMLDivElement, SectionLabelProps>(
  ({ className, label, pulsing = false, ...props }, ref) => (
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
          "h-2 w-2 rounded-full bg-(--accent)",
          pulsing && "animate-pulse"
        )}
      />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-(--accent)">
        {label}
      </span>
    </div>
  )
);
SectionLabel.displayName = "SectionLabel";
