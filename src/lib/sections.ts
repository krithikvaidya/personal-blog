export const sections = {
  writing: {
    title: 'Writing',
    href: '/blog/',
    description: 'Essays, ideas, and things I want to think through.',
    empty: 'New writing will appear here soon.',
  },
  reflections: {
    title: 'Reflections',
    href: '/reflections/',
    description: 'Thoughts on books, podcasts, articles, and other things I’ve consumed.',
    empty: 'Reflections on what I’m reading, watching, and listening to will appear here soon.',
  },
  notes: {
    title: 'Notes',
    href: '/notes/',
    description: 'Concise notes on learnings and takeaways.',
    empty: 'Short notes and takeaways will appear here soon.',
  },
} as const;

export type Section = keyof typeof sections;
export const sectionIds = Object.keys(sections) as Section[];
