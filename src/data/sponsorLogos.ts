/**
 * Sponsor logos: imported as URLs so Astro/Sharp does not transform them
 * (some source files are AVIF/HEIF variants that fail in CI or local Sharp).
 */
import brewCo from '../assets/sponsors/brew-co.jpg?url';
import delicias from '../assets/sponsors/Delicias.avif?url';
import elRincon from '../assets/sponsors/El_Rincon_de_Domi.avif?url';
import laJunta from '../assets/sponsors/La_Junta.avif?url';
import cafeMono from '../assets/sponsors/limage-23-441-photo.avif?url';
import maviSurf from '../assets/sponsors/MaviSurf.avif?url';
import moromo from '../assets/sponsors/moromologo.avif?url';
import ricar2 from '../assets/sponsors/Ricar2_Restaurant.avif?url';
import rioLindo from '../assets/sponsors/RioLindo.avif?url';
import suRaza from '../assets/sponsors/SuRaza.avif?url';
import theBakery from '../assets/sponsors/The_Bakery.avif?url';
import villasRioMar from '../assets/sponsors/Villas_Rio_Mar.avif?url';

export type SponsorLogo = {
	href: string;
	nameEn: string;
	nameEs: string;
};

/** Stable order (alphabetical by English name) */
export const sponsorLogos: SponsorLogo[] = [
	{ href: brewCo, nameEn: 'Fuego Brew Co.', nameEs: 'Fuego Brew Co.' },
	{ href: cafeMono, nameEn: 'Café Mono Congo', nameEs: 'Café Mono Congo' },
	{ href: delicias, nameEn: 'Delicias', nameEs: 'Delicias' },
	{ href: elRincon, nameEn: 'El Rincón de Domi', nameEs: 'El Rincón de Domi' },
	{ href: laJunta, nameEn: 'La Junta', nameEs: 'La Junta' },
	{ href: maviSurf, nameEn: 'MAVI Surf Hotel Dominical', nameEs: 'MAVI Surf Hotel Dominical' },
	{ href: moromo, nameEn: 'MOROMO', nameEs: 'MOROMO' },
	{ href: ricar2, nameEn: 'Ricar2 Restaurant', nameEs: 'Ricar2 Restaurant' },
	{ href: rioLindo, nameEn: 'Río Lindo', nameEs: 'Río Lindo' },
	{ href: suRaza, nameEn: 'Su Raza Restaurante', nameEs: 'Su Raza Restaurante' },
	{ href: theBakery, nameEn: 'The Bakery', nameEs: 'The Bakery' },
	{ href: villasRioMar, nameEn: 'Villas Río Mar', nameEs: 'Villas Río Mar' },
];
