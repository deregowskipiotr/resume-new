export const cvTheme = {
  colors: {
    primary: "hsl(217 70% 30%)", // Deep professional blue
    accent: "hsl(217 91% 60%)", // Blue hover
    bg: "hsl(210 40% 98%)", // Clean background
    text: "hsl(215 27% 10%)", // Dark readable text
  },
  shadows: {
    card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    hover: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  borderRadius: {
    card: "0.75rem", // 12px
    button: "0.5rem", // 8px
  },
} as const;
