import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // br.lk 스타일 색상
        primary: {
          DEFAULT: '#163300',
          light: '#9fe870',
          dark: '#0d1f00',
        },
        accent: {
          DEFAULT: '#9fe870',
          hover: '#8fd960',
        },
        surface: {
          DEFAULT: '#ffffff',
          secondary: '#f5f5f7',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#5d5d7a',
          muted: '#9191a8',
        },
        border: {
          light: '#e8e8e8',
          DEFAULT: '#d1d1d6',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)',
        'input': '0 2px 4px rgba(0, 0, 0, 0.02)',
        'input-focus': '0 0 0 3px rgba(159, 232, 112, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
