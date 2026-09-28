import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Star } from "lucide-react";
import { Badge } from "./badge";
import { cn } from "../lib/utils";
export interface ProductCardProps extends HTMLAttributes<HTMLElement> { image?: ReactNode; category: string; title: string; source: string; price: string; rating?: string; match?: string; }
export const ProductCard = forwardRef<HTMLElement, ProductCardProps>(function ProductCard({ className, image, category, title, source, price, rating, match, ...props }, ref) {
 return <article ref={ref} className={cn("overflow-hidden rounded-card border border-border bg-surface shadow-card", className)} {...props}><div className="aspect-[16/9] bg-surface-subtle">{image ?? <div className="grid h-full place-items-center text-sm font-bold text-muted-foreground">Product image</div>}</div><div className="p-3"><div className="flex items-center justify-between gap-2"><p className="text-[10px] font-bold uppercase text-muted-foreground">{category}</p>{match && <Badge variant="match">{match}</Badge>}</div><h3 className="mt-2 text-sm font-black">{title}</h3><p className="mt-0.5 text-xs text-muted-foreground">{source}</p><div className="mt-3 flex items-center justify-between"><strong className="text-base">{price}</strong>{rating && <span className="inline-flex items-center gap-1 text-xs font-bold"><Star className="size-3.5 fill-warning text-warning" aria-hidden="true"/>{rating}</span>}</div></div></article>;
});
