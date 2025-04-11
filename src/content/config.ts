import { defineCollection, z } from 'astro:content';


// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    excerpt: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postCollection,
};


