import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fff9f3',
          100: '#ffefd9',
          200: '#f9d5ab',
          300: '#efb879',
          400: '#dd9451',
          500: '#c77837',
          600: '#a85e2b',
          700: '#864923',
          800: '#68371e',
          900: '#452514',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
