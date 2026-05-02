"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl group",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-to-r from-(--accent) to-(--accent-secondary) text-white shadow-sm hover:shadow-accent-lg hover:-translate-y-0.5 active:scale-[0.98]",
        secondary:
          "bg-transparent border border-(--border) text-(--foreground) hover:bg-(--muted) hover:border-accent/30",
        ghost:
          "bg-transparent text-(--muted-foreground) hover:text-(--foreground)",
        outline:
          "bg-transparent border border-(--border) text-(--foreground) hover:border-accent/30 hover:bg-(--muted)",
        danger:
          "bg-rose-600 text-white hover:bg-rose-700",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-lg",
        md: "h-12 px-6 text-base rounded-xl",
        lg: "h-14 px-8 text-lg rounded-2xl",
        icon: "h-12 w-12 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// Omit all HTML props that Framer Motion redefines with incompatible signatures.
// Solving this at the type level means no destructuring needed at runtime —
// the conflicting props simply don't exist on ButtonProps at all.
type MotionConflictingProps =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onAnimationStart";

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, MotionConflictingProps> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    asChild?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...restProps }, ref) => (
    <motion.button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || loading}
      aria-busy={loading}
      whileHover={{ y: -2, boxShadow: "var(--shadow-accent-lg)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...restProps}
    >
      {loading ? (
        <Loader2 className="animate-spin mr-2 h-5 w-5" strokeWidth={2} />
      ) : null}
      {children}
    </motion.button>
  )
);
Button.displayName = "Button";