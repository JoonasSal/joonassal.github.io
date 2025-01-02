import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'system-ui', 'sans-serif'],
			},
		},
	},

	plugins: [typography],

	darkMode: 'class'
};
