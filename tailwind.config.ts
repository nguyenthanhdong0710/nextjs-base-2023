import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: "#root",
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
