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
        istok:['"Istok Web"','serif'],
        lancelot:["Lancelot",'serif'],
        abhaya:["Abhaya Libre",'serif'],
        abhayaLibre:["Abhaya Libre Medium",'serif'],
        istokWeb:["Istok Web new",'serif'],
        manrope:["Manrope",'serif'],
         // Add "Inknut Antiqua" as a custom font
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      boxShadow: {
        custom: '0 4px 6px rgba(214, 214, 214, 0.14)',
      },
      letterSpacing: {
        '17percent': '0.17em', 
        '4percent':'0.04em'// 17% of the font size
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(112, 154, 90, 0.34) 0%, rgba(114, 114, 114, 0.3) 100%)',
        'custom-radial': `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(70, 76, 74, 0.2) 0%, rgba(70, 76, 74, 0.062) 77.08%, rgba(70, 76, 74, 0) 100%)`,
      },
      },
  
    },
  
  plugins: [],
} satisfies Config;
