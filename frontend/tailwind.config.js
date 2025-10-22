/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        gradient: "gradientShift 10s ease infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-reverse": "floatReverse 15s ease-in-out infinite",
        "float-delay": "floatDelay 18s ease-in-out infinite",
        "gradient-text": "gradientText 6s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-40px) translateX(20px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(40px) translateX(-30px)" },
        },
        floatDelay: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-30px) translateX(-20px)" },
        },
        gradientText: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    
    },
  },
  plugins: [],
}

