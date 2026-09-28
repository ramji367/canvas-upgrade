# Canvas Upgrade

Let's keep working on @project:52a4f192-68e7-45ad-807e-2057f1fda633:"Figma v1". Please implement the "v2" design system upgrade for this design system and prep a PR. I need to preview all changes in the canvas before pushing.

1. Design Tokens & Styling (Apply globally):

- Update Tailwind config/CSS with new tokens: `--brand: #FF5A3C`, `--canvas: #FAF7F2`, `--surface: #FFFFFF`, plus soft list-colors. Add border radii (`sm:8px`, `md:12px`, `lg:20px`).

- Typography: Keep Satoshi for body, add Cabinet Grotesk (Extrabold) for headings. Allow bold headings and dark mode support.

- Quick Fixes: Widen the desktop container layout. Stop cropping image posters to 16:9 (keep natural aspect ratio). Remove the hardcoded "COMMUNITY LIST" label and replace it with the creator name or category.

2. Component Cleanup:

- Delete the `RecommendationAlert` component. 

3. New List & Item Architecture:

- Build a toggleable 3-view layout for viewing lists:

  a) Rich View: Single column, displaying the item + 3 to 5 key metadata attributes.

  b) Card View: A responsive grid/masonry layout of the items.

  c) Comparison Table View: A dense table showing multiple attributes side-by-side.

- List Item Requirements: Every item must have a prominent external link icon to click out to its URL, an optional checkbox (user-toggled), and a 3-dot context menu for item-level actions. 

- List-Level Requirements: Add a 3-dot context menu for the entire list, and a "Share" button that copies/references the list's unique GTDL URL.

Please generate the necessary tokens, components, and a mock list page demonstrating the 3-view toggle.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5db3d4ae-3ea6-48d6-86dc-ac2250686c71).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
