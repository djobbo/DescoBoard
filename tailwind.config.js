module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./index.html', './src/**/*.vue', './src/**/*.js'],
	},
	theme: {
		extend: {},
		colors: {
			white: 'white',
			bg: '#2d2d2d',
			'bg-alt': '#424242',
			accent: '#FFC491',
		},
	},
	variants: {},
	plugins: [],
	buildModules: ['@nuxtjs/tailwindcss'],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
