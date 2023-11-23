"use client";

import React, { useState } from "react";
import { APP_BAR_HEIGHT } from "@/utils/constant";
import {
  Button,
  Toolbar,
  Menu,
  MenuItem,
  AppBar,
  IconButton,
  useTheme,
  Avatar,
} from "@mui/material";
import { Brightness4, Brightness7, ExpandMore } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import LocaleSwitcher from "../LocaleSwitcher";
import { Link } from "@/navigation";

export default function AppBarComponent() {
  const session = useSession();
  const theme = useTheme();
  const [anchorAdminName, setAnchorAdminName] = useState<null | HTMLElement>();

  const handleAdminNameClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAdminName(event.currentTarget);
  };

  const handleAdminNameMenuClose = () => {
    setAnchorAdminName(null);
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
        borderColor: "gray.800",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={{ pathname: "/dashboard" }} replace>
          <Button variant="secondary">LOGO</Button>
        </Link>
        <LocaleSwitcher />
        <div>
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            // onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls={anchorAdminName ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorAdminName ? "true" : undefined}
            onClick={handleAdminNameClick}
            color={anchorAdminName ? "primary" : "inherit"}
            endIcon={<ExpandMore />}
          >
            <Avatar
              alt={session.data?.user?.name || ""}
              src={session.data?.user?.image || ""}
              className="mr-4"
            />
            {session.data?.user?.name || ""}
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
                onClick={() => signOut()}
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
