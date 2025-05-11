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
	components: ['src/shared'],
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
		componentDir: './shared/ui',
	},
})
