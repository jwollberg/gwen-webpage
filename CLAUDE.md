# Project Instructions

The full project instructions live in [AGENTS.md](AGENTS.md) — read that file.
It is the single source of truth for how to work in this repo (design vs.
content, git/deploy workflow, repository access, and the live domain).

Quick facts:

- Static Astro site, served from Vault (Josh's home server): every push to `main`
  builds it and pushes the result to the `site` branch, which Vault copies. DNS is
  on Cloudflare; GitHub Pages is off (2026-11-25).
- Live domain: https://gweneveregreenwood.com/ (no "ivy").
- No web admin/CMS — all content is edited directly in the code.
- Talk to the site owner in plain, non-technical language.
