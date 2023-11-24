"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerContent from "./DrawerContent";

interface AppDrawerProps {
  width: number;
  height: number | string;
}

function AppDrawer({ width, height }: AppDrawerProps) {
  const onClose = () => {
    // dispatch(closeDrawer());
  };

  return (
    <Box
      component="nav"
      sx={{
        width,
        height,
        borderRight: "1px solid",
        borderRightColor: "gray.500",
      }}
      aria-label="app-drawer"
    >
      {/* <Drawer
        variant="temporary"
        open
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width,
            height,
            top: "auto",
            bottom: 0,
          },
        }}
      >
        <DrawerContent />
      </Drawer> */}
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
