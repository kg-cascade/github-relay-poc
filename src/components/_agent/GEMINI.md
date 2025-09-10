# GEMINI Component Guidelines

This document describes the rules and best practices for building React components in this project.

## 1. Component Location and Naming

- All components must be placed inside the `/components` directory.
- Component file names must start with an **uppercase letter**.
- If a component is **simple** (single file), create it as:
  ```
  /components/Button.tsx
  ```

- If a component is **complex** (contains child components), create a folder with an uppercase name.  
  The folder should contain:
  - A **main component** with the same name as the folder.
  - **Subcomponents** prefixed with the parent component name.

  Example:
  ```
  /components/Card/
      Card.tsx
      CardFront.tsx
      CardBack.tsx
  ```

## 2. Styling

- Components must use styles defined inside the `/styles` folder.
- Always import styles from `/styles` instead of inline CSS or other external style systems, unless explicitly required.
- Follow the naming conventions from `/styles` to keep consistency across the project.

## 3. arc-ui Integration

- Components must be built using **arc-ui** according to the instructions provided in:
  - `llms-react.txt`
  - `llms.txt`
- Always check these files before building or modifying a component.
- arc-ui should be used consistently to ensure design system compatibility.

## 4. General Rules

- Keep components small and reusable.
- Parent components should delegate logic and UI separation to their child components when possible.
- Always use **TypeScript** (`.tsx`) for type safety and maintainability.
- Document complex components with comments for clarity.

---

✅ By following these rules, we ensure that the component structure remains **scalable, clean, and easy to maintain**.
