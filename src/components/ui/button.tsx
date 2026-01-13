import { cn } from "@/lib/utils";
import type { ReactNode } from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  className,
  children,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        variant === "primary"
          ? "btn-primary"
          : "border border-border/50 bg-card hover:bg-primary/5 text-text px-6 py-3 rounded-button font-medium transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  className,
  children,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        variant === "primary"
          ? "btn-primary"
          : "border border-border/50 bg-card hover:bg-primary/5 text-text px-6 py-3 rounded-button font-medium transition-all duration-200 inline-flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
