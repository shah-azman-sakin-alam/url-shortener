const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			'btn-green': 'rgba(53, 255, 98, 0.26)',
  			'btn-green-text': '#079927',
  			'color-login': '#35FF62',
  			'bottom-stroke': 'rgba(0, 0, 0, 49%)',
  			'alert-button': 'rgba(53,255, 98,0.1)',
  			'input-button': 'rgba(236, 236, 236, 0.5)',
  			'small-text': 'rgba(0, 0, 0, 57%)',
  			background: 'hsl(var(--background))',
  			'sign-small-text': 'rgba(0, 0, 0, 75%)',
  			'dashboard-stroke': 'rgba(178,178,178, 30%)',
  			'sign-label': '#2A2A2A',
  			'forgot-pass': '#515151',
  			formButton: '#242020',
  			formInsideStroke: '#484747',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			jost: ["Jost", "sans-serif"],
  			aleo: ["Aleo", "serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		xs: '0px',
  		'': '.screens',
  		'...defaultTheme.screens': ''
  	}
  },
  darkMode: ["class", "class"],
 plugins: [nextui(), require("tailwindcss-animate")],
};
