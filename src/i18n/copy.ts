export type Lang = 'en' | 'es';

export const copy: Record<
	Lang,
	{
		siteName: string;
		nav: { home: string; donate: string; community: string; contact: string };
		common: {
			language: string;
			openMenu: string;
			closeMenu: string;
			navAriaLabel: string;
			backToHome: string;
		};
		home: {
			heroTitle: string;
			heroSubtitle: string;
			volunteer: string;
			sponsor: string;
			contact: string;
			heroStatPreventions: string;
			heroStatRescues: string;
			heroStatOnDuty: string;
			realityTitle: string;
			realityText: string;
			realityHeading: string;
			realitySub: string;
			realityAccent: string;
			realityCta: string;
			supportTitle: string;
			supportSubtitle: string;
			supportBullets: string[];
			supportCards: Array<{ title: string; desc: string }>;
			transparencyKicker: string;
			whereIntro: string;
			whereTrustText: string;
			whereBadgeTitle: string;
			whereBadgeSub: string;
			whereBtn: string;
			programsHeading: string;
			programsHeaderSub: string;
			programs: Array<{
				name: string;
				desc: string;
				ariaLabel: string;
				altText: string;
			}>;
			progCta: string;
			progCtaNote: string;
			impactKicker: string;
			impactPeriod: string;
			statPreventions: string;
			prevNote: string;
			statRescues: string;
			rescueBreakdown: Array<{ beach: string; count: string }>;
			statMedical: string;
			medicalBreakdown: Array<{ beach: string; count: string }>;
			statOnDuty: string;
			onDutyNote: string;
			statOffDuty: string;
			offDutyNote: string;
			withoutOnDuty: string;
			offDutyBreakdown: Array<{ beach: string; count: string }>;
			reopenKicker: string;
			domFunded: string;
			cardInProgress: string;
			raisedOf: string;
			monthsShort: string;
			reopenGoalNote: string;
			ctaSub: string;
			impactTitle: string;
			impactSubtitle: string;
			reopenTitle: string;
			reopenBody: string;
			reopenCta: string;
			tiersTitle: string;
			tiersSubtitle: string;
			membershipTitle: string;
			membershipBody: string;
			whereTitle: string;
			whereBullets: string[];
			programsTitle: string;
			programsSubtitle: string;
			communityTitle: string;
			communityBody: string;
			bottomCtaTitle: string;
			bottomCtaButton: string;
			bottomCtaSub: string;
		};
		form: {
			pageTitle: string;
			pageSubtitle: string;
			labelName: string;
			labelPhone: string;
			labelEmail: string;
			labelDonationType: string;
			optOneTime: string;
			optMonthly: string;
			optAnnual: string;
			labelFocus: string;
			optDominical: string;
			optHermosa: string;
			optBoth: string;
			labelRecognition: string;
			optPublic: string;
			optAnonymous: string;
			labelComms: string;
			optImpact: string;
			optVolunteer: string;
			optMajor: string;
			optNoComms: string;
			labelNotes: string;
			notesPlaceholder: string;
			labelTerms: string;
			termsYes: string;
			termsDoc: string;
			submitBtn: string;
			submitNote: string;
			backBtn: string;
		};
		donate: {
			pageTitle: string;
			introTitle: string;
			introLead: string;
			introBody: string;
			introSupportersTitle: string;
			introFundedList: string[];
			introClosing: string;
			introCtaPrimary: string;
			introCtaSecondary: string;
			introMethodHint: string;
			introImageCaption: string;
			introImageAlt: string;
			tiersTitle: string;
			tiersSubtitle: string;
			annual: string;
			seeMore: string;
			membershipTitle: string;
			membershipLine1: string;
			membershipLine2: string;
			membershipLine3: string;
			membershipTaxNote: string;
			membershipAngelNote: string;
			membershipEvery: string;
			membershipKicker: string;
			membershipAnnualTitle: string;
			membershipMonthlyTitle: string;
			membershipTaxCardTitle: string;
			membershipAngelCardTitle: string;
			howTitle: string;
			howSubtitle: string;
			howKicker: string;
			methodUsTitle: string;
			methodUsBody: string;
			methodUsLink: string;
			methodUsBtn: string;
			methodPaypalTitle: string;
			methodPaypalBody: string;
			methodPaypalLink: string;
			methodPaypalBtn: string;
			methodBankTitle: string;
			methodBankAccountName: string;
			methodBankCedula: string;
			methodBankColones: string;
			methodBankColonesNum: string;
			methodBankColonesIban: string;
			methodBankDollars: string;
			methodBankDollarsNum: string;
			methodBankDollarsIban: string;
			importantTitle: string;
			importantIntro: string;
			importantFormNote: string;
			importantFormBtn: string;
			importantFormLink: string;
			importantStep1: string;
			importantStep2: string;
			importantStep2Email: string;
			importantStep2Whatsapp: string;
			importantContactEmailLabel: string;
			importantContactWhatsappLabel: string;
			importantStep3: string;
			importantStep4: string;
		};
		pages: {
			contactTitle: string;
			contactBody: string;
			contactKicker: string;
			contactFormNameLabel: string;
			contactFormEmailLabel: string;
			contactFormMessageLabel: string;
			contactFormSubmit: string;
			contactFormSending: string;
			contactFormSuccess: string;
			contactFormError: string;
			contactFormInvalidEmail: string;
			contactFormFillAll: string;
			contactAsideTitle: string;
			contactAsideSubtitle: string;
			contactImageAlt: string;
			contactImageCaption: string;
			communityTitle: string;
			communityBody: string;
			communityKicker: string;
			communityHeroTitle: string;
			/** Main “Fueling the lifeguards” copy — four paragraphs */
			communityFuelParagraphs: [string, string, string, string];
			communityMarqueeLabel: string;
			communityGridTitle: string;
			communityHermosaTitle: string;
			communityHermosaParagraphs: [string, string];
			communityHermosaMarqueeLabel: string;
			communityHermosaGridTitle: string;
			communityHermosaMarqueeAria: string;
			communityCtaTitle: string;
			communityCtaBody: string;
			communityCtaBtn: string;
			communityMarqueeAria: string;
		};
		footer: {
			tagline: string;
			navTitle: string;
			beachesTitle: string;
			beachActive: string;
			beachCampaign: string;
			builtWith: string;
			whatsappLabel: string;
			whatsapp: string;
			whatsappHref: string;
			contactTitle: string;
			contactBody: string;
			emailLabel: string;
			phoneLabel: string;
			email: string;
			phone: string;
			facebookHref: string;
			instagramHref: string;
			copyright: string;
			poweredBy: string;
			hermosaSoftwareHref: string;
			hermosaSoftwareLogoAlt: string;
		};
	}
