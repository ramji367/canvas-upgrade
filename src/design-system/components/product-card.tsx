import { forwardRef, type HTMLAttributes } from "react";
import { ItemActions } from "./item-actions";
import type { ListProduct } from "./list-product";
import { cn } from "../lib/utils";
export interface ProductCardProps extends Omit<HTMLAttributes<HTMLElement>, "onSelect" | "onCopy"> {
 item: ListProduct; selectable?: boolean; selected?: boolean;
 onSelect?: (checked: boolean) => void; onRemove?: () => void; onCopy?: () => void;
}
const tones = { peach: "bg-list-peach", lilac: "bg-list-lilac", mint: "bg-list-mint", sky: "bg-list-sky" };
export const ProductCard = forwardRef<HTMLElement, ProductCardProps>(function ProductCard({ className, item, selectable = false, selected = false, onSelect = () => {}, onRemove = () => {}, onCopy = () => {}, ...props }, ref) {
 return <article ref={ref} className={cn("min-w-0 overflow-hidden rounded-card border border-border bg-surface shadow-card", className)} {...props}>
    <div className={cn("relative aspect-video", tones[item.tone])}><img src={item.image} alt={item.title} width={800} height={1000} loading="lazy" className="block h-full w-full object-contain" /><div className="absolute right-2 top-2 rounded-control bg-surface p-0.5 shadow-card"><ItemActions item={item} selectable={selectable} selected={selected} onSelect={onSelect} onRemove={onRemove} onCopy={onCopy} /></div></div>
    <div className="p-3 sm:p-4"><p className="text-[11px] font-bold uppercase text-muted-foreground">{item.maker} / {item.category}</p><h3 className="mt-1 text-lg leading-tight type-heading-2">{item.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">{item.note}</p><div className="mt-3 flex items-end justify-between gap-2 border-t border-border pt-2 text-xs"><span className="text-muted-foreground">{item.layout} · {item.connection}</span><strong className="text-sm">{item.price}</strong></div></div>
 </article>;
});
