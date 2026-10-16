# Sifen Mekonnen Portfolio

Personal portfolio featuring software projects, entrepreneurship, education, and leadership experiences.

Live site: https://sifen-portfolio.sifenmekonnen.workers.dev

## Stack

React 19, TypeScript, Vinext, Vite 8, and Cloudflare Workers. Pages and API routes use the Next.js App Router conventions; Vinext builds them for Workers.

## Local development

Install Node.js 22.13 or newer, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:5173. Stop the server with Ctrl+C.

If the Workers emulator cannot run on your computer, use `npm run preview:node`.

## Content

Page content is stored in `lib/content.json`, and images are in `public/materials`. Update those files to change the portfolio. Original source links are retained alongside the content.

The portfolio has 44 pages and 106 local images. It uses versioned JSON content rather than a database. Contact links open the visitor's email or phone application; videos and external materials load from their respective providers.

## API

`GET /api/portfolio` returns `{ pages, total }`.

| Parameter | Purpose |
| --- | --- |
| `q` | Search page titles and text; limited to 200 characters |
| `category` | Filter by category slug, or `all` |
| `slug` | Return one page by its exact slug |

An unknown category returns HTTP 400. A missing page returns HTTP 404.

## Checks

```sh
npm run verify
npx tsc --noEmit
npm run build
```

Verification covers content integrity, local images, API search, categories, detail responses, and error handling.

## Cloudflare deployment

The Worker name and runtime settings are in `wrangler.jsonc`. Log in once:

```sh
npx wrangler login
```

Build and deploy after making changes:

```sh
npm run build
npm run deploy
```

Only deploy after the build succeeds. Local changes do not update the live site automatically. `npm run start` previews the production build locally.

On Windows PowerShell, use `npm.cmd` and `npx.cmd` if script execution restrictions block `npm` or `npx`.