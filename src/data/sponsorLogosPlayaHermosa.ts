import type { ImageMetadata } from 'astro';
import type { SponsorLogo } from './sponsorLogos';
import artesano from '../assets/sponsors/playa-hermosa/artesano.png';
import chickenBros from '../assets/sponsors/playa-hermosa/chicken_bros.webp';
import fiveMaes from '../assets/sponsors/playa-hermosa/five-maes-logo.png';
import houseOfGinger from '../assets/sponsors/playa-hermosa/house_of_ginger.png';
import laCuchara from '../assets/sponsors/playa-hermosa/la_cuchara_de_francis.png';
import losLaurel from '../assets/sponsors/playa-hermosa/Los_Laurel.png';
import makeYQue from '../assets/sponsors/playa-hermosa/make_Y_que.webp';
import marinoBallena from '../assets/sponsors/playa-hermosa/marino_ballena.png';
import mosaic from '../assets/sponsors/playa-hermosa/mosaic.webp';
import pizzaMari from '../assets/sponsors/playa-hermosa/pizza_mari.png';
import pizzaTime from '../assets/sponsors/playa-hermosa/pizza_time.webp';
import theBakery from '../assets/sponsors/playa-hermosa/the_bakery.png';
import theDome from '../assets/sponsors/playa-hermosa/the_dome.webp';
import whaleTail from '../assets/sponsors/playa-hermosa/whale-tail-brewery.webp';

function logo(src: ImageMetadata, nameEn: string, nameEs: string): SponsorLogo {
	return { src, nameEn, nameEs };
}

export const sponsorLogosPlayaHermosa: SponsorLogo[] = [
	logo(artesano, 'Artesano', 'Artesano'),
	logo(chickenBros, 'Chicken Bros', 'Chicken Bros'),
	logo(fiveMaes, 'Five Maes', 'Five Maes'),
	logo(houseOfGinger, 'House of Ginger', 'House of Ginger'),
	logo(laCuchara, 'La Cuchara de Francis', 'La Cuchara de Francis'),
	logo(losLaurel, 'Los Laureles', 'Los Laureles'),
	logo(makeYQue, 'Make y Qué', 'Make y Qué'),
	logo(marinoBallena, 'Marino Ballena', 'Marino Ballena'),
	logo(mosaic, 'Mosaic', 'Mosaic'),
	logo(pizzaMari, 'Pizza Mari', 'Pizza Mari'),
	logo(pizzaTime, 'Pizza Time', 'Pizza Time'),
	logo(theBakery, 'The Bakery', 'The Bakery'),
	logo(theDome, 'The Dome', 'The Dome'),
	logo(whaleTail, 'Whale Tail Brewery', 'Whale Tail Brewery'),
];
