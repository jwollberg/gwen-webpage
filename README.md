# Gwenevere Ivy Greenwood

A clean, static poetry and art site built with [Astro](https://astro.build) and
hosted on Vault, Josh's home server. Poems and collections are Markdown files; images live in
`public/media`. All content is edited directly in the code (there is no web admin).

## Run it on your computer

1. Install [Node.js](https://nodejs.org) if you don't have it.
2. Open this folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal.

To check the production build:

```bash
npm run build
```

## Project layout

```text
src/pages/            The pages (home, poems, short-stories, artwork, photography)
src/layouts/          The shared page shell (header, nav, footer)
src/components/        Reusable pieces (e.g. the photo Lightbox)
src/styles/global.css  The whole design system (colors, type, layout)
src/content/poems/     One Markdown file per poem
src/content/categories/ One Markdown file per collection
public/media/          All images
```

## Add a poem

1. Put any image for the poem in `public/media`.
2. Create a file at `src/content/poems/your-poem-title.md`.
3. Use this frontmatter (only `title` and `category` are required):

```yaml
---
title: "Your Poem Title"
category: "world-of-no-peace"
# image: "/media/your-image.jpg"    # optional
# music: "/media/your-song.mp3"     # optional
# tags: ["memory", "evening"]       # optional
---

Write your poem here.

Use a blank line between stanzas.
To force a single line break, add two spaces at the end of a line.
```

The file name becomes the page URL. `after-rain.md` in the
`world-of-no-peace` collection becomes `/poems/world-of-no-peace/after-rain/`.

## Add or rename collections

Collection files live in `src/content/categories`. Each has a `title` and an
`order` (sort position). A poem joins a collection by matching its `category`
to the collection file name (without `.md`).

## Publish

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and pushes the finished pages to the `site` branch. Vault (Josh's home
server) copies that branch and serves it within a few minutes.

## Custom domain

`gweneveregreenwood.com` is on Cloudflare (since 2026-11-25; it was on GitHub
Pages before): the apex and `www` point at Vault's Cloudflare tunnel. How it
works: `AtheosHome/vault/README.md`, "Public websites", in `jwollberg/atheos-home`.

To change the sitemap domain, update the repository variable `SITE_URL`.
