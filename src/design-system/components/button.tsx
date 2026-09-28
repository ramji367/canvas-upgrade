import { forwardRef, type ButtonHTMLAttributes } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "../lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}
const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover disabled:bg-muted disabled:text-muted-foreground",
  secondary: "bg-primary-soft text-primary hover:bg-muted active:bg-muted disabled:text-muted-foreground",
  outline: "border border-border-strong bg-surface text-primary hover:bg-primary-soft active:bg-muted disabled:text-muted-foreground",
  ghost: "bg-transparent text-foreground hover:bg-surface-subtle active:bg-muted disabled:text-muted-foreground",
};
const sizes: Record<ButtonSize, string> = { sm: "h-control-sm px-3 text-xs", md: "h-control px-4 text-sm", lg: "h-control-lg px-5 text-sm" };
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant = "primary", size = "md", loading = false, disabled, children, ...props }, ref) {
  return <button ref={ref} disabled={disabled || loading} className={cn("inline-flex shrink-0 items-center justify-center gap-2 rounded-control font-bold transition-colors outline-hidden focus-visible:ring-3 focus-visible:ring-focus/30 disabled:cursor-not-allowed", variants[variant], sizes[size], className)} {...props}>{loading && <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />}<span>{children}</span></button>;
});
