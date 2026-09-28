import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Copy, Grid2X2, List, MoreHorizontal, Share2, Table2, Trash2 } from "lucide-react";
import { Button, ComparisonTable, IconButton, ListItem, ProductCard } from "@/design-system";
import type { ListProduct } from "@/design-system/components/list-product";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import charcoal from "@/assets/keyboard-charcoal.jpg";
import sage from "@/assets/keyboard-sage.jpg";
import copper from "@/assets/keyboard-copper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "The Keyboard Edit — Sift Lists" },
    { name: "description", content: "Explore a curated keyboard list in rich, card, and comparison views." },
    { property: "og:title", content: "The Keyboard Edit — Sift Lists" },
    { property: "og:description", content: "Explore a curated keyboard list in rich, card, and comparison views." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ListPage,
});

const initialItems: ListProduct[] = [
  { id: "mode-sonnet", title: "Mode Sonnet", maker: "Mode Designs", category: "Keyboard", url: "https://modedesigns.com/products/sonnet", image: charcoal, price: "$299", layout: "75%", material: "Aluminum", connection: "Wired", color: "Charcoal", note: "A finely tuned daily driver with a soft, satisfying typing feel.", tone: "peach" },
  { id: "keychron-q1", title: "Keychron Q1 Pro", maker: "Keychron", category: "Keyboard", url: "https://www.keychron.com/products/keychron-q1-pro-qmk-via-wireless-custom-mechanical-keyboard", image: sage, price: "$199", layout: "75%", material: "Aluminum", connection: "Wireless", color: "Sage", note: "A flexible all-rounder with wireless freedom and a familiar profile.", tone: "mint" },
  { id: "zoom75", title: "Zoom75", maker: "Meletrix", category: "Keyboard", url: "https://meletrix.com/products/zoom75-collection", image: copper, price: "$229", layout: "75%", material: "Aluminum", connection: "Wireless", color: "Copper", note: "Warm details and playful customization in a compact footprint.", tone: "lilac" },
];
type View = "rich" | "cards" | "table";
const views = [{ id: "rich", label: "Rich view", icon: List }, { id: "cards", label: "Card view", icon: Grid2X2 }, { id: "table", label: "Compare", icon: Table2 }] as const;
const listUrl = "https://gtdl.app/l/the-keyboard-edit";

