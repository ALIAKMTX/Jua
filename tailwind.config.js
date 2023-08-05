/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"node_modules/preline/dist/*.js",
		"./index.html",
		"./src/**/*.vue",
	],
	theme: {
		extend: {},
		screens: {
			phone: "480px",
		},
	},
	plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
	darkMode: "class",
};
