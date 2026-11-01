import { getCollection } from 'astro:content';
import type { Section } from './sections';

export async function getPosts(section?: Section) {
  const posts = await getCollection('blog', ({ data }) =>
    (import.meta.env.DEV || !data.draft) && (!section || data.section === section),
  );
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
