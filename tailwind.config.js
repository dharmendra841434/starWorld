/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./usefullData/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif", "system-ui"],
        Poppins: ["Poppins", "sans-serif", "system-ui"],
      },
      spacing: {
        "8xl": "90rem",
      },
      colors: {
        appBlue: "#3B82F6",
        appBlue2: "#5599E4",
        appBlack: "#1E293B",
        blueGray1: "#475569",
        blueGray2: "#556780",
        lightGray: "#838e9e",
        bgGray: "#EFF3F9",
      },
      backgroundImage: {
        BgShape: "url('/images/intersect.svg')",
        bgPattern: "url('/images/pattern.png')",
        contactBg: "url('/images/blob.svg')",
      },
      animation: {
        "bounce-slow": "bounce2 3s linear infinite",
        "bounce-slow2": "bounce3 3s linear infinite",
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 1px rgba(227,227,227,1)",
      },
      keyframes: {
        bounce2: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0)" },
        },
        bounce3: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
