import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";
export interface ComparisonColumn { name: string; image?: string; }
export interface ComparisonRow { feature: string; values: string[]; }
export interface ComparisonTableProps extends HTMLAttributes<HTMLDivElement> { columns: ComparisonColumn[]; rows: ComparisonRow[]; }
export const ComparisonTable = forwardRef<HTMLDivElement, ComparisonTableProps>(function ComparisonTable({ className, columns = [{ name: "Mode Sonnet" }, { name: "Keychron Q1" }], rows = [{ feature: "Price", values: ["$299", "$198"] }, { feature: "Match", values: ["94%", "81%"] }], ...props }, ref) {
 return <div ref={ref} className={cn("overflow-x-auto rounded-card border border-border bg-surface", className)} {...props}><table className="w-full min-w-[30rem] border-collapse text-left text-xs"><thead><tr><th className="p-3 font-bold text-muted-foreground">Feature</th>{columns.map((column) => <th key={column.name} className="p-3 text-center font-black">{column.name}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.feature} className="border-t border-border"><th className="p-3 font-bold text-muted-foreground">{row.feature}</th>{row.values.map((value, index) => <td key={`${row.feature}-${columns[index]?.name ?? index}`} className="p-3 text-center font-medium">{value}</td>)}</tr>)}</tbody></table></div>;
});
