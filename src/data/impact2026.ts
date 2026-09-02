export type ImpactBeachId = 'dominical' | 'hermosa';

export type ImpactMetricId =
	| 'medical'
	| 'stingray'
	| 'drowning'
	| 'prehospital'
	| 'rescues'
	| 'deaths';

export type ImpactBeach2026 = {
	id: ImpactBeachId;
	preventions: number;
	metrics: Array<{
		id: ImpactMetricId;
		value: number;
		/** i18n key under `home.impactMetricNotes` */
		noteKey?: 'drowningDominical' | 'deathsHermosa';
	}>;
};

export type ImpactStats = {
	updatedYear: number;
	totalPreventions: number;
	beaches: ImpactBeach2026[];
};

/** Defaults when env vars are missing (local dev / first clone). */
const IMPACT_DEFAULTS = {
	dominical: {
		preventions: 2224,
		medical: 7,
		stingray: 7,
		drowning: 1,
	},
	hermosa: {
		preventions: 1961,
		prehospital: 9,
		rescues: 12,
		deaths: 2,
	},
	year: 2026,
} as const;

function parseIntEnv(value: string | undefined, fallback: number): number {
	if (value === undefined || value === '') return fallback;
	const n = Number.parseInt(String(value).trim(), 10);
	return Number.isFinite(n) && n >= 0 ? n : fallback;
}

function buildImpactStats(): ImpactStats {
	const dominicalPreventions = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_DOMINICAL_PREVENTIONS,
		IMPACT_DEFAULTS.dominical.preventions,
	);
	const dominicalMedical = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_DOMINICAL_MEDICAL,
		IMPACT_DEFAULTS.dominical.medical,
	);
	const dominicalStingray = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_DOMINICAL_STINGRAY,
		IMPACT_DEFAULTS.dominical.stingray,
	);
	const dominicalDrowning = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_DOMINICAL_DROWNING,
		IMPACT_DEFAULTS.dominical.drowning,
	);

	const hermosaPreventions = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_HERMOSA_PREVENTIONS,
		IMPACT_DEFAULTS.hermosa.preventions,
	);
	const hermosaPrehospital = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_HERMOSA_PREHOSPITAL,
		IMPACT_DEFAULTS.hermosa.prehospital,
	);
	const hermosaRescues = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_HERMOSA_RESCUES,
		IMPACT_DEFAULTS.hermosa.rescues,
	);
	const hermosaDeaths = parseIntEnv(
		import.meta.env.PUBLIC_IMPACT_HERMOSA_DEATHS,
		IMPACT_DEFAULTS.hermosa.deaths,
	);

	const beaches: ImpactBeach2026[] = [
		{
			id: 'dominical',
			preventions: dominicalPreventions,
			metrics: [
				{ id: 'medical', value: dominicalMedical },
				{ id: 'stingray', value: dominicalStingray },
				{ id: 'drowning', value: dominicalDrowning, noteKey: 'drowningDominical' },
			],
		},
		{
			id: 'hermosa',
			preventions: hermosaPreventions,
			metrics: [
				{ id: 'prehospital', value: hermosaPrehospital },
				{ id: 'rescues', value: hermosaRescues },
				{ id: 'deaths', value: hermosaDeaths, noteKey: 'deathsHermosa' },
			],
		},
	];

	return {
		updatedYear: parseIntEnv(import.meta.env.PUBLIC_IMPACT_YEAR, IMPACT_DEFAULTS.year),
		totalPreventions: dominicalPreventions + hermosaPreventions,
		beaches,
	};
}

/** Logbook figures embedded at build time from `PUBLIC_IMPACT_*` env vars. */
export const impact2026: ImpactStats = buildImpactStats();

export function impactPreventionBarWidth(preventions: number): string {
	const max = Math.max(...impact2026.beaches.map((b) => b.preventions));
	return max > 0 ? `${(preventions / max) * 100}%` : '0%';
}

function metricValue(beachId: ImpactBeachId, metricId: ImpactMetricId): number {
	const beach = impact2026.beaches.find((b) => b.id === beachId);
	return beach?.metrics.find((m) => m.id === metricId)?.value ?? 0;
}

/** Hero / CTA: effective water rescues (Hermosa logbook). */
export function impactHeroRescues(): number {
	return metricValue('hermosa', 'rescues');
}

/** Hero / CTA: medical + pre-hospital assists across both beaches. */
export function impactHeroAssists(): number {
	return metricValue('dominical', 'medical') + metricValue('hermosa', 'prehospital');
}
