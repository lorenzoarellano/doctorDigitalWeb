/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Cyberpunk Doctor - Dark Mode
        'bg-primary': {
          DEFAULT: '#201C2F',  // Dark mode
          light: '#F8F9FA',    // Light mode
        },
        'text-primary': {
          DEFAULT: '#FFFFFF',  // Dark mode
          light: '#1A1A1A',    // Light mode
        },
        'text-secondary': {
          DEFAULT: '#B8B8C5',  // Dark mode
          light: '#6B7280',    // Light mode
        },
        'accent': '#673DE6',             // Color de acento (violeta) - mismo en ambos modos
        'neon-pink': '#D63163',          // Color neón complementario (rosa)
        'neon-cyan': '#34E2CE',          // Color cian médico
        
        // Aliases para facilitar el uso
        'primary': '#673DE6',
        'secondary': '#34E2CE',
        'dark-surface': {
          DEFAULT: '#000000',  // Dark mode
          light: '#FFFFFF',    // Light mode
        },
        'light-surface': '#F3F4F6',  // Superficies en light mode
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
