import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";
export type IconButtonVariant = "primary" | "soft" | "ghost";
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: IconButtonVariant; size?: "sm" | "md"; }
const variants: Record<IconButtonVariant, string> = { primary: "bg-primary text-primary-foreground hover:bg-primary-hover", soft: "bg-primary-soft text-primary hover:bg-muted", ghost: "bg-transparent text-foreground hover:bg-surface-subtle" };
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton({ className, variant = "soft", size = "md", children, ...props }, ref) {
  return <button ref={ref} className={cn("inline-flex shrink-0 items-center justify-center rounded-pill outline-hidden transition-colors focus-visible:ring-3 focus-visible:ring-focus/30 disabled:opacity-50", size === "sm" ? "size-8" : "size-10", variants[variant], className)} {...props}>{children}</button>;
});
