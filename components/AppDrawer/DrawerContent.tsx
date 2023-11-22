"use client";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { SxProps } from "@mui/material";
import DrawerListItem from "./DrawerListItem";
import DrawerItems from "./DrawerItems";
import { useParams } from "next/navigation";

type DrawerContentProps = {
  sx?: SxProps;
};

function DrawerContent({ sx }: DrawerContentProps) {
  const { locale } = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        // minHeight: "100vh",
        ...sx,
      }}
    >
      <List sx={{ px: 1 }}>
        {DrawerItems(String(locale)).map((item) => (
          <DrawerListItem key={item.path} data={item} />
        ))}
      </List>
    </Box>
  );
}

export default DrawerContent;
