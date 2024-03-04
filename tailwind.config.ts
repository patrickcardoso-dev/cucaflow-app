import type { Config } from "tailwindcss";

const config = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
    colors: {
      neutras: {
        neutra: "#EFEFFF",
        bgBlack: "#211D28",
        gray100: "#201F25",
        gray200: "#EEE",
      },
      primary: {
        purple100: "#641499",
        purple200: "#E1B2FF",
        purple300: "#420A66",
      },
      secondy: {
        orange100: "#F55B1B",
        orange200: "#FFC9B2",
        orange300: "#66250A",
      },
      terciary: {
        green100: "#1AAD5F",
        green200: "#B2FFD6",
        green300: "#0A6635",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
