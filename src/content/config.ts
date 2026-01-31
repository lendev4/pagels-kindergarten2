import { defineCollection, z } from "astro:content";

const homepageCollection = defineCollection({
    schema: z.object({
        headline: z.string(),
        quote: z.string().optional(),
        quote_author: z.string().optional(),
        cover_image: z.string().optional(),
        /* intro: z.string(),
        coverImage: z.string().optional(), */
        /* title: z.string(), */
    }),
});

const homepageSectionsCollection = defineCollection({
    schema: z.object({
        section_title: z.string(),
        order: z.number().optional().nullable(),
        color: z.string().optional().nullable(),
        image_on_left: z.boolean().optional(),
        section_image: z.string().optional().nullable(),
    }),
});

const galleryCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional().nullable(),
        order: z.number().optional().nullable(),
        color: z.string().optional().nullable(),
        images: z.array(z.string().min(1)),
    }),
});

const pagesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        nav_order: z.number().optional().nullable(),
        nav: z.boolean().optional(),
        nav_label: z.string().optional(),
        /* color: z.string().optional().nullable(), */
        sections: z.array(z.object({
            section_title: z.string().optional().nullable(),
            section_color: z.string().optional().nullable(),
            reduced_padding_top: z.boolean().optional(),
            reduced_padding_bottom: z.boolean().optional(),
            section_body: z.string(),
        })).optional(),
    }),
});

const legalCollection = defineCollection({
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = {
    homepage: homepageCollection,
    homepage_sections: homepageSectionsCollection,
    gallery: galleryCollection,
    pages: pagesCollection,
    legal: legalCollection,
};