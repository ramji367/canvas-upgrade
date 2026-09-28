import { Check, ExternalLink, MoreHorizontal, Copy, Trash2 } from "lucide-react";
import { IconButton } from "./icon-button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { ListProduct } from "./list-product";

export function ItemActions({ item, selectable, selected, onSelect, onRemove, onCopy }: {
  item: ListProduct;
  selectable: boolean;
  selected: boolean;
  onSelect: (checked: boolean) => void;
  onRemove: () => void;
  onCopy: () => void;
}) {
  return <div className="flex shrink-0 items-center gap-1.5">
    {selectable && <Checkbox aria-label={`Select ${item.title}`} checked={selected} onCheckedChange={(value) => onSelect(value === true)} className="mr-1 size-5 rounded-sm border-border-strong data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />}
    <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} website`} title={`Open ${item.title} website`} className="inline-flex size-9 items-center justify-center rounded-control bg-primary-soft text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><ExternalLink className="size-4" /></a>
    <DropdownMenu><DropdownMenuTrigger asChild><IconButton variant="ghost" size="sm" aria-label={`More actions for ${item.title}`} title="Item actions"><MoreHorizontal className="size-5" /></IconButton></DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-border bg-surface text-foreground">
        <DropdownMenuItem onSelect={onCopy}><Copy className="size-4" />Copy item link</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onSelect(!selected)}><Check className="size-4" />{selected ? "Deselect" : "Select"} item</DropdownMenuItem>
        <DropdownMenuItem onSelect={onRemove} className="text-primary focus:text-primary"><Trash2 className="size-4" />Remove from list</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>;
}
