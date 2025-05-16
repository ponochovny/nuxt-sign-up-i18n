import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/i18n',
		'shadcn-nuxt',
		'@nuxt/fonts',
		'@nuxt/image',
	],
	srcDir: '.',
	// components: ['src/shared'],
	dir: {
		assets: './src/app/assets',
		pages: './src/pages',
	},
	i18n: {
		defaultLocale: 'en',
		locales: [
			{ code: 'en', name: 'Eng', file: 'en.json' },
			{ code: 'he', name: 'Heb', file: 'he.json', dir: 'rtl' },
		],
	},
	css: ['~/assets/css/tailwind.css'],
	vite: {
		plugins: [tailwindcss()],
	},
	shadcn: {
		componentDir: './src/shared/ui',
	},
	fonts: {
		families: [
			{
				name: 'Nunito Sans',
				provider: 'google',
				weights: [400, 600, 700, 800],
			},
			{ name: 'Montserrat', provider: 'google', weights: [900] },
			{
				name: 'Open Sans',
				provider: 'google',
				weights: [400, 500, 600, 800, 900],
			},
		],
	},
})
