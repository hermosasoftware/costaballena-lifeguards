import type { Lang } from './copy';

export interface Tier {
	id: string;
	name: string;
	price: string;
	gradient: string;
	textColor: string;
	bullets: string[];
}

const tiersEn: Tier[] = [
	{
		id: 'platinum',
		name: 'Platinum',
		price: '$25,000+',
		gradient: 'linear-gradient(145deg, #f0e8c4 0%, #c8aa50 20%, #8a6820 48%, #b89038 72%, #f0e8c4 100%)',
		textColor: '#fff',
		bullets: [
			'Includes all preceding tier benefits',
			'Private quarterly strategy access',
			'Influence on key decisions',
			'Big logo on rescue tower',
			'Featured as Platinum Sponsor (top website placement)',
			'Invitation to private dinner with leadership & Platinum donors',
			'Limited spots available',
		],
	},
	{
		id: 'gold',
		name: 'Gold',
		price: '$5,000',
		gradient: 'linear-gradient(145deg, #ffe484 0%, #f0a800 30%, #b87800 55%, #f8c840 80%, #ffe484 100%)',
		textColor: '#fff',
		bullets: [
			'All blue, red, black and silver benefits',
			'2 Gold Stickers',
			'Bi-annual hosted dinner with leadership (direct dialogue)',
			'Expense and strategic planning review access',
			'Logo on rescue tower signage',
			'Public acknowledgment in press or documentaries',
		],
	},
	{
		id: 'silver',
		name: 'Silver',
		price: '$2,500',
		gradient: 'linear-gradient(145deg, #eef4fa 0%, #a8c0d4 30%, #607888 55%, #b0c8d8 80%, #eef4fa 100%)',
		textColor: '#fff',
		bullets: [
			'All blue, red and black benefits',
			'2 Silver Stickers',
			'Personalized thank-you video from lifeguards',
			'Invitations to sponsor-only gatherings',
			'Named equipment (optional)',
		],
	},
	{
		id: 'black',
		name: 'Black',
		price: '$1,000',
		gradient: 'linear-gradient(145deg, #32363e 0%, #161a20 30%, #080c14 55%, #1e2430 80%, #32363e 100%)',
		textColor: '#fff',
		bullets: [
			'All blue and red benefits',
			'2 Black Stickers',
			'Name or logo listed as supporter on the website (optional)',
			'Invitation to annual appreciation gathering',
			'Ability to direct funds toward specific needs',
		],
	},
	{
		id: 'red',
		name: 'Red',
		price: '$500',
		gradient: 'linear-gradient(145deg, #ff7888 0%, #e02030 30%, #980818 55%, #d01828 80%, #ff7888 100%)',
		textColor: '#fff',
		bullets: [
			'All blue benefits',
			'Red Sticker',
			'Early access to events or updates',
			'Optional recognition in social media (group recognition)',
		],
	},
	{
		id: 'blue',
		name: 'Blue',
		price: '$100',
		gradient: 'linear-gradient(145deg, #72ccff 0%, #2090e0 30%, #0c54a0 55%, #1870c8 80%, #72ccff 100%)',
		textColor: '#fff',
		bullets: [
			'Blue Sticker',
			'Quarterly update',
			'Weekly lifeguard training',
			'Name listed on annual donor board or website',
		],
	},
];

const tiersEs: Tier[] = [
	{
		id: 'platinum',
		name: 'Platino',
		price: '$25,000+',
		gradient: 'linear-gradient(145deg, #f0e8c4 0%, #c8aa50 20%, #8a6820 48%, #b89038 72%, #f0e8c4 100%)',
		textColor: '#fff',
		bullets: [
			'Incluye todos los beneficios de niveles anteriores',
			'Acceso privado a estrategia trimestral',
			'Influencia en decisiones clave',
			'Logo grande en la torre de rescate',
			'Destacado como Patrocinador Platino (posición principal en el sitio)',
			'Invitación a cena privada con la dirección y donantes Platino',
			'Cupos limitados',
		],
	},
	{
		id: 'gold',
		name: 'Oro',
		price: '$5,000',
		gradient: 'linear-gradient(145deg, #ffe484 0%, #f0a800 30%, #b87800 55%, #f8c840 80%, #ffe484 100%)',
		textColor: '#fff',
		bullets: [
			'Todos los beneficios Blue, Red, Black y Silver',
			'2 Pegatinas Oro',
			'Cena semestral con la dirección (diálogo directo)',
			'Acceso a revisión de gastos y planificación estratégica',
			'Logo en la señalización de la torre de rescate',
			'Reconocimiento público en prensa o documentales',
		],
	},
	{
		id: 'silver',
		name: 'Plata',
		price: '$2,500',
		gradient: 'linear-gradient(145deg, #eef4fa 0%, #a8c0d4 30%, #607888 55%, #b0c8d8 80%, #eef4fa 100%)',
		textColor: '#fff',
		bullets: [
			'Todos los beneficios Blue, Red y Black',
			'2 Pegatinas Plata',
			'Video de agradecimiento personalizado de los guardavidas',
			'Invitaciones a reuniones exclusivas para patrocinadores',
			'Equipo con nombre (opcional)',
		],
	},
	{
		id: 'black',
		name: 'Negro',
		price: '$1,000',
		gradient: 'linear-gradient(145deg, #32363e 0%, #161a20 30%, #080c14 55%, #1e2430 80%, #32363e 100%)',
		textColor: '#fff',
		bullets: [
			'Todos los beneficios Blue y Red',
			'2 Pegatinas Negras',
			'Nombre o logo como patrocinador en el sitio web (opcional)',
			'Invitación a la reunión anual de agradecimiento',
			'Posibilidad de dirigir fondos a necesidades específicas',
		],
	},
	{
		id: 'red',
		name: 'Rojo',
		price: '$500',
		gradient: 'linear-gradient(145deg, #ff7888 0%, #e02030 30%, #980818 55%, #d01828 80%, #ff7888 100%)',
		textColor: '#fff',
		bullets: [
			'Todos los beneficios Blue',
			'Pegatina Roja',
			'Acceso anticipado a eventos o actualizaciones',
			'Reconocimiento opcional en redes sociales (reconocimiento grupal)',
		],
	},
	{
		id: 'blue',
		name: 'Azul',
		price: '$100',
		gradient: 'linear-gradient(145deg, #72ccff 0%, #2090e0 30%, #0c54a0 55%, #1870c8 80%, #72ccff 100%)',
		textColor: '#fff',
		bullets: [
			'Pegatina Azul',
			'Actualización trimestral',
			'Entrenamiento semanal de guardavidas',
			'Nombre en el panel anual de donantes o en el sitio web',
		],
	},
];

export const tiers: Record<Lang, Tier[]> = {
	en: tiersEn,
	es: tiersEs,
};
