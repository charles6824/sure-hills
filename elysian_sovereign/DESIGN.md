# Design System Document: The Editorial Executive

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to move the conglomerate away from the "template-heavy" corporate look and toward the feel of a high-end, curated publication. The **Creative North Star** is "The Digital Curator"—a philosophy that treats every screen as a balanced, intentional composition of space, weight, and motion.

We break the traditional grid through **Intentional Asymmetry**. By utilizing generous white space and overlapping elements (e.g., a `surface-container` card slightly bleeding into a `primary` hero section), we create a sense of bespoke craftsmanship. The goal is to move the user through the experience not with lines and boxes, but through tonal depth and typographic authority.

---

## 2. Colors: Tonal Depth & Signature Textures
Our palette is rooted in a "Neutral Stone" base, accented by "Emerald Green" (Success/Heritage) and "Deep Red" (Action/Urgency).

*   **The "No-Line" Rule:** To maintain a premium feel, **1px solid borders are strictly prohibited** for sectioning content. Boundaries must be defined solely through background shifts. For example, a section transition should move from `surface` to `surface-container-low`.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers.
    *   **Level 0 (Base):** `surface` (#fdf9f0).
    *   **Level 1 (Sectioning):** `surface-container-low` (#f7f3ea) for large content blocks.
    *   **Level 2 (Interaction):** `surface-container-highest` (#e6e2d9) for elevated cards or navigation elements.
*   **Signature Textures:** For high-impact CTAs, do not use flat colors. Use a linear gradient (135°) transitioning from `primary` (#005031) to `primary-container` (#136a44). This adds a "jewel-toned" depth that reflects the conglomerate's prestige.
*   **Glassmorphism:** For floating menus or headers, use a 70% opacity on `surface` with a 20px backdrop-blur. This ensures the stone palette bleeds through, keeping the layout cohesive.

---

## 3. Typography: The Editorial Scale
We utilize a high-contrast pairing of **Newsreader** (Serif) and **Inter** (Sans-Serif) to create an authoritative hierarchy.

*   **Display & Headline (Newsreader):** These are our "Voice." Large scales like `display-lg` (3.5rem) should be used for core brand statements. The serif's elegance provides a sense of history and permanence.
*   **Title & Body (Inter):** These are our "Engine." Inter's high legibility ensures that complex conglomerate data is easily digestible. Use `title-lg` for sub-headers to provide a modern, functional counterpoint to the Newsreader headings.
*   **The Hierarchy Rule:** Never use Newsreader for body text. The serif is reserved for moments of impact; the sans-serif is for utility and clarity.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "heavy" for an editorial look. We use light and tone to imply height.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` (#ffffff) card on top of a `surface-container-low` (#f7f3ea) background. The subtle 3% shift in brightness creates a "Soft Lift" that feels natural.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use a shadow color tinted with the `on-surface` token: `rgba(28, 28, 22, 0.06)` with a 40px blur and 10px Y-offset.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` token at **15% opacity**. This creates a "suggestion" of a line rather than a hard barrier.

---

## 5. Components: Modern Primitives

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. `radius-md` (0.375rem). Text: `label-md` in `on-primary`.
*   **Secondary:** Ghost-style. No background. `outline-variant` at 20% opacity. Text in `primary`.
*   **Interaction:** On hover, primary buttons should scale 2% (`scale-102`) and increase shadow diffusion.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Styling:** Use vertical white space (32px or 48px) to separate list items. For cards, use background shifts (`surface-container-highest`) and a `radius-lg` (0.5rem) to define the container.

### Input Fields
*   **Visual Style:** Subtle `surface-container-high` background. No bottom line. Use `label-sm` for floating labels that animate upward on focus.
*   **Error State:** Use `error` (#ba1a1a) only for the helper text and a 2px left-border "accent," rather than outlining the whole box in red.

### Signature Component: The "Editorial Hero"
A complex component combining a `display-lg` serif heading, an asymmetrical image placement with a `radius-xl`, and a floating `glassmorphism` card containing the `body-md` description.

---

## 6. Animation: The "Momentum" Motion Profile
Motion should feel fluid, never "snappy" or robotic.

*   **Scroll-Triggered Reveals:** Use a "Slide & Fade" (Distance: 30px, Duration: 800ms, Easing: `cubic-bezier(0.22, 1, 0.36, 1)`). Elements should feel like they are floating into their curated position.
*   **Interactive Hover:** When hovering over a card or image, use a subtle "Ken Burns" scale effect on the media (1.05x) while the text slightly shifts Y-offset by -4px.
*   **Micro-interactions:** Checkboxes and Radio buttons should use a "Swell" animation (expanding from the center) using the `secondary` (#ab3430) color to provide a sophisticated pop of "Deep Red."

---

## 7. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins (e.g., 10% left, 15% right) to create editorial interest.
*   **Do** allow images to overlap background color-blocks to create depth.
*   **Do** use `primary-fixed-dim` for subtle accent backgrounds in dark-mode contexts.

### Don't
*   **Don't** use 100% black text. Always use `on-surface` (#1c1c16) for a softer, premium look.
*   **Don't** use "Standard" 1px dividers. If separation is needed, use a 4px wide vertical "accent bar" in `surface-variant`.
*   **Don't** cram content. If a section feels full, add more `surface` space. Luxury is defined by the space you don't use.