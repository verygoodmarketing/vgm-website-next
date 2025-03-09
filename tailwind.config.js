/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "rgb(var(--color-primary-light))",
          dark: "rgb(var(--color-primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "rgb(var(--color-secondary-light))",
          dark: "rgb(var(--color-secondary-dark))",
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
        // New semantic color variables for text
        text: {
          primary: "#1a202c", // dark gray for main text (equivalent to gray-900)
          secondary: "#2d3748", // slightly lighter for secondary text (equivalent to gray-800)
          tertiary: "#4a5568", // for less important text (equivalent to gray-700)
          "on-dark": "#f7fafc", // for text on dark backgrounds (equivalent to gray-100)
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "circle-in": {
          "0%": { clipPath: "circle(0% at var(--x, calc(100% - 2.5rem)) var(--y, 2.5rem))" },
          "100%": { clipPath: "circle(150% at var(--x, calc(100% - 2.5rem)) var(--y, 2.5rem))" },
        },
        "circle-out": {
          "0%": { clipPath: "circle(150% at var(--x, calc(100% - 2.5rem)) var(--y, 2.5rem))" },
          "100%": { clipPath: "circle(0% at var(--x, calc(100% - 2.5rem)) var(--y, 2.5rem))" },
        },
      },
      animation: {
        "circle-in": "circle-in 0.5s forwards",
        "circle-out": "circle-out 0.5s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

