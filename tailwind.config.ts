import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tailwindGreen: "#11cdb6",
        tailwindGreenSecondary: "#0eab98",
        tailwindBlue: "#1ea3bc",
        tailwindBlueSecondary: "#07859d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
