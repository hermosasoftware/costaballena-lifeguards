import type { Lang } from './copy';

/**
 * Single source of truth for all internal hrefs.
 * Eliminates hardcoded lang-conditional strings scattered across components.
 */
export function getRoutes(lang: Lang) {
	const prefix = lang === 'es' ? '/es' : '';
	return {
		home: `${prefix}/` as const,
		donate: `${prefix}/donate`,
		donateForm: `${prefix}/donate/form`,
		community: `${prefix}/community-support`,
		contact: `${prefix}/contact`,
		/** Href and label for switching to the other language */
		langToggle: {
			href: lang === 'es' ? '/' : '/es',
			label: lang === 'es' ? 'EN' : 'ES',
		},
	};
}
