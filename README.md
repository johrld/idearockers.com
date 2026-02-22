# idearockers.com — Venture Builder Website

Website of Idearockers, a venture builder focused on AI, SaaS, and digital products. Built with [Next.js 16](https://nextjs.org).

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS + shadcn/ui
- **i18n:** German (default) + English
- **Content:** Static translations (JSON)

## Project Structure

```
├── app/
│   ├── [locale]/            # Localized pages (layout + homepage)
│   ├── impress/             # Legal: Impressum
│   ├── privacy/             # Legal: Privacy policy
│   ├── layout.tsx           # Root layout
│   ├── opengraph-image.tsx  # Dynamic OG image generation
│   └── robots.ts / sitemap.ts
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── hero-geometric.tsx   # Hero section
│   ├── project-boxes.tsx    # Project showcase
│   ├── founder-strip.tsx    # Founder section
│   └── footer.tsx           # Site footer
├── translations/
│   ├── de/                  # German translations
│   └── en/                  # English translations
├── styles/                  # Global CSS
├── docker-compose.dev.yml   # Dev container config
├── docker-compose.prod.yml  # Production container config
├── dockerfile               # Production multi-stage build (Next.js standalone)
├── dockerfile.dev           # Dev container with hot reload
└── next.config.mjs          # Next.js configuration
```

## Development

Development runs inside Docker on a remote Hetzner dev server, accessed via SSH (Cursor Remote). The dev server is secured behind Cloudflare Tunnel.

```bash
# Start dev container
docker compose -f docker-compose.dev.yml up -d

# View logs
docker logs idearockerscom-idearockers-1 -f

# Rebuild after config changes
docker compose -f docker-compose.dev.yml up -d --build
```

The dev container mounts the project directory, so file changes trigger Next.js hot reload automatically.

## Commands

| Command         | Action                                     |
| :-------------- | :----------------------------------------- |
| `npm install`   | Install dependencies                       |
| `npm run dev`   | Start local dev server at `localhost:3000`  |
| `npm run build` | Build production site                      |
| `npm run start` | Start production server                    |
| `npm run lint`  | Run ESLint                                 |

## Deployment

Production deployments are managed via [Dokploy](https://dokploy.com) on a separate Hetzner server. The production build uses a multi-stage Dockerfile with Next.js standalone output.

## Branch Strategy

```
main     ← production releases
develop  ← integration branch
feat/*   ← feature branches
```
