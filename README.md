# Portfolio

A personal portfolio built with React, TypeScript, Vite, Mantine, styled-components, and i18next.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Mantine
- styled-components
- i18next and react-i18next
- Tailwind CSS

## Project Structure

```text
src/
  app/       Application composition, providers, and routes
  pages/     Route-level pages
  features/  Page sections and user-facing feature blocks
  entities/  Domain types
  shared/    Reusable UI, layout, theme, i18n, constants, and styles
  assets/    Bundled images
```

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run format:check
```

## Notes

The app uses a lightweight layered structure inspired by `app/pages/features/entities/shared`.
The remaining known architecture debt is moving domain constants out of `shared/constants`.
