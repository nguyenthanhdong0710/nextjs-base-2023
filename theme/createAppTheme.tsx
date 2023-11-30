import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import darkPalette from "./darkPalette";
import lightPalette from "./lightPalette";

// override props for Button (can do this to all Component)
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    dark: true;
  }
}

// override breakpoint
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    xm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// declare type for palette
type ColorGradient = {
  buttonGold: string;
};

type ColorPalette = {
  [key: number | string]: string;
};

declare module "@mui/material/styles" {
  interface Palette {
    gray: ColorPalette;
    slate: ColorPalette;
    yellow: ColorPalette;
    gradient: ColorGradient;
  }
  interface PaletteOptions {
    gray: ColorPalette;
    slate: ColorPalette;
    yellow: ColorPalette;
    gradient: ColorGradient;
  }
}

// start create theme
const createAppTheme = (mode: PaletteMode) => {
  const palette = mode === "light" ? lightPalette : darkPalette;
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xm: 480,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette,
    // Override component style
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
            fontWeight: "600",
            borderRadius: 8,
            textTransform: "none",
            minHeight: 48,
            "&.Mui-disabled": {
              background: palette.gray[650],
              color: palette.gray[500],
              cursor: "not-allowed",
              pointerEvents: "all !important",
            },
          },
          outlined: {
            color: palette.yellow[500],
            borderColor: palette.yellow[500],
          },
          containedPrimary: {
            "&:hover": {
              color: palette.text?.primary,
            },
          },
        },
        variants: [
          {
            props: { variant: "primary" },
            style: {
              color: palette.slate[700],
              backgroundSize: "300% 100%",
              backgroundImage: palette.gradient.buttonGold,
              transition: "all .4s ease-in-out",
              boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
              "&:not([disabled]):hover": {
                backgroundPosition: "100% 0",
                transition: "all .4s ease-in-out",
              },
            },
          },
        ],
      },
    },
  });
};

export default createAppTheme;
