import { IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ThemeSwitcher() {
  const theme = useTheme();

  const toggleThemeMode = () => {};

  return (
    <IconButton onClick={toggleThemeMode} color="inherit">
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
