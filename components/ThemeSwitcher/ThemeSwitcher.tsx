import { IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useAppDispatch } from "@/redux";
import { toggleThemeMode } from "@/redux/themeReducer";

export default function ThemeSwitcher() {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleToggleThemeMode = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <IconButton onClick={handleToggleThemeMode} color="inherit">
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
