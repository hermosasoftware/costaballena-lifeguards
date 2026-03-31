/**
 * Logos: comercios que apoyaron en Playa Hermosa (import URL, sin Sharp).
 */
import artesano from '../assets/sponsors/playa-hermosa/artesano.png?url';
import chickenBros from '../assets/sponsors/playa-hermosa/chicken_bros.webp?url';
import fiveMaes from '../assets/sponsors/playa-hermosa/five-maes-logo.png?url';
import houseOfGinger from '../assets/sponsors/playa-hermosa/house_of_ginger.png?url';
import laCuchara from '../assets/sponsors/playa-hermosa/la_cuchara_de_francis.png?url';
import losLaurel from '../assets/sponsors/playa-hermosa/Los_Laurel.png?url';
import makeYQue from '../assets/sponsors/playa-hermosa/make_Y_que.webp?url';
import marinoBallena from '../assets/sponsors/playa-hermosa/marino_ballena.png?url';
import mosaic from '../assets/sponsors/playa-hermosa/mosaic.webp?url';
import pizzaMari from '../assets/sponsors/playa-hermosa/pizza_mari.png?url';
import pizzaTime from '../assets/sponsors/playa-hermosa/pizza_time.webp?url';
import theBakery from '../assets/sponsors/playa-hermosa/the_bakery.png?url';
import theDome from '../assets/sponsors/playa-hermosa/the_dome.webp?url';
import whaleTail from '../assets/sponsors/playa-hermosa/whale-tail-brewery.webp?url';

export type SponsorLogo = {
	href: string;
	nameEn: string;
	nameEs: string;
};

export const sponsorLogosPlayaHermosa: SponsorLogo[] = [
	{ href: artesano, nameEn: 'Artesano', nameEs: 'Artesano' },
	{ href: chickenBros, nameEn: 'Chicken Bros', nameEs: 'Chicken Bros' },
	{ href: fiveMaes, nameEn: 'Five Maes', nameEs: 'Five Maes' },
	{ href: houseOfGinger, nameEn: 'House of Ginger', nameEs: 'House of Ginger' },
	{ href: laCuchara, nameEn: 'La Cuchara de Francis', nameEs: 'La Cuchara de Francis' },
	{ href: losLaurel, nameEn: 'Los Laureles', nameEs: 'Los Laureles' },
	{ href: makeYQue, nameEn: 'Make y Qué', nameEs: 'Make y Qué' },
	{ href: marinoBallena, nameEn: 'Marino Ballena', nameEs: 'Marino Ballena' },
	{ href: mosaic, nameEn: 'Mosaic', nameEs: 'Mosaic' },
	{ href: pizzaMari, nameEn: 'Pizza Mari', nameEs: 'Pizza Mari' },
	{ href: pizzaTime, nameEn: 'Pizza Time', nameEs: 'Pizza Time' },
	{ href: theBakery, nameEn: 'The Bakery', nameEs: 'The Bakery' },
	{ href: theDome, nameEn: 'The Dome', nameEs: 'The Dome' },
	{ href: whaleTail, nameEn: 'Whale Tail Brewery', nameEs: 'Whale Tail Brewery' },
];
