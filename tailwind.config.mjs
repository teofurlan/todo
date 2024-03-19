/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			white: '#ffffff',
			black: '#000000',
			hint: '#d0d0d0',
			negativeHint: '#2f2f2f',
			selected: '#2fafaf',
			red: '#ff0000'
		}
	},
	plugins: [],
}
