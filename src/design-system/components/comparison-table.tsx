import { forwardRef, type HTMLAttributes } from "react";
import { ItemActions } from "./item-actions";
import type { ListProduct } from "./list-product";
import { cn } from "../lib/utils";
export interface ComparisonColumn { name: string; image?: string; }
export interface ComparisonRow { feature: string; values: string[]; }
export interface ComparisonTableProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect" | "onCopy"> {
 items: ListProduct[]; selectable?: boolean; selectedIds?: string[];
 onSelect?: (id: string, checked: boolean) => void; onRemove?: (id: string) => void; onCopy?: (url: string) => void;
}
export const ComparisonTable = forwardRef<HTMLDivElement, ComparisonTableProps>(function ComparisonTable({ className, items, selectable = false, selectedIds = [], onSelect = () => {}, onRemove = () => {}, onCopy = () => {}, ...props }, ref) {
 const rows: { label: string; get: (item: ListProduct) => string }[] = [
  { label: "Price", get: item => item.price }, { label: "Layout", get: item => item.layout },
  { label: "Case material", get: item => item.material }, { label: "Connection", get: item => item.connection },
  { label: "Finish", get: item => item.color }, { label: "Maker", get: item => item.maker },
 ];
 return <div ref={ref} className={cn("overflow-x-auto rounded-card border border-border bg-surface", className)} {...props}><table className="w-full min-w-[780px] border-collapse text-left text-sm"><thead><tr><th scope="col" className="w-36 bg-surface-subtle p-4 align-bottom text-xs font-bold uppercase text-muted-foreground">Attribute</th>{items.map(item => <th scope="col" key={item.id} className="min-w-48 border-l border-border p-4 align-top"><img src={item.image} alt="" width={800} height={1000} loading="lazy" className="mb-3 h-24 w-auto rounded-sm object-contain" /><div className="flex items-start justify-between gap-2"><div><span className="text-[11px] font-bold uppercase text-muted-foreground">{item.maker}</span><p className="mt-1 text-base leading-tight type-heading-2">{item.title}</p></div></div><div className="mt-3"><ItemActions item={item} selectable={selectable} selected={selectedIds.includes(item.id)} onSelect={checked => onSelect(item.id, checked)} onRemove={() => onRemove(item.id)} onCopy={() => onCopy(item.url)} /></div></th>)}</tr></thead><tbody>{rows.map(row => <tr key={row.label} className="border-t border-border"><th scope="row" className="bg-surface-subtle px-4 py-3 text-xs font-bold text-muted-foreground">{row.label}</th>{items.map(item => <td key={item.id} className="border-l border-border px-4 py-3 font-medium">{row.get(item)}</td>)}</tr>)}</tbody></table></div>;
});
