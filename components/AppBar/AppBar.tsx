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
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import LocaleSwitcher from "../LocaleSwitcher";
import { Link } from "@/navigation";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch, useAppSelector } from "@/redux";
import { toggleSidebar } from "@/redux/commonReducer";
import ThemeSwitcher from "../ThemeSwitcher";

export default function AppBarComponent() {
  const session = useSession();
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((s) => s.common.sidebar);

  const [anchorAdminName, setAnchorAdminName] = useState<null | HTMLElement>();

  const handleAdminNameClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAdminName(event.currentTarget);
  };

  const handleAdminNameMenuClose = () => {
    setAnchorAdminName(null);
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

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
      className="flex justify-center"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="flex items-center gap-3">
          <IconButton className="sm:hidden" onClick={handleToggleSidebar}>
            {open ? <MenuOpenIcon></MenuOpenIcon> : <MenuIcon></MenuIcon>}
          </IconButton>
          <Link href={{ pathname: "/dashboard" }} replace>
            <Button variant="secondary">LOGO</Button>
          </Link>
        </Box>
        <Box className="flex items-center gap-5">
          <Box className="items-center gap-5 hidden sm:flex">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </Box>
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
            <span className="hidden sm:block">
              {session.data?.user?.name || ""}
            </span>
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
            <MenuItem className="sm:hidden">
              <span> {session.data?.user?.name || ""}</span>
            </MenuItem>
            <MenuItem onClick={handleAdminNameMenuClose}>
              <Button
                type="button"
                fullWidth
                variant="primary"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
