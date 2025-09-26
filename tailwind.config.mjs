/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fce9',
          100: '#f0f7d6',
          200: '#e6f0c3',
          300: '#d4e2a3',
          400: '#c0d17e',
          500: '#a8a700',
          600: '#969500',
          700: '#7a7800',
          800: '#636100',
          900: '#4f4d00',
        },
        secondary: {
          50: '#faf8f7',
          100: '#f5f0ee',
          200: '#ebe0dc',
          300: '#d9c4bb',
          400: '#c19e8d',
          500: '#8b6b5b',
          600: '#6b4f42',
          700: '#4a3329',
          800: '#3a2820',
          900: '#2c1e18',
        },
        accent: {
          50: '#fef6f2',
          100: '#fdeee6',
          200: '#fbddd0',
          300: '#f7c4b0',
          400: '#f1a085',
          500: '#ca4d18',
          600: '#b33e14',
          700: '#943212',
          800: '#762910',
          900: '#5c1f0d',
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        }
      }
    },
  },
  plugins: [],
}