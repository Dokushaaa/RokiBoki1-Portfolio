import { info } from "autoprefixer";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: [
			"./src/**/*.{js,jsx,ts,tsx,mdx}",
			"./src/assets/*.{js,jsx,ts,tsx,mdx}",
		],
		extract,
	},

	theme: {
		/** @type {import('fluid-tailwind').FluidThemeConfig} */
		fluid: ({ theme }) => ({
			defaultScreens: ["20rem", theme("screens.lg")],
			screens: { ms: "320px", mm: "375px", ml: "425px" },
		}),
		extend: {
			linearBorderGradients: (theme) => ({
				colors: theme("colors"),
				background: theme("colors"),
			}),
			backgroundImage: {
				bodyBG: "url('/public/endless-constellation.svg')",
				wavyBG: "url('/public/wavey-fingerprint.svg')",
				contactBG: "url('/public/contactme.svg')",
			},
			colors: {
				bg: "rgb(var(--bg) / <alpha-value>)",
				bg2: "rgb(var(--bg2) / <alpha-value>)",
				header: "rgb(var(--header) / <alpha-value>)",
				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				content: "rgb(var(--content) / <alpha-value>)",
				gray: "rgb(var(--gray) / <alpha-value>)",
				btnwhite: "rgb(var(--btnwhite) / <alpha-value>)",
				// dnt below:
				alert: "rgb(var(--alert) / <alpha-value>)",
				disable: "rgb(var(--disable) / <alpha-value>)",
				info: "rgb(var(--info) / <alpha-value>)",
				warning: "rgb(var(--warning) / <alpha-value>)",
				hazard: "rgb(var(--hazard) / <alpha-value>)",
			},
			letterSpacing: {
				name: "0.35em",
				extendedBtn: "0.2em",
			},
			backgroundColor: {
				bg: "rgb(var(--bg) / <alpha-value>)",
				bg2: "rgb(var(--bg2) / <alpha-value>)",
				header: "rgb(var(--header) / <alpha-value>)",
				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				content: "rgb(var(--content) / <alpha-value>)",
				gray: "rgb(var(--gray) / <alpha-value>)",
				btnwhite: "rgb(var(--btnwhite) / <alpha-value>)",
				// dnt below:
				alert: "rgb(var(--alert) / <alpha-value>)",
				disable: "rgb(var(--disable) / <alpha-value>)",
				info: "rgb(var(--info) / <alpha-value>)",
				warning: "rgb(var(--warning) / <alpha-value>)",
				hazard: "rgb(var(--hazard) / <alpha-value>)",
			},

			fill: {
				bg: "var(--bg)",
				bg2: "var(--bg2)",
				header: "var(--header)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				content: "var(--content)",
				gray: "var(--gray)",
				btnwhite: "var(--btnwhite)",
				// dnt below:
				alert: "var(--alert)",
				disable: "var(--disable)",
				info: "var(--info)",
				warning: "var(--warning)",
				hazard: "var(--hazard)",
			},

			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fit, minmax(300px, 1fr))",
			},
			fontFamily: {
				regularBtn: "BTNREG",
				mediumBtn: "BTNMED",
				thinBtn: "BTNTHIN",
				regularHeader: "HEADERREG",
				itlaicText: "TEXTITALIC",
				regularText: "TEXTREG",
			},
			keyframes: {
				rotate: {
					"100%": { transform: "rotate-360" },
				},
				loading: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" },
				},
				loading2sm: {
					"0%": { transform: "translateX(-5%)" },
					"100%": { transform: "translateX(5%)" },
				},
				loading2md: {
					"0%": { transform: "translateX(-5%)" },
					"100%": { transform: "translateX(5%)" },
				},
				planet: {
					"0%": { transform: "translateX(-5%) rotate-360 translateY(-10%)" },
					"100%": { transform: "translateX(20%) rotate-360 translateY(100%)" },
				},
			},
			animation: {
				rotate: "dash 2s linear infinite",
				loading: "loading 2s ease-in infinite",
				loading2sm: "loading2sm 2s ease-in-out infinite",
				loading2md: "loading2md 2s ease-in-out infinite",
				planet: "planet 10s ease-in-out infinite",
				planetmd: "planetmd 10s ease-in-out infinite",
			},
		},
		screens,
		fontSize,
	},
	plugins: [
		fluid({
			checkSC144: false, // default: true
		}),
	],
};
