"use client";

import { useMemo, useState } from "react";
import { Popover, Box, Typography, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import { DrawerItem, DrawerChildItem } from "./DrawerItems";
import { useTranslations } from "next-intl";
import { redirect, usePathname, useRouter } from "@/navigation";

const GListItem = styled(ListItem)(() => {
  const theme = useTheme();
  return {
    ".MuiListItemButton-root": {
      borderRadius: 10,
    },
    ".Mui-selected": {
      ".MuiSvgIcon-root": {
        color: theme.palette.primary.main,
      },
    },
  };
});

const GListItemButton = styled(ListItemButton)(() => ({
  borderRadius: 10,
  marginLeft: "10px !important",
  marginRight: "10px !important",
  paddingTop: 6,
  paddingBottom: 6,
  ".MuiTypography-root": {
    fontSize: 14,
  },
}));

type DrawerListItemProps = {
  data: DrawerItem;
};

function DrawerListItem({ data }: DrawerListItemProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const { hasOneSelected, selected } = useMemo(() => {
    let hasOneSelectedCheck = false;
    const selectedSet: { [key: number]: boolean } = {};
    const children: Array<DrawerChildItem> = [
      ...(data.matches
        ? [
            {
              label: "",
              path: data.path,
              matches: data.matches,
            },
          ]
        : []),
      ...(data.children || []),
    ];

    children.forEach((current, index) => {
      const matched = current.matches?.find((match) => {
        return match === pathname;
      });

      selectedSet[index] = pathname === current.path || Boolean(matched);
      hasOneSelectedCheck = hasOneSelectedCheck || selectedSet[index];
    });

    return {
      hasOneSelected:
        (!data.children?.length && pathname === data.path) ||
        hasOneSelectedCheck,
      selected: selectedSet,
    };
  }, [data.children, data.matches, data.path, pathname]);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (data.children?.length) {
      setAnchorEl(event.currentTarget);
      return;
    }
    router.push(data.path as any);
  };

  return (
    <>
      <GListItem disablePadding sx={{ pt: 1.5 }}>
        <ListItemButton
          aria-owns={open ? data.label : undefined}
          aria-haspopup="true"
          selected={hasOneSelected}
          onClick={handleClick}
          sx={{ maxWidth: 123 }}
          className="flex flex-col justify-center items-center"
        >
          {data.icon}
          <Typography
            variant="body2"
            textAlign="center"
            sx={
              hasOneSelected
                ? { fontWeight: "400 !important", color: "primary.main" }
                : {}
            }
          >
            {t(data.label as any)}
          </Typography>
        </ListItemButton>
      </GListItem>
      {data.children?.length ? (
        <Popover
          id={data.label}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
        >
          {data.children.map((child, index) => {
            return (
              <List
                key={child.path}
                component="div"
                disablePadding
                sx={{ my: 1 }}
              >
                <GListItemButton
                  sx={{ px: 3 }}
                  selected={Boolean(selected[index])}
                  onClick={() => {
                    handlePopoverClose();
                    router.push(child.path as any);
                  }}
                >
                  <Typography
                    variant="body2"
                    textAlign="center"
                    sx={
                      selected[index]
                        ? {
                            fontWeight: "400 !important",
                            color: "primary.main",
                          }
                        : {}
                    }
                  >
                    {t(child.label as any)}
                  </Typography>
                </GListItemButton>
              </List>
            );
          })}
        </Popover>
      ) : null}
    </>
  );
}

export default DrawerListItem;
