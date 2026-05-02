import * as React from "react";
import { cn } from "../../lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block mb-1 text-xs font-mono uppercase tracking-[0.15em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "block w-full h-12 rounded-xl border bg-transparent px-4 py-2 font-sans text-base shadow-sm focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 transition",
            className
          )}
          style={{
            borderColor: 'var(--border)',
            color: 'var(--foreground)',
            ...props.style
          }}
          placeholder={props.placeholder}
          {...props}
        />
        {helperText && (
          <p
            className="mt-1 text-xs font-mono"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
