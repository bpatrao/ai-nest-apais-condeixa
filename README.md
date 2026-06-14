# ai-nest-apais-condeixa

AI Nest — Vibe for Good. Website for **APAIS — Associação de Pais da EB N.º1 de
Condeixa-a-Nova** (the parents' association of the EB N.º1 school in
Condeixa-a-Nova, Portugal).

It's a single-page marketing site (hero, mission, events, gallery, contacts,
etc.) built with [TanStack Start](https://tanstack.com/start) on top of the
[`@lovable.dev/vite-tanstack-config`](https://www.npmjs.com/package/@lovable.dev/vite-tanstack-config)
preset.

## Tech stack

- **TanStack Start** + **TanStack Router** (React 19, SSR / prerendering)
- **Vite 7** with the Lovable Vite/TanStack config wrapper
- **Tailwind CSS v4** + **shadcn/ui** (Radix primitives) for the design system
- **TanStack Query**, **react-hook-form** + **zod**
- **Bun** as the package manager / task runner

## Getting started

```bash
bun install      # install dependencies
bun run dev      # start the dev server (http://localhost:3000 by default)
```

### Available scripts

| Script                 | What it does                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `bun run dev`          | Start the local dev server with HMR.                              |
| `bun run build`        | Default build (Lovable-managed deploy target).                    |
| `bun run build:dev`    | Build in development mode.                                         |
| `bun run build:static` | **Prerender the site to static files in `dist/client/`** (below). |
| `bun run preview`      | Preview the last build locally.                                   |
| `bun run lint`         | Run ESLint.                                                       |
| `bun run format`       | Format the codebase with Prettier.                                |

## Static build (Cloudflare Pages, Netlify, GitHub Pages, …)

`bun run build:static` produces a fully static, prerendered copy of the site —
no server runtime required. It:

1. Builds the app and prerenders every page reachable from `/` to plain HTML.
2. Disables Nitro (the server bundler) so the result is just HTML + assets.
3. Writes the deployable site to **`dist/client/`**.

```bash
bun run build:static
# → dist/client/index.html + dist/client/assets/*
```

You can sanity-check the output locally with any static file server:

```bash
cd dist/client && python3 -m http.server 8000
# open http://localhost:8000
```

### Deploying to Cloudflare Pages

Connect the repo in the Cloudflare Pages dashboard and use:

| Setting                  | Value                |
| ------------------------ | -------------------- |
| **Build command**        | `bun run build:static` |
| **Build output directory** | `dist/client`        |

(If the project doesn't auto-detect Bun, set the `BUN_VERSION` environment
variable, e.g. `1.2.0`.)

To deploy with Wrangler from your machine instead:

```bash
bun run build:static
npx wrangler pages deploy dist/client
```

### Assets

All images — including the logos (`apais-logo.png`, `apais-logo-white.png`) and
the hero (`hero-new.jpg`) — are committed to `src/assets/` and imported
directly, so they're bundled into `dist/client/assets/` and the static build is
fully self-contained. There's no dependency on any external CDN.
