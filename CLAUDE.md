# Project Instructions

The full project instructions live in [AGENTS.md](AGENTS.md) — read that file.
It is the single source of truth for how to work in this repo (design vs.
content, git/deploy workflow, repository access, and the live domain).

Quick facts:

- Static Astro site, deployed to GitHub Pages on every push to `main`. The same
  workflow also pushes the built site to the `site` branch, which Vault (Josh's home
  server) already serves; the domain moves there once its DNS is on Cloudflare.
- Live domain: https://gweneveregreenwood.com/ (no "ivy").
- No web admin/CMS — all content is edited directly in the code.
- Talk to the site owner in plain, non-technical language.
