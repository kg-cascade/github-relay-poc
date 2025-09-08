# 🎨 Application Styling Guidelines

## 📂 Style Structure

1. **`theme.css`**
   - The base file that defines the **application color system**.
   - All colors are defined as CSS custom properties (`--color-*`) and mapped through `@theme`.
   - **Do not use any other colors** (e.g. `#fff`, `rgb(...)`, `oklch(...)` hardcoded).
   - If a new color is required, **extend `theme.css`** by adding a new variable and mapping it in `@theme`.

2. **`index.css`**
   - The file with **predefined base tags and styles** (e.g. reset, typography, global components).
   - When styling elements, **always use the classes/tags defined here first**.
   - If additional styling is needed, **extend `index.css`**, rather than writing inline or ad-hoc styles.

---

## 🎯 Usage Rules

- All **colors and theme values** must come from `theme.css`.
- All **base components and tags** must come from `index.css`.
- If something is missing:
  1. **First** check if a proper variable or class already exists.
  2. **If it doesn’t exist** – add it in the correct file:
     - Colors → `theme.css`
     - Components / base styles → `index.css`

---

## ✅ Why this approach?

- **Visual consistency** – the whole app relies on a single color and style system.
- **Easier maintenance** – updating `theme.css` or `index.css` propagates changes across the project.
- **Scalability** – new colors and styles are added in one place, avoiding duplication and chaos.

---

👉 This ensures every new element in the application looks **consistent** and follows the **design system**.
