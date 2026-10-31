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

Your first article is ready in `src/content/blog/my-first-post.md`. Run `npm run dev` and open <http://localhost:4321/blog/my-first-post/> to preview it while you write. Edit the title, summary, and outline in that file. It starts as a draft; change `draft: true` to `draft: false` and update `pubDate` when you're ready to publish.

Create a Markdown file in `src/content/blog/`, for example `my-first-post.md`:

```md
---
title: 'My first post'
description: 'A short summary of the post.'
pubDate: 2026-10-30
draft: false
---

Write your post here.
```

The post appears at `/blog/my-first-post/`. Posts are listed newest first, with the latest three shown on the homepage. Drafts are visible in the local development server, with a draft label on the article page. Set `draft: true` to exclude a post from all production listings and generated routes. The sample `welcome.md` post can be edited or deleted.

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
