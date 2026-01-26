import { defineCollection, z } from "astro:content";

const homepageCollection = defineCollection({
    schema: z.object({
        headline: z.string(),
        /* intro: z.string(),
        coverImage: z.string().optional(), */
        /* title: z.string(), */
    }),
});

const galleryCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        images: z.array(z.string().min(1)),
    }),
});

const pagesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        nav: z.boolean().optional(),
        nav_label: z.string().optional(),
        /* content: z.string(), */
    }),
});

const legalCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        /* content: z.string(), */
    }),
});

export const collections = {
    homepage: homepageCollection,
    gallery: galleryCollection,
    pages: pagesCollection,
    legal: legalCollection,
};