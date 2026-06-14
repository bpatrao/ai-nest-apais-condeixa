// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `bun run build:static` sets this to produce a fully static, prerendered
// site under ./dist (no server runtime) for hosting on Cloudflare Pages,
// Netlify, GitHub Pages, etc. The default build is left untouched.
const STATIC = process.env.BUILD_STATIC === "true";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every page reachable from "/" to static HTML for the static build.
    ...(STATIC
      ? {
          prerender: { enabled: true, crawlLinks: true },
        }
      : {}),
  },
  // Skip Nitro for the static build: TanStack Start runs its own Vite SSR
  // build, prerenders every crawled route to HTML, and writes the result to
  // dist/client — the folder to deploy. (Nitro's output naming doesn't line up
  // with the prerenderer's preview server, so it can't be used here.)
  ...(STATIC ? { nitro: false } : {}),
});
