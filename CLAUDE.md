# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is a frontend-only ecommerce practice project built with React, TypeScript, and Vite.

The primary goal of this project is to learn and practice a production-style frontend development workflow:

**Figma → Analyze → Plan → Implement → Run → Visual QA → Iterate**

The implementation should prioritize clean React architecture, reusable components, maintainability, responsive behavior, and visual fidelity to the Figma design.

This is a learning project. Do not blindly generate the entire application. Work incrementally and explain important implementation decisions when appropriate.

## Tech Stack

* React
* TypeScript
* Vite
* React Router when routing is required
* Existing dependencies in `package.json`
* Figma MCP for inspecting Figma designs
* Browser/Playwright tooling for visual verification when available

Do not introduce new dependencies unless they provide a clear benefit and are justified.

## Project Structure

Current core structure:

* `src/main.tsx` — Application entry point
* `src/App.tsx` — Root application component
* `src/assets/` — Static assets
* `index.html` — Application HTML entry point

As the application grows, organize code according to responsibility rather than putting everything into `App.tsx`.

Prefer a structure that clearly separates:

* pages/routes
* reusable components
* layouts
* hooks
* utilities
* types
* assets
* feature-specific logic

Do not create folders or abstractions merely for the sake of having a large architecture. Introduce structure when the application actually needs it.

## Figma-First Workflow

When implementing a UI based on Figma:

1. Identify the exact Figma page/frame relevant to the task.
2. Inspect the frame using Figma MCP before writing implementation code.
3. Analyze:

   * layout
   * spacing
   * typography
   * colors
   * borders
   * shadows
   * component states
   * icons/assets
   * responsive behavior
4. Identify existing reusable components before creating new ones.
5. Create a short implementation plan.
6. Implement the smallest logical part of the UI.
7. Run the application and verify the result.
8. Use browser/Playwright visual QA when available.
9. Compare the implementation against the Figma design.
10. Fix meaningful visual and functional discrepancies.
11. Only then move on to the next logical section.

Do not start coding a Figma screen based only on a screenshot or assumptions when the actual Figma frame can be inspected.

## Component Guidelines

Build reusable components when there is a clear reusable responsibility or meaningful repetition.

Examples may include:

* Header
* Navigation
* Button
* Input
* Modal
* Card
* ProductCard
* ProductGrid
* Sidebar
* Pagination
* Layout components

Avoid both extremes:

* Do not duplicate large amounts of UI.
* Do not create tiny components for every single `<div>` or text element without a meaningful reason.

Prefer composition over deeply nested or overly complex components.

## React Guidelines

* Use functional components and React hooks.
* Use TypeScript throughout the application.
* Avoid `any` unless there is a specific and documented reason.
* Keep components focused on a clear responsibility.
* Avoid unnecessary state.
* Prefer derived values over duplicated state.
* Use memoization only when it provides a meaningful benefit.
* Follow existing React conventions before introducing new patterns.
* Keep business logic separate from presentation logic when complexity warrants it.

## Styling Guidelines

Prioritize visual fidelity to the Figma design.

Pay attention to:

* spacing
* typography
* line height
* sizing
* alignment
* colors
* borders
* border radius
* shadows
* responsive behavior

Prefer reusable styling patterns/design tokens when repetition appears.

Do not hard-code the same design value repeatedly when a meaningful shared token or variable would improve consistency.

Do not over-engineer a design system before the project requires one.

## Responsive Design

The UI should be responsive and should behave sensibly across supported viewport sizes.

When the Figma design provides responsive layouts or variants, use them as the source of truth.

Do not assume desktop-only behavior unless the design explicitly requires it.

## Code Quality

Before considering a task complete:

* Run the relevant lint checks.
* Run the build when appropriate.
* Check for TypeScript errors.
* Verify the affected UI in the browser.
* Avoid unrelated changes.
* Remove temporary debugging code.
* Keep the implementation readable and maintainable.

Do not hide errors simply to make the build pass.

## Visual QA

When browser/Playwright tooling is available, use it to verify implemented Figma screens.

Check at minimum:

* overall layout
* component positioning
* spacing
* typography
* colors
* sizing
* responsive behavior
* hover/focus/active states when applicable
* overflow and scrolling behavior

When a visual mismatch is found, investigate the actual cause instead of adding arbitrary CSS offsets.

## Working Style

For non-trivial tasks:

1. Understand the requirement.
2. Inspect the existing code.
3. Inspect the relevant Figma design.
4. Identify reusable pieces.
5. Explain or present the implementation plan.
6. Implement incrementally.
7. Verify the result.
8. Iterate based on evidence.

Do not rewrite unrelated parts of the application.

Do not assume that a requested feature requires a new library, abstraction, or architectural pattern.

When uncertain about an important requirement, inspect the available project/Figma context first rather than guessing.

## Important Rule

The objective is not simply to make the UI work.

The objective is to learn and practice how a professional frontend developer moves from:

**Design → Requirements → Architecture → Components → Implementation → Testing → Visual QA → Iteration**

Claude should assist with this process rather than bypassing it.
