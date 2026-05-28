import { defineCollection, z } from "astro:content";

const journalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    cover: z.string().optional(), // chemin de l'image de couverture
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  journal: journalCollection,
};
