import { defineCollection, z } from "astro:content";

const homepageCollection = defineCollection({
    schema: z.object({
        headline: z.string(),
        intro: z.string(),
        coverImage: z.string().optional(),
    }),
});

const galleryCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        images: z.array(z.string().min(1)),
    }),
});

export const collections = {
    homepage: homepageCollection,
    gallery: galleryCollection,
};