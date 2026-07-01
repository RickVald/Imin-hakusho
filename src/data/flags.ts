// ISO 3166-1 alpha-2 codes, used with flagcdn.com for reliable cross-platform flag rendering
// (emoji flags don't render as images on Windows by default).
export const countryCodes: Record<string, string> = {
	denmark: 'dk',
	sweden: 'se',
	canada: 'ca',
	france: 'fr',
	uk: 'gb',
	germany: 'de',
	ireland: 'ie',
	norway: 'no',
	finland: 'fi',
	belgium: 'be',
	netherlands: 'nl',
	italy: 'it',
	spain: 'es',
	czechia: 'cz',
	portugal: 'pt',
	austria: 'at',
	usa: 'us',
	'new-zealand': 'nz',
	australia: 'au',
	switzerland: 'ch',
};

export function flagUrl(slug: string, width: 20 | 24 | 32 | 40 | 48 | 80 = 40): string {
	const code = countryCodes[slug] ?? 'xx';
	return `https://flagcdn.com/w${width}/${code}.png`;
}

// Rough continent grouping, used only for a decorative color accent on country cards.
export const regionColor: Record<string, string> = {
	denmark: '#1d3461',
	sweden: '#1d3461',
	norway: '#1d3461',
	finland: '#1d3461',
	germany: '#1d3461',
	netherlands: '#1d3461',
	belgium: '#1d3461',
	ireland: '#1d3461',
	uk: '#1d3461',
	austria: '#1d3461',
	switzerland: '#1d3461',
	france: '#9c3b3b',
	italy: '#9c3b3b',
	spain: '#9c3b3b',
	portugal: '#9c3b3b',
	czechia: '#9c3b3b',
	usa: '#5a8a6b',
	canada: '#5a8a6b',
	australia: '#c9a23f',
	'new-zealand': '#c9a23f',
};
