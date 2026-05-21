# R-TVUI Web

Public knowledge base and project website for [R-TVUI](https://github.com/dfunani/r_tvui) — built with Next.js.

## Audience

| Section | Path |
|---------|------|
| Users | `/docs/getting-started`, `/docs/install`, `/docs/usage`, `/download` |
| Developers | `/docs/architecture`, `/docs/development`, `/docs/distribution` |
| Contributors | `/docs/contributing` |

## Development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open the URL from `SITE_URL` in `.env.local` (default `http://localhost:3000`).

## Environment variables (Vercel)

All config is read **on the server at request time** — not baked into the client bundle. Set these in Vercel → Settings → Environment Variables:

| Variable | Purpose |
|----------|---------|
| `SITE_URL` | Canonical site URL (metadata, links) |
| `GITHUB_REPO_URL` | Main repo (nav, clone, doc blob links) |
| `GITHUB_DEFAULT_BRANCH` | Branch for `docs/*.md` links (default `master`) |
| `RELEASE_VERSION` | Latest release without `v` (e.g. `1.0.0`) for versioned download URLs |
| `GITHUB_RELEASES_URL` | Optional; defaults to `{repo}/releases` |
| `SITE_NAME`, `SITE_TAGLINE`, `SITE_DESCRIPTION` | Optional branding |

Legacy `NEXT_PUBLIC_*` names are still supported as fallbacks.

After changing env in Vercel, trigger **one redeploy** (no code edit). Pages use `force-dynamic` so new values apply on the next request.

## Deploy on Vercel

1. Import this repository.
2. Framework: **Next.js**.
3. Add env vars from `.env.example`.
4. Deploy.

## Related repo

The terminal application lives in [github.com/dfunani/r_tvui](https://github.com/dfunani/r_tvui).
