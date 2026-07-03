# Project Instructions

Talk to me like I'm an amateur. Do not assume I understand code terms.

This project is the Gwen poetry website. It lives in the shared "Websites"
workspace (see the master guide at `..\CLAUDE.md`) at:

```text
C:\Users\joshw\Projects\Websites\Website-Gwenevere Greenwood
```

The GitHub repository is:

```text
https://github.com/jwollberg/gwen-webpage.git
```

The live site domain is:

```text
https://gweneveregreenwood.com/
```

All content is edited directly in the code (Markdown files and Astro pages).
There is no web admin / CMS.

## Repository Access

This computer's Git/`gh` is signed in as GitHub user **jwollberg**, who **owns**
`jwollberg/gwen-webpage`. Normal `git push` to `main` works directly — no personal
access token needed. (The repo used to live at `gwengreenwood/gwen-webpage`; it was
transferred to jwollberg, and GitHub redirects any old-URL pushes to the new one.)

One caveat: pushing changes under `.github/workflows/` needs the credential to
include the **workflow** scope. If a push is rejected with a "workflow scope"
message, push the non-workflow files and edit the workflow file on github.com,
or use a token that has the workflow scope.

## After Every Code Or Content Edit

After changing the website, push it all the way through to GitHub unless the user
clearly says not to.

Before editing or pushing, pull the newest version from GitHub first:

```powershell
git status -sb
git pull --rebase origin main
```

Use this order to publish:

```powershell
npm run build
git status -sb
git add -A
git commit -m "Short plain-English description"
git push
gh run list --repo jwollberg/gwen-webpage --limit 3
```

If a new deploy run starts, watch it:

```powershell
gh run watch --repo jwollberg/gwen-webpage --exit-status
```

If `gh` is not on PATH, use:

```powershell
& 'C:\Program Files\GitHub CLI\gh.exe' run list --repo jwollberg/gwen-webpage --limit 3
```

## Protect Content

Treat these paths as the user's own content:

```text
src/content/poems/
src/content/categories/
public/media/
```

Do not delete, replace, rename, or rewrite files in those folders during design
or layout work unless the user specifically asks for that content change.

When changing design/code, prefer editing these areas instead:

```text
src/pages/
src/layouts/
src/components/
src/styles/
astro.config.mjs
.github/workflows/
```

Before pushing, check what will be committed:

```powershell
git status -sb
git diff --stat origin/main..HEAD
```

If the diff includes poem, category, or image files that were not part of the
user's request, stop and ask before pushing.

## Deployment Notes

The `.github/workflows/deploy.yml` workflow deploys the site automatically every
time `main` is pushed. It builds with:

```text
SITE_URL=https://gweneveregreenwood.com
SITE_BASE=/
```

Keep `SITE_BASE=/` while the custom domain is active.

If the workflow fails, read the failed log before guessing:

```powershell
gh run view --repo jwollberg/gwen-webpage --log-failed
```

## Live Site Check

After a successful deploy, open the live site and make sure it is styled:

```text
https://gweneveregreenwood.com/
https://gweneveregreenwood.com/poems/
https://gweneveregreenwood.com/photography/
```

If DNS is not ready yet, the GitHub Pages deploy can still succeed before the
custom domain opens in a browser.
