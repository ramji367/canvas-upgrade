import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Headphones } from "lucide-react";
import { Badge, type BadgeVariant } from "./badge";
import { cn } from "../lib/utils";
export interface ListItemProps extends HTMLAttributes<HTMLDivElement> { title: string; meta: string; price: string; status?: string; statusVariant?: BadgeVariant; icon?: ReactNode; }
export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(function ListItem({ className, title, meta, price, status, statusVariant = "positive", icon, ...props }, ref) {
 return <div ref={ref} className={cn("flex min-h-16 items-center gap-3 rounded-card border border-border bg-surface p-3 shadow-card", className)} {...props}><div className="grid size-9 shrink-0 place-items-center rounded-control bg-surface-subtle text-muted-foreground">{icon ?? <Headphones className="size-4" aria-hidden="true" />}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{title}</p><p className="truncate text-xs text-muted-foreground">{meta}</p></div><div className="text-right"><p className="text-sm font-black">{price}</p>{status && <Badge variant={statusVariant} className="mt-1">{status}</Badge>}</div></div>;
});
