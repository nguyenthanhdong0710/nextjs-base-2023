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
    <Box component="nav" sx={{ width, height }} aria-label="rabbit-app-drawer">
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
          backgroundColor: "white",
          "& .MuiDrawer-paper": {
            borderRadius: 0,
            border: "none",
            boxSizing: "border-box",
            width,
            height,
            top: "auto",
            bottom: 0,
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
