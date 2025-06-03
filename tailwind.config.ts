import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "whites-white-75": "var(--whites-white-75)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        smalt: {
          primary: "#1a237e",    // Bleu principal
          secondary: "#ffd700",  // Jaune
          dark: "#0f0f0f",      // Noir
          light: "#f5f5f5",     // Gris clair
        }
      },
      fontFamily: {
        "body-regular-l": "var(--body-regular-l-font-family)",
        "display-display-s": "var(--display-display-s-font-family)",
        "display-display-XL": "var(--display-display-XL-font-family)",
        "studio-smalt": "var(--studio-smalt-font-family)",
        "text-emphasis-m": "var(--text-emphasis-m-font-family)",
        "text-emphasis-XL": "var(--text-emphasis-XL-font-family)",
        "text-regular-l": "var(--text-regular-l-font-family)",
        "text-regular-m": "var(--text-regular-m-font-family)",
        "ttile-title-m": "var(--ttile-title-m-font-family)",
        "heading": "var(--heading-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.2', fontWeight: '900' }],
        'display-lg': ['3.5rem', { lineHeight: '1.2', fontWeight: '900' }],
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '900' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        "shadow-2xl": "var(--shadow-2xl)",
        'card': '0px 4px 20px rgba(0, 0, 0, 0.1)',
        'button': '2px 2px 0px rgba(0, 0, 0, 1)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: '1rem',
        '2xl': '1.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
}

export default config
