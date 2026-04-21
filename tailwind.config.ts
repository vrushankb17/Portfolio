import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            colors: {
                cyan: {
                    DEFAULT: '#00F0FF',
                    glow: 'rgba(0, 240, 255, 0.5)',
                },
                purple: {
                    DEFAULT: '#7000FF',
                    glow: 'rgba(112, 0, 255, 0.5)',
                },
                brandBlack: '#000000',
                brandDark: '#0D0D0D',
            },
        },
    },
    plugins: [],
};

export default config;