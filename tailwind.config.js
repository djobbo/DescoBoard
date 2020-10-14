module.exports = {
	purge: ['./public/**/*.html'],
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
};
