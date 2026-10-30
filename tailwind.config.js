/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#070a0e',
          900: '#0d1117', // Matte carbon deep background
          850: '#121721',
          800: '#161b22', // Card & element surface
          700: '#21262d', // Border accent
          600: '#30363d'
        },
        emerald: {
          glow: '#10b981',
          neon: '#00ff9d',
          dark: '#064e3b',
        },
        lime: {
          accent: '#a3e635',
          bright: '#ccff00',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.4), 0 0 10px -2px rgba(16, 185, 129, 0.3)',
        'emerald-glow-lg': '0 0 40px -5px rgba(16, 185, 129, 0.55), 0 0 20px -2px rgba(163, 230, 53, 0.3)',
        'lime-glow': '0 0 20px -3px rgba(163, 230, 53, 0.4)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-ping': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        radarPing: {
          '75%, 100%': {
            transform: 'scale(2.2)',
            opacity: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

