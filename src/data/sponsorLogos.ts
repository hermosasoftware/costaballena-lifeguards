import type { ImageMetadata } from 'astro';
import brewCo from '../assets/sponsors/brew-co.webp';
import delicias from '../assets/sponsors/Delicias.webp';
import elRincon from '../assets/sponsors/El_Rincon_de_Domi.webp';
import laJunta from '../assets/sponsors/La_Junta.webp';
import cafeMono from '../assets/sponsors/limage-23-441-photo.webp';
import maviSurf from '../assets/sponsors/MaviSurf.webp';
import moromo from '../assets/sponsors/moromologo.webp';
import ricar2 from '../assets/sponsors/Ricar2_Restaurant.webp';
import rioLindo from '../assets/sponsors/RioLindo.webp';
import suRaza from '../assets/sponsors/SuRaza.webp';
import theBakery from '../assets/sponsors/The_Bakery.webp';
import villasRioMar from '../assets/sponsors/Villas_Rio_Mar.webp';

export type SponsorLogo = {
	src: ImageMetadata;
	nameEn: string;
	nameEs: string;
};

/** Stable order (alphabetical by English name) */
export const sponsorLogos: SponsorLogo[] = [
	{ src: brewCo, nameEn: 'Fuego Brew Co.', nameEs: 'Fuego Brew Co.' },
	{ src: cafeMono, nameEn: 'Café Mono Congo', nameEs: 'Café Mono Congo' },
	{ src: delicias, nameEn: 'Delicias', nameEs: 'Delicias' },
	{ src: elRincon, nameEn: 'El Rincón de Domi', nameEs: 'El Rincón de Domi' },
	{ src: laJunta, nameEn: 'La Junta', nameEs: 'La Junta' },
	{ src: maviSurf, nameEn: 'MAVI Surf Hotel Dominical', nameEs: 'MAVI Surf Hotel Dominical' },
	{ src: moromo, nameEn: 'MOROMO', nameEs: 'MOROMO' },
	{ src: ricar2, nameEn: 'Ricar2 Restaurant', nameEs: 'Ricar2 Restaurant' },
	{ src: rioLindo, nameEn: 'Río Lindo', nameEs: 'Río Lindo' },
	{ src: suRaza, nameEn: 'Su Raza Restaurante', nameEs: 'Su Raza Restaurante' },
	{ src: theBakery, nameEn: 'The Bakery', nameEs: 'The Bakery' },
	{ src: villasRioMar, nameEn: 'Villas Río Mar', nameEs: 'Villas Río Mar' },
];
