"use client";

import React, { useState } from "react";
import { APP_BAR_HEIGHT } from "@/utils/constant";
import {
  Button,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  AppBar,
  IconButton,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function AppBarComponent() {
  const theme = useTheme();
  const [anchorAdminName, setAnchorAdminName] = useState<null | HTMLElement>();

  const handleAdminNameClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAdminName(event.currentTarget);
  };

  const handleAdminNameMenuClose = () => {
    setAnchorAdminName(null);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    // i18n.changeLanguage(event.target.value);
    console.log(
      "🚀 ~ file: AppBar.tsx:28 ~ handleChange ~ event.target.value:",
      event.target.value
    );
  };

  const handleLogout = () => {
    // dispatch(clearAuth());
    // navigate(Path.login);
    console.log("logout");
  };

  const t = (str: string) => str;

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{
        borderRadius: 0,
        boxShadow: "none",
        height: APP_BAR_HEIGHT,
        borderBottom: 1,
        borderColor: "gray.200",
      }}
    >
      <Toolbar>
        <Button
          color="inherit"
          sx={{ px: 0.5 }}
          // onClick={() => navigate(Path.home)}
        >
          <Box sx={{ width: 36, height: 36, mr: 0.5 }} />
          LOGO
        </Button>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          &nbsp;
        </Typography>
        <Typography sx={{ pr: 1 }}>{t("sidebar.chooseLanguage")}</Typography>
        <Select value={"vi"} onChange={handleChange}>
          <MenuItem value="kr">{t("sidebar.kr")}</MenuItem>
          <MenuItem value="vi">{t("sidebar.vi")}</MenuItem>
          <MenuItem value="en">{t("sidebar.en")}</MenuItem>
        </Select>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          &nbsp;
        </Typography>
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          // onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {/* <RLink to={Path.home}>
          <h1>{t("sidebar.home")}</h1>
        </RLink>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          &nbsp;
        </Typography>
        <RLink to={Path.sample}>
          <h1>{t("sidebar.sample")}</h1>
        </RLink> */}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          &nbsp;
        </Typography>
        <div>
          <Button
            id="basic-button"
            aria-controls={anchorAdminName ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorAdminName ? "true" : undefined}
            onClick={handleAdminNameClick}
            color={anchorAdminName ? "primary" : "inherit"}
            // endIcon={<ExpandMore />}
            sx={{ ml: 2 }}
          >
            {/* {user?.username} */}
            username
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorAdminName}
            open={!!anchorAdminName}
            onClose={handleAdminNameMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleAdminNameMenuClose}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={() => handleLogout()}
              >
                {t("Logout")}
              </Button>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
