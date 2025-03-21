
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				retro: {
					background: '#121212',
					primary: '#39ff14',    // Neon green
					secondary: '#ff3864',  // Neon pink
					accent: '#fdff00',     // Neon yellow
					muted: '#2f2f2f',
					border: '#39ff14',
					text: '#ffffff'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pixel-pulse': {
					'0%, 100%': { 
						opacity: '1', 
						transform: 'scale(1)' 
					},
					'50%': { 
						opacity: '0.8', 
						transform: 'scale(1.05)' 
					}
				},
				'glitch': {
					'0%': { 
						transform: 'translate(0)' 
					},
					'20%': { 
						transform: 'translate(-2px, 2px)' 
					},
					'40%': { 
						transform: 'translate(-2px, -2px)' 
					},
					'60%': { 
						transform: 'translate(2px, 2px)' 
					},
					'80%': { 
						transform: 'translate(2px, -2px)' 
					},
					'100%': { 
						transform: 'translate(0)' 
					}
				},
				'scanline': {
					'0%': { 
						transform: 'translateY(-100%)' 
					},
					'100%': { 
						transform: 'translateY(100%)' 
					}
				},
				'pulse-red': {
					'0%, 100%': { 
						opacity: '1', 
						boxShadow: '0 0 5px #c22a30' 
					},
					'50%': { 
						opacity: '0.8', 
						boxShadow: '0 0 15px #ff3c44' 
					}
				},
				'hexagon-rotate': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'health-pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'flicker': {
					'0%, 100%': {
						opacity: '1'
					},
					'33%': {
						opacity: '0.9'
					},
					'66%': {
						opacity: '0.94'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-pulse': 'pixel-pulse 1.5s infinite',
				'glitch': 'glitch 0.2s ease-in-out',
				'scanline': 'scanline 8s linear infinite',
				'pulse-red': 'pulse-red 2s infinite',
				'hexagon-rotate': 'hexagon-rotate 10s linear infinite',
				'health-pulse': 'health-pulse 2s ease-in-out infinite',
				'flicker': 'flicker 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
