import { forwardRef, type HTMLAttributes } from "react";
import { ItemActions } from "./item-actions";
import type { ListProduct } from "./list-product";
import { cn } from "../lib/utils";
export interface ListItemProps extends Omit<HTMLAttributes<HTMLElement>, "onSelect" | "onCopy"> {
  item: ListProduct; selectable?: boolean; selected?: boolean;
  onSelect?: (checked: boolean) => void; onRemove?: () => void; onCopy?: () => void;
}
export const ListItem = forwardRef<HTMLElement, ListItemProps>(function ListItem({ className, item, selectable = false, selected = false, onSelect = () => {}, onRemove = () => {}, onCopy = () => {}, ...props }, ref) {
  return <article ref={ref} className={cn("grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-3 gap-y-2 border-b border-border bg-surface px-3 py-3 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:items-start sm:gap-x-4 sm:px-4 sm:py-4", className)} {...props}>
    <img src={item.image} alt={item.title} width={800} height={1000} className="row-span-2 h-auto w-full rounded-sm bg-surface-subtle object-contain sm:row-span-1" />
    <div className="min-w-0"><div className="flex flex-wrap items-center gap-x-2 text-[11px] font-bold uppercase text-muted-foreground"><span>{item.maker}</span><span aria-hidden="true">/</span><span>{item.category}</span></div><h3 className="mt-0.5 text-lg leading-tight type-heading-2">{item.title}</h3><p className="mt-1 text-sm leading-snug text-muted-foreground">{item.note}</p><dl className="mt-2 grid max-w-xl grid-cols-2 gap-x-3 gap-y-1 text-xs sm:flex sm:flex-wrap sm:gap-x-6"><div><dt className="text-muted-foreground">Price</dt><dd className="font-bold">{item.price}</dd></div><div><dt className="text-muted-foreground">Layout</dt><dd className="font-bold">{item.layout}</dd></div><div><dt className="text-muted-foreground">Case</dt><dd className="font-bold">{item.material}</dd></div><div><dt className="text-muted-foreground">Connection</dt><dd className="font-bold">{item.connection}</dd></div></dl></div>
    <div className="col-start-2 flex justify-end sm:col-start-3 sm:row-start-1"><ItemActions item={item} selectable={selectable} selected={selected} onSelect={onSelect} onRemove={onRemove} onCopy={onCopy} /></div>
  </article>;
});
