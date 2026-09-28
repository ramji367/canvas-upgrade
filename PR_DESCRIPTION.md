# Sift design system v2

## Summary
- Adds semantic brand, canvas, surface, soft list colors, radii, Cabinet Grotesk headings, Satoshi body, and dark-theme tokens.
- Replaces the legacy recommendation pattern with reusable list item, product card, comparison table, and item action controls.
- Adds a mock curated list at `/` with rich, card, and comparison views, selection, external links, item/list menus, and a GTDL share-link copy action.
- Uses naturally proportioned product images; no 16:9 poster cropping.
- Tightens rich rows and card spacing; card view uses four desktop columns (five on extra-wide screens) with contained images in shorter 16:9 frames.

## Review notes
- The GTDL URL and list contents are demonstration data; the link is not backed by a live published list.
- Item removal and selection are local preview actions and reset on page refresh.
- The updated canvas is ready for review; a GitHub repository must be linked before a pull request can be opened.

## Verification
- Browser-checked all three views, item selection, and 390px mobile layout with no page errors or horizontal overflow.
- Latest preview build reports `build OK`.
