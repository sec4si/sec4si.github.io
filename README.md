# sec4si website

The organization website for [sec4si](https://github.com/sec4si), published at **https://sec4.si/** through GitHub Pages.

This repository contains the compiled static landing page for **Security for SI**, covering LLMs, inference infrastructure, agents, and the wider AI ecosystem. It uses the licensed ReactBits Pro Typographic Wall as an interactive background.

## Edit and publish

GitHub Pages publishes from the repository root on `main`. The development project is maintained privately because the ReactBits Pro license restricts distribution of component source. Build the private project and copy its static output into this repository, then commit to `main` after reviewing the preview.

- `index.html`: compiled homepage entry
- `assets/`: fingerprinted CSS, minified JavaScript, and local fonts
- `licenses/`: third-party font and runtime notices
- `favicon.svg`: site icon
- `CNAME`: custom domain (`sec4.si`); keep this when replacing the placeholder
- `.nojekyll`: serves files directly without Jekyll

## Domain

Porkbun remains the registrar. Cloudflare manages authoritative DNS. GitHub Pages hosts the static site.

The apex domain uses the four GitHub Pages A records and four AAAA records. `www` points to `sec4si.github.io` and redirects to the apex through GitHub Pages. Website records use DNS-only mode, allowing GitHub Pages to provision and renew HTTPS directly.

The organization has verified ownership of `sec4.si` through a `_github-pages-challenge-sec4si` TXT record. Keep that record in Cloudflare after verification.

GitHub Pages manages the certificate for `sec4.si` and `www.sec4.si`, with HTTPS enforced.

## Projects

The homepage's research list includes Benchmark, Lens, and Infer, each with links to its website and repository. The Projects navigation goes to `/#projects`; `/#benchmark`, `/#lens`, and `/#infer` open the corresponding project directly. Accordion selection is reflected in the URL without adding history entries, so reloads and navigation back restore the selected row.

| Project | Website | Repository |
| --- | --- | --- |
| Benchmark | https://benchmark.sec4.si/ | https://github.com/sec4si/benchmark |
| Lens | https://lens.sec4.si/ | https://github.com/sec4si/lens |
| Infer | https://infer.sec4.si/ | https://github.com/sec4si/infer |

The project subdomains use DNS-only CNAME records pointing to `sec4si.github.io`. Each project publishes through its own GitHub Actions workflow, with HTTPS enforced.

## Local preview

Serve this repository with any static HTTP server to preview the production output. The private development project also provides a loopback-only preview server and build scripts. Do not publish licensed component source, source maps, or development archives in this public repository.
