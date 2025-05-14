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
				// Hijau brand colors updated to match the image
				hijau: {
					blue: '#195E8C', // Updated to match image blue
					yellow: '#EED760', // Updated to match image yellow
					light: '#F2FCE2', // Kept light green background
					dark: '#1E293B', // Kept dark text
					moss: '#6B8E23', // Kept natural moss green
					sage: '#9CAF88', // Kept soft sage green
					earth: '#8B7355', // Kept earthy brown
					clay: '#D6C4B8', // Kept soft clay accent
					leaf: '#4CAF50', // Kept fresh leaf green
					forest: '#2E7D32', // Kept deep forest green
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
				'fade-in': {
					'0%': {
					  opacity: '0',
					  transform: 'translateY(10px)'
					},
					'100%': {
					  opacity: '1',
					  transform: 'translateY(0)'
					}
				},
				'zoom-in': {
					'0%': {
					  opacity: '0',
					  transform: 'scale(0.95)'
					},
					'100%': {
					  opacity: '1',
					  transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-gentle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'grow': {
					'0%': {
						transform: 'scale(1)'
					},
					'100%': {
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'zoom-in': 'zoom-in 0.3s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.7s ease-out forwards',
				'grow': 'grow 0.3s ease-out forwards'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
				nature: ['Montserrat', 'sans-serif']
			},
			boxShadow: {
				'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
				'card': '0 5px 15px rgba(0, 0, 0, 0.08)',
				'button': '0 4px 6px rgba(14, 165, 233, 0.25)',
				'nature': '0 6px 12px rgba(76, 175, 80, 0.15)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-overlay': 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
				'eco-gradient': 'linear-gradient(135deg, #F2FCE2 0%, #E8F5E9 100%)',
				'nature-gradient': 'linear-gradient(120deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.1) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
