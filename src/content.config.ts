import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Une collection par langue : src/content/countries/ja/{slug}.md et
// src/content/countries/en/{slug}.md. Le contenu français sourcé et vérifié
// (contenu/pays/*.md à la racine du projet) reste la source de vérité ;
// ces fichiers sont les traductions destinées au site public.
const statusSchema = z
	.object({
		sourcesCollected: z.boolean().default(false),
		figuresVerified: z.boolean().default(false),
	})
	.default({});

const countriesJa = defineCollection({
	loader: glob({ pattern: '*.{md,mdx}', base: './src/content/countries/ja' }),
	schema: z.object({
		slug: z.string(),
		name: z.string(),
		status: statusSchema,
	}),
});

const countriesEn = defineCollection({
	loader: glob({ pattern: '*.{md,mdx}', base: './src/content/countries/en' }),
	schema: z.object({
		slug: z.string(),
		name: z.string(),
		status: statusSchema,
	}),
});

export const collections = { countriesJa, countriesEn };
