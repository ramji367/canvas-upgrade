import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";
export type BadgeVariant = "positive" | "review" | "archived" | "warning" | "match";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { variant?: BadgeVariant; }
const variants: Record<BadgeVariant, string> = {
  positive: "border-positive bg-positive-soft text-positive", review: "border-primary bg-primary-soft text-primary", archived: "border-border bg-muted text-muted-foreground", warning: "border-warning bg-warning-soft text-warning", match: "border-transparent bg-positive-soft text-positive",
};
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ className, variant = "positive", ...props }, ref) {
  return <span ref={ref} className={cn("inline-flex min-h-5 items-center rounded-pill border px-2 py-0.5 text-[11px] font-bold leading-none", variants[variant], className)} {...props} />;
});
