module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {},
	},
	darkMode: 'class', // Utiliza el modo oscuro basado en clases
	fontFamily: {
	  poppins: ['Poppins', 'sans-serif'],
	},
	plugins: [
	  require('@tailwindcss/typography'),
	  require('daisyui')
	],
	daisyui: {
	  themes: false, // Utiliza solo los temas light + dark
	  darkTheme: 'dark', // Nombre del tema oscuro que quieres utilizar
	  logs: false,
	},
  };