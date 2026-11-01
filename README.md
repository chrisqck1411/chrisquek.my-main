# chrisquek.my-main

The main hub page for **chrisquek.my**: a one-page personal portfolio with a short introduction, contact details, and icon links to my other sites.

Live at https://chrisquek.my

## Files

| File | Purpose |
|------|---------|
| `index.html` | The page |
| `styles.css` | Styles, light and dark themes |
| `script.js` | Theme toggle and contact form |
| `404.html` | Not-found page |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `chris-quek.jpg` | Portrait |
| `og-image.jpg` | Preview image for shared links |
| `favicon.svg` | Browser tab icon |

Plain HTML, CSS and JavaScript. No build step, no framework, nothing loaded from other sites except the contact form request.

## Branches and release workflow

- `staging`: every change goes here first and is checked online.
- `main`: production. Only updated after staging is confirmed stable, through a pull request from `staging`.

| Environment | Branch | URL |
|-------------|--------|-----|
| Staging | staging | https://staging.chrisquek-my-main.pages.dev |
| Production | main | https://chrisquek.my |

Rollback: use Cloudflare Pages deployment rollback, or push a Git revert to `staging` first.

There is no local preview. Commit to `staging`, wait for Cloudflare Pages to deploy, and test on the staging URL.

## Common edits

- **Intro text:** edit the paragraph with class `intro` in `index.html`.
- **Make an icon live:** in `index.html`, change the `div` for CV, Blog or MyBizTools into an `a` link with the site address, copying the pattern used for GitHub, and remove its "Soon" tag.
- **Colours:** edit the variables at the top of `styles.css`.

## Hosting and services

- Domain: chrisquek.my, registered at Exabytes, auto-renew on. DNS is managed at Cloudflare.
- Hosting: Cloudflare Pages free tier. Pages project: `chrisquek-my-main`.
- Email: `hello@chrisquek.my` forwards to a personal inbox through Cloudflare Email Routing. It is receive-only. A DMARC record rejects mail that falsely claims to come from the domain.
- Contact form: Web3Forms free plan (250 messages a month, stored for 30 days). The form access key is public by design. Spam protection is a hidden trap field plus Web3Forms' own check.

## Related sites

Each site has its own repo, named `chrisquek.my-<subdomain>`, and its own Cloudflare Pages project.

| Site | Address | Status |
|------|---------|--------|
| Hub (this repo) | chrisquek.my | Live |
| MyBizTools | mybiztools.chrisquek.my (planned) | In development |
| Blog | blog.chrisquek.my (planned) | Planned |
| Resume | resume.chrisquek.my (planned) | Planned |

## Notes

- Every file in the repo root is public on the live site. Never commit secrets here.
- Cloudflare Pages free tier allows 500 builds a month across the account. Each commit uses one.
