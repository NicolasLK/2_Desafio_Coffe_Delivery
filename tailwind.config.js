/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        product: {
          yellow: "#DBAC2C",
          yellow_light: "#F1E9C9",
          yellow_dark: "#C47F17",
          purple: "#8047F8",
          purple_light: "#EBE5F9",
          purple_dark: "#4B2995",
        },
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574F4D",
          label: "#8D8686",
          hover: "#D7D5D5",
          button: "#E6E5E5",
          input: "#EDEDED",
          card: "#F3F2F2",
          background: "#FAFAFA",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        Roboto_Regular: ["Roboto_Regular", "sans-serif"],
        Roboto_Bold: ["Roboto_Bold", "sans-serif"],
        Baloo2_Bold: ["Baloo2_Bold", "serif"],
        Baloo2_ExtraBold: ["Baloo2_ExtraBold", "serif"],
      },
      fontSize: {
        title: {
          titleXL: "3rem",
          titleL: "2rem",
          titleM: "1.5rem",
          titleS: "1.25rem",
          titleXS: "1.125rem",
        },
        text: {
          textL: "1.25rem",
          textM: "1rem",
          textS: "0.875rem",
          textXS: "0.125rem",
        },
        button: {
          G: "0.875rem",
          M: "0.125rem",
        },
        tag: "0.625rem",
      },
    },
  },
  plugins: [],
};
