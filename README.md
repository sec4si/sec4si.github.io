# sec4si website

The organization website for [sec4si](https://github.com/sec4si), published at **https://sec4.si/** through GitHub Pages.

This repository starts with a responsive, buildless placeholder. No package installation or build step is required.

## Edit and publish

Edit `index.html` and any assets, then commit to `main`. GitHub Pages publishes from the repository root on `main`.

- `index.html`: homepage and styles
- `favicon.svg`: site icon
- `CNAME`: custom domain (`sec4.si`); keep this when replacing the placeholder
- `.nojekyll`: serves files directly without Jekyll

## Domain

Porkbun remains the registrar. Cloudflare manages authoritative DNS. GitHub Pages hosts the static site.

The apex domain uses the four GitHub Pages A records and four AAAA records. `www` points to `sec4si.github.io` and redirects to the apex through GitHub Pages. Website records use DNS-only mode, allowing GitHub Pages to provision and renew HTTPS directly.

The organization has verified ownership of `sec4.si` through a `_github-pages-challenge-sec4si` TXT record. Keep that record in Cloudflare after verification.

GitHub Pages manages the certificate for `sec4.si` and `www.sec4.si`, with HTTPS enforced.

## Local preview

Serve this directory with any static HTTP server. Relative file structure and the `CNAME` can be preserved when adding a static site generator later.
