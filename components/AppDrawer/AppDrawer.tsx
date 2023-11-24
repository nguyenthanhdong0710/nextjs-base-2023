"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerContent from "./DrawerContent";
import { useAppDispatch, useAppSelector } from "@/redux";
import { closeSidebar } from "@/redux/commonReducer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LocaleSwitcher from "@/components/LocaleSwitcher";

interface AppDrawerProps {
  width: number;
  height: number | string;
}

function AppDrawer({ width, height }: AppDrawerProps) {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((s) => s.common.sidebar);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: width },
        height: { sm: height },
        borderRight: "1px solid",
        borderRightColor: "gray.500",
      }}
      aria-label="app-drawer"
    >
      {/* mobile */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleCloseSidebar}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            top: "auto",
            bottom: 0,
          },
        }}
      >
        <Box className="flex flex-col p-2 items-start gap-1">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </Box>
        <DrawerContent />
      </Drawer>

      {/* pc */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            borderRadius: 0,
            border: "none",
            boxSizing: "border-box",
            width,
            height,
            top: "auto",
            bottom: 0,
            borderRight: "1px solid",
            borderRightColor: "gray.800",
          },
        }}
        open
        className="custom-small-scrollbar"
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
}

export default AppDrawer;
