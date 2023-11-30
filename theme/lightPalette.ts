import { PaletteOptions } from "@mui/material";

const lightPalette: PaletteOptions = {
  mode: "light",
  // override default color
  primary: {
    main: "#fcd535",
  },
  error: {
    main: "#ff4d4f",
  },
  text: {
    primary: "#000000",
    secondary: "#E2E9F0",
    disabled: "#475569",
  },
  divider: "#303134",

  // add new custom color
  gray: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E9F0",
    300: "#CDD6E1",
    400: "#B3BECB",
    500: "#79818B",
    600: "#585E66",
    650: "#45474D",
    700: "#303134",
    800: "#27282B",
    900: "#202124",
  },
  slate: {
    50: "#F8FAFC",
    80: "#ADB8CC",
    100: "#F1F5F9",
    200: "#E2E9F0",
    300: "#CDD6E1",
    400: "#B3BECB",
    500: "#79818B",
    600: "#585E66",
    650: "#45474D",
    700: "#303134",
    800: "#27282B",
    900: "#202124",
  },
  yellow: {
    primary: "#FFE176",
    secondary: "#FCD535",
  },

  // also can add your gradient color
  gradient: {
    buttonGold: "linear-gradient(90.51deg, #FFE296, #D9A45C, #FFE296, #D9A45C)",
  },
};

export default lightPalette;
