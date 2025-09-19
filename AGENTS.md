# Repository Guidelines

## Project Structure & Module Organization

The Next.js App Router lives under `src/app/` with `layout.tsx` defining shared chrome and `globals.css` importing Tailwind styles. Shared UI belongs in `src/components/`; co-locate Storybook stories or tests beside each component when they are introduced. Static files go in `public/` and are served from the root path (e.g., `/images/logo.svg`). Use the TypeScript path alias `@/` (configured in `tsconfig.json`) for intra-project imports instead of relative `../../` chains.

## Styling

Always use TailwindCSS for styling this project

## Build, Test, and Development Commands

Install dependencies once with `npm install`. Use `npm run dev` to start the Turbopack dev server on `http://localhost:3000` with hot reloads. Run `npm run build` for an optimized production bundle and `npm run start` to preview that build locally. Maintain lint health with `npm run lint`; append `-- --fix` to apply safe autofixes.

## Coding Style & Naming Conventions

Write components as typed React function components in PascalCase files (`Header.tsx`, `ShopItem.tsx`). Prefer 2-space indentation and keep JSX attributes on separate lines when they exceed 80 characters. Tailwind utilities should be applied through `className`; avoid raw `class` attributes. Rely on strict TypeScript settings—never disable type checks without justification. Use descriptive prop names and export a single default component per file unless a helper is tightly coupled.

## Testing Guidelines

A testing stack is not wired yet; add tests alongside features using React Testing Library and Vitest (or Jest) when coverage becomes necessary. Name files `*.test.tsx` and place them near the component under test (e.g., `src/components/__tests__/Header.test.tsx`). Ensure each PR includes linting results and, once tests exist, run the full suite before requesting review.

## Commit & Pull Request Guidelines

History currently contains a single scaffold commit, so establish a concise, imperative commit style ("Add header navigation", "Refine shop card copy"). Reference linked issues in the body when relevant. Pull requests should describe the change, list any follow-up tasks, and include screenshots or clips for UI updates. Confirm `npm run lint` (and future tests) pass before opening the PR.