> = {
	en: {
		siteName: 'Guardavidas Costa Ballena',
		nav: { home: 'Home', donate: 'Donate', community: 'Community support', contact: 'Contact' },
		common: {
			language: 'Language',
			openMenu: 'Open menu',
			closeMenu: 'Close menu',
			navAriaLabel: 'Primary navigation',
			backToHome: 'Back to Home',
		},
		home: {
			heroTitle: 'Every day, lives are at risk on Costa Ballena beaches.',
			heroSubtitle:
				"Our lifeguards prevent drownings, but without funding, they can't stay on the beach.",
			volunteer: 'Volunteer',
			sponsor: 'Become a Sponsor',
			contact: 'Contact',
			heroStatPreventions: 'Preventions',
			heroStatRescues: 'Rescues',
			heroStatOnDuty: 'On-duty drownings',
			realityTitle: 'The Reality',
			realityText:
				'Costa Ballena has some of the most powerful waves in Costa Rica. Every year, locals and tourists face life-threatening situations in the ocean. Without lifeguards, small mistakes can become fatal in seconds.',
			realityHeading: 'Costa Ballena has some of the most powerful waves in Costa Rica.',
			realitySub: 'Without lifeguards, a small mistake can become ',
			realityAccent: 'fatal in seconds.',
			realityCta: 'Support the lifeguards',
			supportTitle: 'What your support makes possible',
			supportSubtitle: 'Your contribution keeps lifeguards on the beach and protects thousands every season.',
			supportBullets: [
				'Daily lifeguard presence at Playa Hermosa and Dominical',
				'Emergency rescues and first response',
				'Prevention and beach safety education',
				'Community training (CPR, swimming, rescue skills)',
			],
			supportCards: [
				{
					title: 'Daily Protection',
					desc: 'Lifeguard presence at Playa Hermosa and Dominical, every day of the week.',
				},
				{
					title: 'Emergency Response',
					desc: 'Immediate rescues and first aid for swimmers in distress.',
				},
				{
					title: 'Community Training',
					desc: 'CPR, swimming lessons, and rescue skills for locals and visitors.',
				},
				{
					title: 'Prevention Education',
					desc: 'Beach safety education to prevent accidents before they happen.',
				},
			],
			transparencyKicker: 'Transparency',
			whereIntro: 'Your donations directly support:',
			whereTrustText: 'Committed to transparency and community accountability.',
			whereBadgeTitle: '100% traceable',
			whereBadgeSub: 'Every dollar documented',
			whereBtn: 'Become a Supporter',
			programsHeading: 'Our Programs',
			programsHeaderSub: 'Three pillars that keep the community safer — all year round.',
			programs: [
				{
					name: 'International Volunteer Program',
					desc: 'Experienced lifeguards from around the world join during peak season to strengthen beach coverage across Costa Ballena.',
					ariaLabel: 'International Volunteer Program',
					altText: 'International Volunteer Program',
				},
				{
					name: 'Junior Lifeguard Program',
					desc: 'We train local youth with rescue, swimming, and ocean safety skills — building the next generation of lifeguards.',
					ariaLabel: 'Junior Lifeguard Program',
					altText: 'Junior Lifeguard Program',
				},
				{
					name: 'Community Outreach',
					desc: 'Workshops, talks, and activities that engage residents and local businesses in ocean safety culture.',
					ariaLabel: 'Community Outreach',
					altText: 'Community Outreach',
				},
			],
			progCta: 'Get involved',
			progCtaNote: 'Open to local and international volunteers',
			impactKicker: 'Official data',
			impactPeriod: 'Logbook reports: April – December 2025',
			statPreventions: 'Preventions',
			prevNote: 'More preventions than rescues: proof that lifeguards are doing exactly their job.',
			statRescues: 'Water Rescues',
			rescueBreakdown: [
				{ beach: 'Hermosa', count: '11' },
				{ beach: 'Dominical', count: '6' },
			],
			statMedical: 'Medical Assists',
			medicalBreakdown: [
				{ beach: 'Hermosa', count: '12' },
				{ beach: 'Dominical', count: '3' },
			],
			statOnDuty: 'On-duty Drownings',
			onDutyNote: 'When we are present, no one dies.',
			statOffDuty: 'Off-duty drownings',
			offDutyNote: 'These tragedies happened outside lifeguard duty hours or in unprotected areas. They are the clearest argument for why this mission matters.',
			withoutOnDuty: 'Without lifeguards on duty',
			offDutyBreakdown: [
				{ beach: 'Playa Hermosa', count: '3' },
				{ beach: 'Playa Dominical', count: '2' },
				{ beach: 'Rocas de Amancio', count: '3' },
			],
			reopenKicker: 'Active campaign',
			domFunded: '— fully funded and protected',
			cardInProgress: 'In progress',
			raisedOf: 'raised of $100,000 goal',
			monthsShort: 'mo.',
			reopenGoalNote: 'Goal: 6 months of stable funding to guarantee continuous beach coverage.',
			ctaSub: 'Your support keeps lifeguards on the beach and helps prevent tragedies.',
			impactTitle: 'Our Impact',
			impactSubtitle: 'Behind every number is a life protected.',
			reopenTitle: 'Help us reopen Playa Hermosa',
			reopenBody:
				'Playa Dominical is currently fully funded — and protected. Our next goal is to reopen Playa Hermosa and bring lifeguards back to the beach. To do this responsibly, we aim to secure at least 6 months of funding in advance.',
			reopenCta: 'Become an Annual Supporter',
			tiersTitle: 'Choose how you want to help',
			tiersSubtitle: 'We have a vision. Help us bring it to life.',
			membershipTitle: 'Membership Terms',
			membershipBody:
				'Annual members receive full benefits upon joining. Monthly members receive benefits progressively, with full tier benefits unlocked after 12 months of consistent support.',
			whereTitle: 'Where your money goes',
			whereBullets: [
				'Lifeguard salaries',
				'Insurance (CCSS, Riesgos del Trabajo)',
				'Equipment and rescue gear',
				'Beach operations and logistics',
			],
			programsTitle: 'Surf Rescue Society',
			programsSubtitle: 'A collaboration with Cooperative Arts Movement and Play Foundation',
			communityTitle: 'Community Support',
			communityBody:
				'Thanks to local donors, volunteers, and restaurants donating meals, we keep our lifeguards strong and ready to save lives.',
			bottomCtaTitle: 'Be part of saving lives',
			bottomCtaButton: 'Become an annual supporter',
			bottomCtaSub: 'Your support keeps lifeguards on the beach and helps prevent tragedies.',
		},
		form: {
			pageTitle: 'Support the Lifeguard Program',
			pageSubtitle:
				'Thank you for helping keep our beaches safe. Please fill out the form below and we will follow up with donation details if needed.',
			labelName: 'Full Name',
			labelPhone: 'Phone Number',
			labelEmail: 'Your email',
			labelDonationType: 'Donation Type',
			optOneTime: 'One-time',
			optMonthly: 'Monthly',
			optAnnual: 'Annual',
			labelFocus: 'Donation Focus',
			optDominical: 'Dominical',
			optHermosa: 'Playa Hermosa',
			optBoth: 'General Operations (both beaches)',
			labelRecognition: 'Recognition Preferences',
			optPublic: 'I would like public recognition (name or business)',
			optAnonymous: 'I prefer to remain an Anonymous / Angel Donor',
			labelComms: 'Communication Preferences',
			optImpact: 'I would like updates on the impact of my donation',
			optVolunteer: 'I would like to hear about volunteering opportunities',
			optMajor: 'I would like to be contacted about major initiatives or campaigns',
			optNoComms: 'I would prefer not to receive any communications',
			labelNotes: 'Additional Notes or Intentions',
			notesPlaceholder:
				"Anything you'd like us to know, dedicate your donation, or specific requests",
			labelTerms:
				'Please confirm that you have read, understood, and agree to our Terms and Transparency document listed below. (2 pages)',
			termsYes: 'Yes',
			termsDoc: 'Terms & Transparency – Lifeguard Support Program',
			submitBtn: 'Submit',
			submitNote:
				'We will review your form and follow up with payment details and next steps.',
			backBtn: 'Back to Donate',
		},
		donate: {
			pageTitle: 'Donate',
			introTitle: 'Guardavidas Costa Ballena',
			introLead:
				'Every gift keeps lifeguards on the sand — trained, equipped, and ready. Prevention and rescue only happen when someone is there.',
			introBody:
				'Unlike many countries, lifeguard programs in Costa Rica receive limited public funding. The Guardavidas Costa Ballena program operates thanks to the generosity of:',
			introSupportersTitle: 'Supporters who make this program possible',
			introFundedList: [
				'Community Support',
				'Local businesses',
				'Individual donors',
				'Community supporters',
				'Volunteers',
			],
			introClosing:
				'Together, this network of support allows our lifeguards to remain present on the beaches where they are needed most.',
			introCtaPrimary: 'Donate now',
			introCtaSecondary: 'Membership tiers',
			introMethodHint: 'U.S. tax-deductible, PayPal, or Costa Rica bank transfer — choose below.',
			introImageCaption: 'On duty — Costa Ballena',
			introImageAlt: 'Lifeguard on the observation tower with rescue buoy, Costa Ballena',
			tiersTitle: 'Choose how you want to help',
			tiersSubtitle: 'We have a vision. Help us bring it to life.',
			annual: 'annual',
			seeMore: 'See more',
			membershipTitle: 'Membership Terms',
			membershipLine1:
				'Annual members receive full benefits upon joining and benefit from a discounted rate.',
			membershipLine2:
				'Monthly members receive benefits progressively, with full tier benefits unlocked after 12 months of consistent support.',
			membershipLine3:
				'This structure allows us to honor long-term commitment while keeping participation open to all.',
			membershipTaxNote: 'All donations have the option to be tax deductible in the US.',
			membershipAngelNote:
				'If you prefer no public recognition, you can choose to be an Angel Donor.',
			membershipEvery:
				'Every contribution — monthly or annual — plays a vital role in keeping our beaches safe.',
			membershipKicker: 'Trust & transparency',
			membershipAnnualTitle: 'Annual members',
			membershipMonthlyTitle: 'Monthly members',
			membershipTaxCardTitle: 'Tax-deductible giving',
			membershipAngelCardTitle: 'Angel donor option',
			howTitle: 'How to Donate',
			howSubtitle: 'Choose the method that works best for you.',
			howKicker: 'Ways to give',
			methodUsTitle: 'U.S. Tax-Deductible Donation',
			methodUsBody:
				'To make a one-time or annual tax-deductible donation (to the extent allowable under U.S. law), please donate through our partner, Amigos de Costa Rica, a U.S.-based 501(c)(3) nonprofit.',
			methodUsLink: 'https://www.classy.org/give/258087/',
			methodUsBtn: 'Donate via Classy',
			methodPaypalTitle: 'PayPal',
			methodPaypalBody: 'If you prefer to donate via PayPal, use the link below.',
			methodPaypalLink: 'https://www.paypal.com/donate/?hosted_button_id=ACBS9J3CKSHFS',
			methodPaypalBtn: 'Donate via PayPal',
			methodBankTitle: 'Costa Rica Bank Transfer (Banco Nacional)',
			methodBankAccountName: 'Asoc. Guardavidas de la Zona Sur de Costa Rica',
			methodBankCedula: 'Cédula Jurídica: 3-002-738759',
			methodBankColones: 'Account in colones',
			methodBankColonesNum: '200-01-195-003885-0',
			methodBankColonesIban: 'IBAN: CR39015119520010038851',
			methodBankDollars: 'Account in dollars',
			methodBankDollarsNum: '200-02-195-002023-9',
			methodBankDollarsIban: 'IBAN: CR45015119520020020237',
			importantTitle: 'Important',
			importantIntro:
				'To help us identify your contribution and send your donor benefits:',
			importantFormNote:
				"Every supporter is different. This form helps us understand your intentions and how you'd like to be part of this mission.",
			importantFormBtn: 'Fill out Form',
			importantFormLink: '/donate/form',
			importantStep1: 'Include your name in the payment description.',
			importantStep2: 'Send your payment confirmation (screenshot) to:',
			importantStep2Email: 'lifeguardcostaballena@gmail.com',
			importantStep2Whatsapp: '+506 8371 7882',
			importantContactEmailLabel: 'Email',
			importantContactWhatsappLabel: 'WhatsApp',
			importantStep3:
				'This allows us to contact you and coordinate your stickers and donor benefits.',
			importantStep4:
				'If you would like to direct your funds to either Playa Dominical or Playa Hermosa, please specify in your message along with your payment confirmation.',
		},
		pages: {
			contactTitle: 'Contact',
			contactBody:
				'Send a message for volunteering, sponsorship, media, or general questions. We read every note and respond as soon as we can.',
			contactKicker: 'Get in touch',
			contactFormNameLabel: 'Name',
			contactFormEmailLabel: 'Email',
			contactFormMessageLabel: 'Message',
			contactFormSubmit: 'Send message',
			contactFormSending: 'Sending…',
			contactFormSuccess: 'Thank you — your message was sent. We’ll get back to you shortly.',
			contactFormError: 'Something went wrong. Please try again or email us directly.',
			contactFormInvalidEmail: 'Please enter a valid email address.',
			contactFormFillAll: 'Please fill in all fields.',
			contactAsideTitle: 'Prefer another channel?',
			contactAsideSubtitle: 'You can also reach us directly:',
			contactImageAlt: 'Lifeguard tower on duty — Costa Ballena',
			contactImageCaption: 'On duty — Costa Ballena',
			communityTitle: 'Community support',
			communityBody:
				'Local restaurants and businesses donate meals and support so our lifeguards stay fueled and on duty. Thank you to every partner featured here.',
			communityKicker: 'Partners & gratitude',
			communityHeroTitle: 'Fueling the lifeguards',
			communityFuelParagraphs: [
				'Every day, local restaurants and businesses help support our lifeguards by donating meals for the team while they are on duty.',
				'This generosity keeps our lifeguards energized and focused on their mission: protecting lives.',
				'We are deeply grateful to the many businesses that contribute to the program in this way.',
				'If your business would like to sponsor a meal for the lifeguards, please contact us to learn how you can participate.',
			],
			communityMarqueeLabel: 'Spotlight partners',
			communityGridTitle: 'Restaurant & business partners',
			communityHermosaTitle: 'Playa Hermosa',
			communityHermosaParagraphs: [
				'We want to extend a heartfelt thank you to all the amazing businesses that supported our lifeguards at Playa Hermosa by providing meals over the past months. Your generosity nourished not only our team, but also the spirit of this program and community.',
				'We truly hope to reopen soon and continue building this together.',
			],
			communityHermosaMarqueeLabel: 'Playa Hermosa partners',
			communityHermosaGridTitle: 'Businesses at Playa Hermosa',
			communityHermosaMarqueeAria: 'Scrolling row of Playa Hermosa partner logos',
			communityCtaTitle: 'Want your brand on this wall?',
			communityCtaBody:
				'Become a sponsor or donor and join a visible circle of businesses that back beach safety. We’ll help you find the right tier and benefits.',
			communityCtaBtn: 'Explore sponsorship',
			communityMarqueeAria: 'Scrolling row of partner logos',
		},
		footer: {
			tagline: 'Protecting lives on the beaches of Costa Ballena, Costa Rica.',
			navTitle: 'Navigation',
			beachesTitle: 'Beaches we protect',
			beachActive: 'Active & protected',
			beachCampaign: 'Campaign in progress',
			builtWith: 'Built with purpose.',
			whatsappLabel: 'WHATSAPP',
			whatsapp: '+506 8371 7882',
			whatsappHref: 'https://wa.me/50683717882',
			contactTitle: 'Contact',
			contactBody: 'Reach out to support or volunteer today',
			emailLabel: 'EMAIL',
			phoneLabel: 'PHONE',
			email: 'lifeguardscostaballena@gmail.com',
			phone: '+506 8371 7882',
			facebookHref: 'https://www.facebook.com/GuardavidasCostaBallena',
			instagramHref: 'https://www.instagram.com/guardavidascostaballena',
			copyright: '© 2026. All rights reserved.',
			poweredBy: 'Powered by',
			hermosaSoftwareHref: 'https://www.hermosasoftware.io/',
			hermosaSoftwareLogoAlt: 'Hermosa Software',
		},
	},
	es: {
		siteName: 'Guardavidas Costa Ballena',
		nav: { home: 'Inicio', donate: 'Donar', community: 'Apoyo comunitario', contact: 'Contacto' },
		common: {
			language: 'Idioma',
			openMenu: 'Abrir menú',
			closeMenu: 'Cerrar menú',
			navAriaLabel: 'Navegación principal',
			backToHome: 'Volver al inicio',
		},
		home: {
			heroTitle: 'Cada día, la vida está en riesgo en las playas de Costa Ballena.',
			heroSubtitle:
				'Nuestros guardavidas evitan ahogamientos, pero sin financiamiento no pueden quedarse en la playa.',
			volunteer: 'Voluntariado',
			sponsor: 'Hazte patrocinador',
			contact: 'Contacto',
			heroStatPreventions: 'Prevenciones',
			heroStatRescues: 'Rescates',
			heroStatOnDuty: 'Ahogamientos en servicio',
			realityTitle: 'La Realidad',
			realityText:
				'Costa Ballena tiene algunas de las olas más poderosas de Costa Rica. Cada año, locales y turistas enfrentan situaciones que amenazan la vida en el océano. Sin guardavidas, pequeños errores pueden volverse fatales en segundos.',
			realityHeading: 'Costa Ballena tiene algunas de las olas más poderosas de Costa Rica.',
			realitySub: 'Sin guardavidas, un pequeño error puede volverse ',
			realityAccent: 'fatal en segundos.',
			realityCta: 'Apoya a los guardavidas',
			supportTitle: 'Lo que tu apoyo hace posible',
			supportSubtitle: 'Tu aporte directo mantiene guardavidas en la playa y protege a miles de personas.',
			supportBullets: [
				'Presencia diaria de guardavidas en Playa Hermosa y Dominical',
				'Rescates de emergencia y primera respuesta',
				'Prevención y educación sobre seguridad en la playa',
				'Capacitación comunitaria (RCP, natación, habilidades de rescate)',
			],
			supportCards: [
				{
					title: 'Protección diaria',
					desc: 'Guardavidas en Playa Hermosa y Dominical, todos los días de la semana.',
				},
				{
					title: 'Respuesta de emergencia',
					desc: 'Rescates inmediatos y primeros auxilios para nadadores en dificultad.',
				},
				{
					title: 'Capacitación comunitaria',
					desc: 'RCP, clases de natación y habilidades de rescate para locales y turistas.',
				},
				{
					title: 'Educación preventiva',
					desc: 'Educación sobre seguridad en playa para prevenir accidentes antes de que ocurran.',
				},
			],
			transparencyKicker: 'Transparencia',
			whereIntro: 'Tus donaciones apoyan directamente:',
			whereTrustText: 'Comprometidos con la transparencia y la rendición de cuentas comunitaria.',
			whereBadgeTitle: '100% trazable',
			whereBadgeSub: 'Cada colón documentado',
			whereBtn: 'Hazte patrocinador',
			programsHeading: 'Nuestros programas',
			programsHeaderSub: 'Tres pilares que mantienen a la comunidad más segura — durante todo el año.',
			programs: [
				{
					name: 'Programa Internacional',
					desc: 'Guardavidas experimentados de todo el mundo se unen durante la temporada alta para fortalecer la presencia en las playas de Costa Ballena.',
					ariaLabel: 'Programa internacional',
					altText: 'Programa Internacional de Voluntarios',
				},
				{
					name: 'Programa Junior',
					desc: 'Formamos a jóvenes locales con habilidades de rescate, natación y seguridad en el mar — construyendo la próxima generación de guardavidas.',
					ariaLabel: 'Programa junior',
					altText: 'Programa Junior de Guardavidas',
				},
				{
					name: 'Alcance Comunitario',
					desc: 'Talleres, charlas y actividades para involucrar a residentes y negocios locales en la cultura de seguridad marítima.',
					ariaLabel: 'Alcance comunitario',
					altText: 'Alcance Comunitario',
				},
			],
			progCta: 'Únete como voluntario',
			progCtaNote: 'Abierto a voluntarios locales e internacionales',
			impactKicker: 'Datos oficiales',
			impactPeriod: 'Reportes de bitácora: Abril – Diciembre 2025',
			statPreventions: 'Prevenciones',
			prevNote: 'Más prevenciones que rescates: la señal de que los guardavidas están haciendo exactamente su trabajo.',
			statRescues: 'Rescates en agua',
			rescueBreakdown: [
				{ beach: 'Hermosa', count: '11' },
				{ beach: 'Dominical', count: '6' },
			],
			statMedical: 'Asistencias médicas',
			medicalBreakdown: [
				{ beach: 'Hermosa', count: '12' },
				{ beach: 'Dominical', count: '3' },
			],
			statOnDuty: 'Ahogamientos en servicio',
			onDutyNote: 'Cuando estamos presentes, nadie muere.',
			statOffDuty: 'Ahogamientos fuera de servicio',
			offDutyNote: 'Estas tragedias ocurrieron fuera del horario de los guardavidas o en zonas sin cobertura. Son el argumento más claro de por qué esta misión importa.',
			withoutOnDuty: 'Sin guardavidas de servicio',
			offDutyBreakdown: [
				{ beach: 'Playa Hermosa', count: '3' },
				{ beach: 'Playa Dominical', count: '2' },
				{ beach: 'Rocas de Amancio', count: '3' },
			],
			reopenKicker: 'Campaña activa',
			domFunded: '— completamente financiada y protegida',
			cardInProgress: 'En campaña',
			raisedOf: 'recaudados de $100,000',
			monthsShort: 'meses',
			reopenGoalNote: 'Meta: 6 meses de financiamiento estable para garantizar presencia continua en la playa.',
			ctaSub: 'Tu apoyo mantiene a los guardavidas en la playa y ayuda a prevenir tragedias.',
			impactTitle: 'Nuestro Impacto',
			impactSubtitle: 'Detrás de cada número hay una vida protegida.',
			reopenTitle: 'Ayúdanos a reabrir Playa Hermosa',
			reopenBody:
				'Playa Dominical está actualmente completamente financiada y protegida. Nuestro próximo objetivo es reabrir Playa Hermosa y volver a llevar guardavidas a la playa. Para hacerlo de forma responsable, buscamos asegurar al menos 6 meses de financiamiento por adelantado.',
			reopenCta: 'Hazte patrocinador anual',
			tiersTitle: 'Elige cómo quieres ayudar',
			tiersSubtitle: 'Tenemos una visión. Ayúdanos a hacerla realidad.',
			membershipTitle: 'Términos de membresía',
			membershipBody:
				'Los miembros anuales reciben beneficios completos al unirse. Los miembros mensuales reciben beneficios de forma progresiva, con beneficios completos por nivel desbloqueados después de 12 meses de apoyo constante.',
			whereTitle: 'En qué se usa tu aporte',
			whereBullets: [
				'Salarios de los guardavidas',
				'Seguro (CCSS, Riesgos del Trabajo)',
				'Equipo y material de rescate',
				'Operación en playa y logística',
			],
			programsTitle: 'Surf Rescue Society',
			programsSubtitle: 'Una colaboración con Cooperative Arts Movement y Play Foundation',
			communityTitle: 'Apoyo comunitario',
			communityBody:
				'Gracias a donantes locales, voluntarios y restaurantes que donan comidas, mantenemos a nuestros guardavidas fuertes y listos para salvar vidas.',
			bottomCtaTitle: 'Sé parte de salvar vidas',
			bottomCtaButton: 'Hazte patrocinador anual',
			bottomCtaSub: 'Tu apoyo mantiene a los guardavidas en la playa y ayuda a prevenir tragedias.',
		},
		form: {
			pageTitle: 'Apoya el Programa de Guardavidas',
			pageSubtitle:
				'Gracias por ayudar a mantener nuestras playas seguras. Completa el formulario a continuación y te contactaremos con los detalles de donación si es necesario.',
			labelName: 'Nombre completo',
			labelPhone: 'Número de teléfono',
			labelEmail: 'Tu correo electrónico',
			labelDonationType: 'Tipo de donación',
			optOneTime: 'Única vez',
			optMonthly: 'Mensual',
			optAnnual: 'Anual',
			labelFocus: 'Destino del aporte',
			optDominical: 'Dominical',
			optHermosa: 'Playa Hermosa',
			optBoth: 'Operaciones generales (ambas playas)',
			labelRecognition: 'Preferencias de reconocimiento',
			optPublic: 'Me gustaría reconocimiento público (nombre o empresa)',
			optAnonymous: 'Prefiero permanecer como Donante Anónimo / Ángel',
			labelComms: 'Preferencias de comunicación',
			optImpact: 'Me gustaría recibir actualizaciones sobre el impacto de mi donación',
			optVolunteer: 'Me gustaría saber sobre oportunidades de voluntariado',
			optMajor: 'Me gustaría ser contactado sobre iniciativas o campañas importantes',
			optNoComms: 'Preferiría no recibir ninguna comunicación',
			labelNotes: 'Notas adicionales o intenciones',
			notesPlaceholder:
				'Algo que quieras que sepamos, dedicar tu donación o solicitudes específicas',
			labelTerms:
				'Por favor confirma que has leído, comprendido y aceptas nuestro documento de Términos y Transparencia que se muestra a continuación. (2 páginas)',
			termsYes: 'Sí',
			termsDoc: 'Términos y Transparencia – Programa de Apoyo a Guardavidas',
			submitBtn: 'Enviar',
			submitNote:
				'Revisaremos tu formulario y te contactaremos con los detalles de pago y los próximos pasos.',
			backBtn: 'Volver a Donar',
		},
		donate: {
			pageTitle: 'Donar',
			introTitle: 'Guardavidas Costa Ballena',
			introLead:
				'Cada aporte mantiene a los guardavidas en la arena — capacitados, equipados y listos. La prevención y el rescate solo existen cuando alguien está ahí.',
			introBody:
				'A diferencia de muchos países, los programas de guardavidas en Costa Rica reciben financiamiento público limitado. El programa Guardavidas Costa Ballena opera gracias a la generosidad de:',
			introSupportersTitle: 'Quienes hacen posible este programa',
			introFundedList: [
				'Apoyo comunitario',
				'Negocios locales',
				'Donantes individuales',
				'Colaboradores comunitarios',
				'Voluntarios',
			],
			introClosing:
				'Juntos, esta red de apoyo permite que nuestros guardavidas permanezcan presentes en las playas donde más se les necesita.',
			introCtaPrimary: 'Donar ahora',
			introCtaSecondary: 'Niveles de membresía',
			introMethodHint: 'Deducible en EE.UU., PayPal o transferencia en Costa Rica — elige abajo.',
			introImageCaption: 'En servicio — Costa Ballena',
			introImageAlt: 'Guardavidas en la torre de observación con flotador de rescate, Costa Ballena',
			tiersTitle: 'Elige cómo quieres ayudar',
			tiersSubtitle: 'Tenemos una visión. Ayúdanos a hacerla realidad.',
			annual: 'anual',
			seeMore: 'Ver más',
			membershipTitle: 'Términos de membresía',
			membershipLine1:
				'Los miembros anuales reciben beneficios completos al unirse y se benefician de una tarifa con descuento.',
			membershipLine2:
				'Los miembros mensuales reciben beneficios de forma progresiva, con beneficios completos desbloqueados después de 12 meses de apoyo constante.',
			membershipLine3:
				'Esta estructura nos permite honrar el compromiso a largo plazo mientras mantenemos la participación abierta a todos.',
			membershipTaxNote: 'Todas las donaciones pueden ser deducibles de impuestos en EE.UU.',
			membershipAngelNote:
				'Si prefieres no tener reconocimiento público, puedes elegir ser Donante Ángel.',
			membershipEvery:
				'Cada contribución — mensual o anual — juega un papel vital en mantener nuestras playas seguras.',
			membershipKicker: 'Confianza y transparencia',
			membershipAnnualTitle: 'Membresía anual',
			membershipMonthlyTitle: 'Membresía mensual',
			membershipTaxCardTitle: 'Deducción fiscal (EE.UU.)',
			membershipAngelCardTitle: 'Opción donante ángel',
			howTitle: 'Cómo Donar',
			howSubtitle: 'Elige el método que mejor te funcione.',
			howKicker: 'Formas de donar',
			methodUsTitle: 'Donación deducible en EE.UU.',
			methodUsBody:
				'Para hacer una donación única o anual deducible de impuestos (en la medida en que lo permita la ley de EE.UU.), dona a través de nuestro socio, Amigos de Costa Rica, una organización sin fines de lucro 501(c)(3) con sede en EE.UU.',
			methodUsLink: 'https://www.classy.org/give/258087/',
			methodUsBtn: 'Donar por Classy',
			methodPaypalTitle: 'PayPal',
			methodPaypalBody: 'Si prefieres donar por PayPal, usa el siguiente enlace.',
			methodPaypalLink: 'https://www.paypal.com/donate/?hosted_button_id=ACBS9J3CKSHFS',
			methodPaypalBtn: 'Donar por PayPal',
			methodBankTitle: 'Transferencia bancaria en Costa Rica (Banco Nacional)',
			methodBankAccountName: 'Asoc. Guardavidas de la Zona Sur de Costa Rica',
			methodBankCedula: 'Cédula Jurídica: 3-002-738759',
			methodBankColones: 'Cuenta en colones',
			methodBankColonesNum: '200-01-195-003885-0',
			methodBankColonesIban: 'IBAN: CR39015119520010038851',
			methodBankDollars: 'Cuenta en dólares',
			methodBankDollarsNum: '200-02-195-002023-9',
			methodBankDollarsIban: 'IBAN: CR45015119520020020237',
			importantTitle: 'Importante',
			importantIntro:
				'Para que podamos identificar tu aporte y enviarte los beneficios de donante:',
			importantFormNote:
				'Cada patrocinador es diferente. Este formulario nos ayuda a entender tus intenciones y cómo te gustaría ser parte de esta misión.',
			importantFormBtn: 'Completar formulario',
			importantFormLink: '/es/donate/form',
			importantStep1: 'Incluye tu nombre en la descripción del pago.',
			importantStep2: 'Envía tu confirmación de pago (captura de pantalla) a:',
			importantStep2Email: 'lifeguardcostaballena@gmail.com',
			importantStep2Whatsapp: '+506 8371 7882',
			importantContactEmailLabel: 'Correo',
			importantContactWhatsappLabel: 'WhatsApp',
			importantStep3:
				'Esto nos permite contactarte y coordinar tus pegatinas y beneficios de donante.',
			importantStep4:
				'Si deseas dirigir tus fondos a Playa Dominical o Playa Hermosa, indícalo en tu mensaje junto con la confirmación de pago.',
		},
		pages: {
			contactTitle: 'Contacto',
			contactBody:
				'Envíanos un mensaje por voluntariado, patrocinio, prensa o consultas generales. Leemos cada nota y respondemos lo antes posible.',
			contactKicker: 'Escríbenos',
			contactFormNameLabel: 'Nombre',
			contactFormEmailLabel: 'Correo',
			contactFormMessageLabel: 'Mensaje',
			contactFormSubmit: 'Enviar mensaje',
			contactFormSending: 'Enviando…',
			contactFormSuccess: 'Gracias — tu mensaje fue enviado. Te responderemos pronto.',
			contactFormError: 'Algo salió mal. Intenta de nuevo o escríbenos por correo.',
			contactFormInvalidEmail: 'Introduce un correo electrónico válido.',
			contactFormFillAll: 'Completa todos los campos.',
			contactAsideTitle: '¿Prefieres otro canal?',
			contactAsideSubtitle: 'También puedes contactarnos directamente:',
			contactImageAlt: 'Torre de guardavidas en servicio — Costa Ballena',
			contactImageCaption: 'En servicio — Costa Ballena',
			communityTitle: 'Apoyo comunitario',
			communityBody:
				'Restaurantes y negocios locales donan comidas y apoyo para que nuestros guardavidas sigan alimentados y en servicio. Gracias a cada aliado que aparece aquí.',
			communityKicker: 'Aliados y agradecimiento',
			communityHeroTitle: 'Alimentando a los guardavidas',
			communityFuelParagraphs: [
				'Cada día, restaurantes y negocios locales apoyan a nuestros guardavidas donando comidas para el equipo mientras están en servicio.',
				'Esta generosidad mantiene a los guardavidas con energía y enfocados en su misión: proteger vidas.',
				'Estamos profundamente agradecidos con los muchos negocios que contribuyen al programa de esta manera.',
				'Si tu negocio quiere patrocinar una comida para los guardavidas, contáctanos para saber cómo participar.',
			],
			communityMarqueeLabel: 'Socios destacados',
			communityGridTitle: 'Restaurantes y negocios aliados',
			communityHermosaTitle: 'Playa Hermosa',
			communityHermosaParagraphs: [
				'Queremos agradecer de corazón a todos los negocios increíbles que apoyaron a nuestros guardavidas en Playa Hermosa con comidas durante los últimos meses. Tu generosidad alimentó no solo a nuestro equipo, sino también el espíritu de este programa y de la comunidad.',
				'Esperamos sinceramente reabrir pronto y seguir construyendo esto juntos.',
			],
			communityHermosaMarqueeLabel: 'Aliados en Playa Hermosa',
			communityHermosaGridTitle: 'Negocios en Playa Hermosa',
			communityHermosaMarqueeAria: 'Carrusel de logos de aliados de Playa Hermosa',
			communityCtaTitle: '¿Quieres que tu marca aparezca aquí?',
			communityCtaBody:
				'Hazte patrocinador o donante y únete a un círculo visible de negocios que respaldan la seguridad en la playa. Te ayudamos a elegir el nivel y los beneficios adecuados.',
			communityCtaBtn: 'Ver patrocinios',
			communityMarqueeAria: 'Carrusel de logos de aliados',
		},
		footer: {
			tagline: 'Protegiendo vidas en las playas de Costa Ballena, Costa Rica.',
			navTitle: 'Navegación',
			beachesTitle: 'Playas que protegemos',
			beachActive: 'Activa y protegida',
			beachCampaign: 'Campaña en curso',
			builtWith: 'Hecho con propósito.',
			whatsappLabel: 'WHATSAPP',
			whatsapp: '+506 8371 7882',
			whatsappHref: 'https://wa.me/50683717882',
			contactTitle: 'Contacto',
			contactBody: 'Escríbenos para apoyar o ser voluntario hoy',
			emailLabel: 'EMAIL',
			phoneLabel: 'TELÉFONO',
			email: 'lifeguardscostaballena@gmail.com',
			phone: '+506 8371 7882',
			facebookHref: 'https://www.facebook.com/GuardavidasCostaBallena',
			instagramHref: 'https://www.instagram.com/guardavidascostaballena',
			copyright: '© 2026. Todos los derechos reservados.',
			poweredBy: 'Desarrollado por',
			hermosaSoftwareHref: 'https://www.hermosasoftware.io/',
			hermosaSoftwareLogoAlt: 'Hermosa Software',
		},
	},
};
