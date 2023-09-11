import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
      credit: z.string(),
    }),
  }),
});

export const collections = { blog };
