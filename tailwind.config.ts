import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inknut: ['"Inknut Antiqua"', 'serif'],
        istok: ['"Istok Web"', 'serif'],
        lancelot: ["Lancelot", 'serif'],
        abhaya: ["Abhaya Libre", 'serif'],
        abhayaLibre: ["Abhaya Libre Medium", 'serif'],
        istokWeb: ["Istok Web new", 'serif'],
        manrope: ["Manrope", 'serif'],
        // Add "Inknut Antiqua" as a custom font
      },
      screens: {
        sm: '640px',  // Small devices (default)
        md: '768px',  // Medium devices (default)
        lg: '1024px', // Large devices (default)
        xl: '1280px', // Extra large devices (default)
        '2xl': '1536px', // 2x extra large (default)
        '3xl': '1920px', // 3x extra large
        '4xl': '2560px', // 4x extra large
        '5xl': '3200px',
      },
      boxShadow: {
        custom: '0 4px 6px rgba(214, 214, 214, 0.14)',
      },
      letterSpacing: {
        '17percent': '0.17em', 
        '4percent': '0.04em', // 17% of the font size
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(112, 154, 90, 0.34) 0%, rgba(114, 114, 114, 0.3) 100%)',
        'custom-radial': `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(70, 76, 74, 0.2) 0%, rgba(70, 76, 74, 0.062) 77.08%, rgba(70, 76, 74, 0) 100%)`,
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'fade-in-grow': 'fade-in-grow 1s ease-out forwards',
        "pulse-fade-in": "pulse-fade-in 4s ease-in-out infinite",
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-grow': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        "pulse-fade-in": {
          "0%": { opacity: "0.95", transform: "scale(0.95)" },
          "40%": { opacity: "1", transform: "scale(1.05)" }, // Extended the 'appear' phase
          "100%": { opacity: "0.95", transform: "scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
