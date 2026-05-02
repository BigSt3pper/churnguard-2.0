import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientBorder?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradientBorder = false, ...props }, ref) => {
    if (gradientBorder) {
      return (
        <div className="rounded-xl bg-linear-to-br from-(--accent) via-(--accent-secondary) to-(--accent) p-0.5">
          <div
            ref={ref}
            className={cn(
              "h-full w-full rounded-[calc(1rem-2px)] bg-card border border-(--border) shadow-md group-hover:shadow-xl transition-all duration-200",
              className
            )}
            {...props}
          />
        </div>
      );
    }
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl bg-card border border-(--border) shadow-md group-hover:shadow-xl transition-all duration-200",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
