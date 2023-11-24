import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#root",
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      xs: "0px",
      xm: "480px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
