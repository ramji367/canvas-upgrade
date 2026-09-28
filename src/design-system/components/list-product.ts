export interface ListProduct {
  id: string;
  title: string;
  maker: string;
  category: string;
  url: string;
  image: string;
  price: string;
  layout: string;
  material: string;
  connection: string;
  color: string;
  note: string;
  tone: "peach" | "lilac" | "mint" | "sky";
}
