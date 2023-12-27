/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Lemonada', 'cursive'],
				secondary: ['Marhey', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
