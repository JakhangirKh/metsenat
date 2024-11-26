

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          100:"#",
          200:"#fefefe",
          exit: "#B1B1B8",
        },
        black: {
          DEFAULT: "#000000",
          sponsors: "#1D1D1F",
        },
        bgColor: {
          DEFAULT: "#F5F5F7",
          user: "#F1F1F3",
        },
        blue: {
          DEFAULT: "#388FF3",
          btn: "#2E5BFF",
          toolBorder: "#E0E7FF",
          toolBackground: "#3366FF",
          toolTitle: "#85A2FE",
          filterBtn: "#EDF1FD",
          filterTitle: "#3365FC",
          filterIcon: "#3365FC",
        },

        redClub: {
          DEFAULT: "#E94A47",
        },

        loginColor: {
          DEFAULT: "#28293D",
          pasword: "#1d1d1d",
        },

        grey: {
          4: "#EAEDF0",
          input: "#2E384D",
          borderInput: "#E0E7FF",
          100:"#B2B7C1",
          200: "#EAECEF",
          300: "#979797",
          400: "#DFE3E8",
          cashTitles: "#7A7A9D",
          cash: "#2E384D",
          cashUZS: "#B2B7C1",
          inputSearch: "#E8E8E8",
          inputIconText: "#B1B1B8",
        },
        borderColor: {
          DEFAULT: "#E0E7FF",
        },

        green: {
          userBg: "#00AE69",
          100: "#DDFFF2",
          200:"#00CF83",
        },
        cashBlue: {
          DEFAULT: "#4C6FFF",
          bg: "#EDF1FF",
        },
        cashYellow: {
          DEFAULT: "#EDC700",
          bg: "#FDF9E6",
        },
        cashOrange: {
          DEFAULT: "#ED7200",
          bg: "#FDF1E6",
        },
      },
    },
  },
  plugins: [],
};
