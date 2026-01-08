import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // Enables class-based dark mode (we'll toggle 'dark' on <html>)
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            colors: {
                // Optional: you can add custom colors for dark mode if needed
            },
        },
    },
    plugins: [],
};

export default config;