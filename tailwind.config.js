/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('./Bg_Content.png')",
      },
      spacing: {
        custom_top: "calc(-1.25rem / 2)",
        custom_right: "calc(-1.25rem / 2)",
      },
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
        error: "#F84747",
      },
      fontFamily: {
        Roboto_Regular: ["Roboto_Regular", "sans-serif"],
        Roboto_Bold: ["Roboto_Bold", "sans-serif"],
        Baloo2_Bold: ["Baloo2_Bold", "serif"],
        Baloo2_ExtraBold: ["Baloo2_ExtraBold", "serif"],
      },
      fontSize: {
        titleXL: ["3rem", "130%"],
        titleL: ["2rem", "130%"],
        titleM: ["1.5rem", "130%"],
        titleS: ["1.25rem", "130%"],
        titleXS: ["1.125rem", "130%"],
        textL: ["1.25rem", "130%"],
        textM: ["1rem", "130%"],
        textS: ["0.875rem", "130%"],
        textXS: ["0.75rem", "130%"],
        buttonG: ["0.875rem", "160%"],
        buttonS: ["0.75rem", "160%"],
        tag: ["0.625rem", "130%"],
      },
    },
  },
  plugins: [],
};
