# chrisquek.my-main

The main hub page for **chrisquek.my**: a one-page personal site with a short introduction, a "Find me online" row of links (LinkedIn, Blog, GitHub, Contact) and a "What I'm building" section showing what I build and what each project is built and hosted with.

Live at https://chrisquek.my

## Files

| File | Purpose |
|------|---------|
| `index.html` | The page |
| `styles.css` | Styles, with light and dark colour tokens at the top |
| `script.js` | Theme toggle and contact form |
| `theme-init.js` | Applies a saved dark theme before the page paints |
| `404.html`, `404.js` | Not-found page and its random messages |
| `_headers` | Security headers set by Cloudflare Pages (not served as a file) |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `chris-quek.jpg` | Illustrated portrait |
| `og-image.jpg` | 1200 x 630 preview image for shared links |
| `favicon.svg` | Browser tab icon |
| `inter-latin-wght-normal.woff2`, `jetbrains-mono-latin-wght-normal.woff2` | Self-hosted fonts |
| `LICENSE-inter.txt`, `LICENSE-jetbrains-mono.txt`, `LICENSE-bootstrap-icons.txt` | Licences for the fonts and icons |

Plain HTML, CSS and JavaScript. No build step, no framework, nothing loaded from other sites except the contact form request.

## Security headers

`_headers` sets a Content-Security-Policy and other headers on every page. The policy only allows scripts, styles, fonts and images from this site, and only lets the contact form talk to `api.web3forms.com`. Because of that:

- Do not add inline `<script>` blocks, inline `style="..."` attributes or event attributes such as `onclick`. Put code in a `.js` file and styles in `styles.css`.
- Anything loaded from another site (analytics, a font service, an embed) must first be added to the policy in `_headers`, or the browser will block it.
- The two `X-Robots-Tag: noindex` rules at the bottom keep search engines off the `pages.dev` addresses, so only chrisquek.my is indexed. Staging therefore scores about 69 for SEO in PageSpeed; that is expected.
- After changing `_headers`, test the contact form and the theme toggle on staging, and run the staging address through securityheaders.com.

## Design

- Theme: "Modern Tech". A dot-grid banner, thin borders, Inter for text and JetBrains Mono for labels. Light and dark modes; the choice is remembered in the browser.
- Icons: Bootstrap Icons (MIT) for the four links, Feather (MIT) for the rest. All are drawn inline in `index.html`.
- Fonts: Inter and JetBrains Mono (SIL Open Font Licence 1.1), served from this repo.

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
- **Make the Blog link live:** in the "Find me online" list, replace the `div` with class `link soon` by an `a` with class `link`, copying the pattern used for GitHub, and remove the "soon" tag.
- **Bring back the CV link:** the CV link is kept as an HTML comment inside the same list. Move it out of the comment.
- **Add a project:** in the "What I'm building" section, copy a `<li class="card">` block, then change the link, icon, name, status tag, description and the `built_with` and `runs_on` chips. Put the most important project first.
- **Colours:** edit the variables at the top of `styles.css`.
- **Share image:** replace `og-image.jpg` with a new 1200 x 630 image.

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
| MyBizTools | mybiztools.chrisquek.my | Live, work in progress |
| GuanoAirTer | guanoairter.chrisquek.my | Live, beta |
| Blog | blog.chrisquek.my (planned) | Planned |
| Resume | resume.chrisquek.my | Live, not linked from the hub |

## Notes

- Every file in the repo root is public on the live site. Never commit secrets here.
- Cloudflare Pages free tier allows 500 builds a month across the account. Each commit uses one.
