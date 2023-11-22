import { ReactNode } from "react";
import routerPath from "@/router-path";
import { Dashboard } from "@mui/icons-material";

export type DrawerChildItem = {
  label: string;
  path: string;
  matches?: Array<string>;
};

export type DrawerItem = {
  icon: ReactNode;
  label: string;
  path: string;
  children?: Array<DrawerChildItem>;
  matches?: Array<string>;
};

const DrawerItems = (locale: string): Array<DrawerItem> => [
  {
    icon: <Dashboard />,
    label: "sidebar.dashboard",
    path: routerPath(locale).dashboard,
  },
  {
    icon: <Dashboard />,
    label: "sidebar.sample",
    path: routerPath(locale).example,
    children: [
      {
        label: "sidebar.sample",
        path: routerPath(locale).example,
        matches: [routerPath(locale).example],
      },
    ],
  },
];

export default DrawerItems;
