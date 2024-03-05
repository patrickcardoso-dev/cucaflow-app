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
      screens: {
        tablet: "768px",
        laptop: "992px",
        desktop: "1280px",
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
    colors: {
      neutras: {
        neutra: "#fff",
        bgBlack: "#211D28",
        gray100: "#201F25",
        gray200: "#EEE",
      },
      primary: {
        purple100: "#641499",
        purple200: "#420A66",
        purple300: "#420A66",
      },
      secondary: {
        orange100: "#F55B1B",
        orange200: "#FFC9B2",
        orange300: "#FFC9B2",
      },
      tertiary: {
        green100: "#1AAD5F",
        green200: "#B2FFD6",
        green300: "#0A6635",
      },
    },
    boxShadow: {
      shadowButton:
        "0px 6px 13px 0px rgba(255, 108, 55, 0.05), 0px 24px 24px 0px rgba(255, 108, 55, 0.04), 0px 55px 33px 0px rgba(255, 108, 55, 0.03), 0px 98px 39px 0px rgba(255, 108, 55, 0.01), 0px 153px 43px 0px rgba(255, 108, 55, 0.00)",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
