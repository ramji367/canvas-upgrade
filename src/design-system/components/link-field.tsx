import { forwardRef, type InputHTMLAttributes } from "react";
import { Link2 } from "lucide-react";
import { cn } from "../lib/utils";
export interface LinkFieldProps extends InputHTMLAttributes<HTMLInputElement> { source?: string; }
export const LinkField = forwardRef<HTMLInputElement, LinkFieldProps>(function LinkField({ className, source, ...props }, ref) {
  return <label className={cn("flex h-control items-center gap-2 rounded-control border border-border bg-surface px-3 text-muted-foreground focus-within:border-primary focus-within:ring-3 focus-within:ring-focus/20", className)}><Link2 className="size-4 shrink-0" aria-hidden="true" /><input ref={ref} className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-hidden placeholder:text-muted-foreground" {...props} />{source && <span className="rounded-sm bg-primary-soft px-1.5 py-1 text-[10px] font-bold text-primary">{source}</span>}</label>;
});
