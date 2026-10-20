# Dra. Aline

Next.js App Router application using React, TypeScript, CSS Modules, and Recharts.
This replaces the Angular application; the previous implementation remains in
the repository's Git history.

## Local development

Use Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The root URL redirects to `/inicio`.
Application routes live in `src/app`, shared components in `src/components`,
and public assets in `public`.

## Checks

```bash
npm run lint
npm run build
```

The production build includes TypeScript checking. The Google fonts configured
in `src/app/layout.tsx` require network access during the build.

## Production

```bash
npm ci
npm run build
npm start
```

Deploy using the Next.js preset on a compatible hosting provider, or run the
commands above on a Node.js server. Replace any previous Angular build command
and `dist` output-directory settings. This project uses Next.js server redirects
and is not configured as a static export for GitHub Pages.

The `dev` branch contains the migration. Copying the application does not change
the hosting provider's production branch or deploy it automatically.
