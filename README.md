# chrisquek.my-main

Main hub page for **chrisquek.my**. It links to all of Chris Quek's sites and projects.

## Status

Initial setup. A placeholder page is deployed on staging. The real hub page has not been built yet. The hub design is not decided.

## Sites in the chrisquek.my family

Each site has its own GitHub repo and its own Cloudflare Pages project. Subdomain names are provisional until they are connected.

| Site | Address | GitHub repo |
|------|---------|-------------|
| Main hub (this repo) | chrisquek.my | chrisqck1411/chrisquek.my-main |
| MyBizTools | mybiztools.chrisquek.my (planned) | currently mybiztoolsmy/mybiztools-web, to be moved to chrisqck1411/chrisquek.my-mybiztools |
| Blog | blog.chrisquek.my (planned) | chrisquek.my-blog (not created yet) |
| Resume | resume.chrisquek.my (planned) | chrisquek.my-resume (not created yet) |

## Repo naming convention

`chrisquek.my-<subdomain_name>`, for example `chrisquek.my-main`, `chrisquek.my-mybiztools`, `chrisquek.my-blog`.

## Hosting and cost

- Domain: chrisquek.my, registered at Exabytes. DNS is managed at Cloudflare.
- Hosting: Cloudflare Pages free tier. Pages project name: `chrisquek-my-main`.
- Source code: GitHub, one repo per site.
- Running cost: the domain renewal only.

## Branches and release workflow

- `staging`: every change goes here first and is checked online on the staging URL.
- `main`: production. It is only updated after staging has been confirmed stable.

| Environment | Branch | URL |
|-------------|--------|-----|
| Staging | staging | https://staging.chrisquek-my-main.pages.dev |
| Production | main | https://chrisquek-my-main.pages.dev, then chrisquek.my once connected |

Rollback: use Cloudflare Pages deployment rollback, or push a Git revert to `staging` first.

## Languages

Site text is in English and Bahasa Malaysia, with a language toggle.

## Editing

There is no local preview step. Commit to `staging`, wait for Cloudflare Pages to deploy, and test on the staging URL.

## Privacy

This hub page does not collect or store visitor data.
