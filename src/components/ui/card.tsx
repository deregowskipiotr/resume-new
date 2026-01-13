import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-card hover:shadow-hover  transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
