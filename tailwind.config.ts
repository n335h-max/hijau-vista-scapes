
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
				// Updated hijau brand colors to Navy Blue & Mustard Yellow
				hijau: {
					blue: '#004A8F', // Navy Blue primary
					'blue-light': '#2667A5', // Lighter navy blue
					'blue-dark': '#003A72', // Darker navy blue
					yellow: '#D4B12A', // Mustard Yellow
					'yellow-light': '#E3C65B', // Lighter mustard yellow
					'yellow-dark': '#BF9C21', // Darker mustard yellow
					green: '#004A8F', // Using navy blue instead of green
					'green-light': '#2667A5', // Using lighter navy blue
					'green-dark': '#003A72', // Using darker navy blue
					light: '#F5F7F4', // Keeping light background
					dark: '#2D3B40', // Keeping dark text
					moss: '#004A8F', // Using navy blue
					sage: '#2667A5', // Using lighter navy blue
					earth: '#003A72', // Using darker navy blue
					clay: '#D4B12A', // Using mustard yellow
					leaf: '#004A8F', // Using navy blue
					forest: '#003A72', // Using darker navy blue
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
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
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
				'grow': 'grow 0.3s ease-out forwards',
				'shimmer': 'shimmer 2s linear infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
				nature: ['Montserrat', 'sans-serif']
			},
			boxShadow: {
				'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
				'card': '0 5px 15px rgba(0, 0, 0, 0.08)',
				'button': '0 4px 6px rgba(25, 94, 140, 0.25)', // Using our blue color
				'nature': '0 6px 12px rgba(25, 94, 140, 0.15)', // Using our blue color
				'highlight': '0 0 15px rgba(238, 215, 96, 0.5)' // Yellow glow
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-overlay': 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
				'blue-yellow-gradient': 'linear-gradient(135deg, #004A8F 0%, #F5D443 100%)',
				'blue-gradient': 'linear-gradient(120deg, #004A8F 0%, #2667A5 100%)',
				'yellow-gradient': 'linear-gradient(120deg, #F5D443 0%, #F7DE6F 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
				'nature-gradient': 'linear-gradient(120deg, rgba(0, 74, 143, 0.1) 0%, rgba(245, 212, 67, 0.1) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
