# Personal website

A minimal personal website and Markdown blog built with [Astro](https://astro.build/) and strict TypeScript. Pages are generated as static HTML, with plain CSS and no client-side JavaScript required by the site.

## Get started

Use Node.js 24 (see `.nvmrc`) and npm.

```sh
npm install
npm run dev
```

Open <http://localhost:4321>.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Check Astro files, content types, and TypeScript |
| `npm run build` | Generate the static website in `dist/` |
| `npm run preview` | Preview the production build locally |

## Customize

- Update your name, website title, and description in `src/config.ts`.
- Edit `src/pages/index.astro` for the homepage.
- Change typography, colors, and spacing in `src/styles/global.css`.
- Replace `public/favicon.svg` with your own icon.

## Write a post

Your first article is in `src/content/blog/welcome.md`, at <http://localhost:4321/blog/welcome/>. Run `npm run dev` to preview edits as you write. Set `draft: true` while working on a new post; change it to `false` and update `pubDate` when you're ready to publish.

The blog has three sections:

- **Writing** (`/blog/`): essays and original ideas. Use `section: writing`.
- **Reflections** (`/reflections/`): thoughts on books, podcasts, articles, and other content. Use `section: reflections`.
- **Notes** (`/notes/`): concise learnings and takeaways. Use `section: notes`.

All posts live in `src/content/blog/`. The `section` field decides which listing they appear in; posts without this field default to Writing. Individual article URLs stay at `/blog/<filename>/` in every section.

Create a Markdown file in `src/content/blog/`, for example `my-first-post.md`:

```md
---
title: 'My first post'
description: 'A short summary of the post.'
pubDate: 2026-10-30
section: writing
draft: false
---

Write your post here.
```

The post appears at `/blog/my-first-post/`. Each section lists its posts newest first. The homepage has Recent writing, Recent reflections, and Recent notes, with up to five dated links per section and a link to the full archive. Drafts are visible in the local development server, with a draft label on the article page. Set `draft: true` to exclude a post from all production listings and generated routes.

## Project structure

```text
public/                    Static assets
src/
  components/PostList.astro Shared post list
  content/blog/            Markdown posts
  content.config.ts        Blog content schema
  layouts/BaseLayout.astro Shared page layout and metadata
  lib/posts.ts             Published posts, sorted by date
  pages/                   Homepage and blog routes
  styles/global.css        Site styles
  config.ts                Personal details and site metadata
```

## Deploy

Run `npm run build` and deploy `dist/` to a static host such as Cloudflare Pages, Netlify, or Vercel. Use `npm run build` as the host's build command and `dist` as its output directory. No server adapter is needed for this static site.

Once you have a public domain, set the `site` option in `astro.config.mjs` to its full URL, such as `https://your-domain.com`.
