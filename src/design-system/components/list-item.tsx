import { forwardRef, type HTMLAttributes } from "react";
import { ItemActions } from "./item-actions";
import type { ListProduct } from "./list-product";
import { cn } from "../lib/utils";
export interface ListItemProps extends Omit<HTMLAttributes<HTMLElement>, "onSelect" | "onCopy"> {
  item: ListProduct; selectable?: boolean; selected?: boolean;
  onSelect?: (checked: boolean) => void; onRemove?: () => void; onCopy?: () => void;
}
export const ListItem = forwardRef<HTMLElement, ListItemProps>(function ListItem({ className, item, selectable = false, selected = false, onSelect = () => {}, onRemove = () => {}, onCopy = () => {}, ...props }, ref) {
  return <article ref={ref} className={cn("grid gap-5 border-b border-border bg-surface px-5 py-5 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-start sm:px-6", className)} {...props}>
    <img src={item.image} alt={item.title} width={800} height={1000} className="h-auto w-full rounded-sm bg-surface-subtle object-contain sm:w-36" />
    <div className="min-w-0"><div className="flex items-center gap-2 text-[11px] font-bold uppercase text-muted-foreground"><span>{item.maker}</span><span aria-hidden="true">/</span><span>{item.category}</span></div><h3 className="mt-1 text-xl leading-tight type-heading-2">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p><dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 text-xs sm:grid-cols-4"><div><dt className="text-muted-foreground">Price</dt><dd className="mt-0.5 font-bold">{item.price}</dd></div><div><dt className="text-muted-foreground">Layout</dt><dd className="mt-0.5 font-bold">{item.layout}</dd></div><div><dt className="text-muted-foreground">Case</dt><dd className="mt-0.5 font-bold">{item.material}</dd></div><div><dt className="text-muted-foreground">Connection</dt><dd className="mt-0.5 font-bold">{item.connection}</dd></div></dl></div>
    <div className="-order-1 flex justify-end sm:order-none"><ItemActions item={item} selectable={selectable} selected={selected} onSelect={onSelect} onRemove={onRemove} onCopy={onCopy} /></div>
  </article>;
});
