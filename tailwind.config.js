/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pharmacy: {
          50: "#effaf5",
          100: "#d9f3e6",
          200: "#b4e6cf",
          300: "#83d2b2",
          400: "#4fba91",
          500: "#1f9a70",
          600: "#087f5b",
          700: "#006747",
          800: "#00543c",
          900: "#063f31"
        },
        nhs: "#005eb8"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(8, 62, 48, 0.10)",
        card: "0 8px 30px rgba(8, 62, 48, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}