function ListPage() {
 const [items, setItems] = useState(initialItems);
 const [view, setView] = useState<View>("rich");
 const [selectable, setSelectable] = useState(false);
 const [selected, setSelected] = useState<string[]>([]);
 const [notice, setNotice] = useState("");
 function copy(value: string, message: string) { void navigator.clipboard?.writeText(value).then(() => setNotice(message)).catch(() => setNotice("Could not copy link")); }
 function select(id: string, checked: boolean) { setSelected(current => checked ? [...new Set([...current, id])] : current.filter(value => value !== id)); }
 function remove(id: string) { setItems(current => current.filter(item => item.id !== id)); setSelected(current => current.filter(value => value !== id)); setNotice("Item removed from this preview"); }
 return <div className="sift-theme">
   <header className="border-b border-border bg-surface"><div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"><Link to="/" className="flex items-center gap-3" aria-label="Sift home"><span className="grid size-9 place-items-center rounded-control bg-primary font-black text-primary-foreground">S</span><span className="text-xl font-black tracking-normal">sift<span className="text-primary">.</span></span></Link><div className="flex items-center gap-2"><span className="hidden text-xs font-medium text-muted-foreground sm:block">A better way to keep the good stuff.</span><span className="ml-3 rounded-pill border border-border px-3 py-1 text-[11px] font-bold text-muted-foreground">DESIGN SYSTEM / V2</span></div></div></header>
   <main className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 lg:px-12">
    <div className="flex items-center gap-2 py-7 text-xs font-bold text-muted-foreground"><span>Explore</span><ArrowRight className="size-3" /><span>Design & objects</span><ArrowRight className="size-3" /><span className="text-foreground">The Keyboard Edit</span></div>
    <section className="grid gap-8 border-b border-border pb-9 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end"><div><div className="mb-4 inline-flex items-center gap-2 rounded-pill bg-list-peach px-3 py-1.5 text-[11px] font-bold uppercase text-primary">Curated collection <span className="size-1 rounded-full bg-primary" /> Tech & objects</div><h1 className="max-w-4xl text-4xl leading-[1.02] type-display sm:text-6xl lg:text-7xl">The Keyboard Edit<span className="text-primary">.</span></h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Beautifully built boards worth making room for on your desk. Three favorites, compared in one place.</p><div className="mt-6 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-list-mint text-xs font-black text-positive">AL</span><span className="text-sm"><strong>Alex Lee</strong><span className="text-muted-foreground"> · Updated September 2026</span></span></div></div><div className="flex items-center gap-2 lg:justify-end"><Button variant="outline" onClick={() => copy(listUrl, "List link copied")}><Share2 className="size-4" />Share</Button><DropdownMenu><DropdownMenuTrigger asChild><IconButton variant="ghost" aria-label="List actions" title="List actions"><MoreHorizontal className="size-5" /></IconButton></DropdownMenuTrigger><DropdownMenuContent align="end" className="border-border bg-surface text-foreground"><DropdownMenuItem onSelect={() => copy(listUrl, "List link copied")}><Copy className="size-4" />Copy GTDL link</DropdownMenuItem><DropdownMenuItem onSelect={() => { setSelectable(value => !value); setSelected([]); }}><Check className="size-4" />{selectable ? "Hide checkboxes" : "Select items"}</DropdownMenuItem><DropdownMenuItem onSelect={() => { setItems(initialItems); setSelected([]); setNotice("Preview list restored"); }}><Trash2 className="size-4" />Reset preview list</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div></section>
    <section className="pt-8" aria-label="Collection items"><div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase text-primary">THE SHORTLIST</p><h2 className="mt-1 text-2xl type-heading-2">All the good ones <span className="align-middle text-base font-medium text-muted-foreground">({items.length})</span></h2></div><div className="flex flex-wrap items-center gap-3"><Button variant="ghost" size="sm" onClick={() => { setSelectable(value => !value); setSelected([]); }}><Check className="size-4" />{selectable ? `${selected.length} selected` : "Select items"}</Button><div className="inline-flex rounded-control border border-border bg-surface p-1" role="group" aria-label="List view">{views.map(option => <Button key={option.id} variant={view === option.id ? "secondary" : "ghost"} size="sm" aria-label={option.label} aria-pressed={view === option.id} title={option.label} onClick={() => setView(option.id)} className="px-3"><option.icon className="size-4" /><span className="hidden sm:inline">{option.label}</span></Button>)}</div></div></div>
       {items.length === 0 ? <div className="border-y border-border py-20 text-center"><p className="text-xl type-heading-2">Nothing in this list yet.</p><Button className="mt-5" onClick={() => setItems(initialItems)}>Restore items</Button></div> : view === "rich" ? <div className="overflow-hidden rounded-card border border-border">{items.map(item => <ListItem key={item.id} item={item} selectable={selectable} selected={selected.includes(item.id)} onSelect={checked => select(item.id, checked)} onRemove={() => remove(item.id)} onCopy={() => copy(item.url, "Item link copied")} />)}</div> : view === "cards" ? <div className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">{items.map(item => <ProductCard key={item.id} item={item} selectable={selectable} selected={selected.includes(item.id)} onSelect={checked => select(item.id, checked)} onRemove={() => remove(item.id)} onCopy={() => copy(item.url, "Item link copied")} />)}</div> : <ComparisonTable items={items} selectable={selectable} selectedIds={selected} onSelect={select} onRemove={remove} onCopy={url => copy(url, "Item link copied")} />}
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground"><span>{items.length} items in this collection</span><span className="flex items-center gap-1">Curated by Alex Lee <ChevronDown className="size-3" /></span></div>
    </section>
   </main>{notice && <div role="status" className="fixed bottom-5 right-5 z-50 rounded-control bg-foreground px-4 py-3 text-sm font-bold text-background shadow-card" onClick={() => setNotice("")}>{notice}</div>}
 </div>;
}
