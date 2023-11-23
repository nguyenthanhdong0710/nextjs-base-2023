import { ReactNode } from "react";
import { Dashboard } from "@mui/icons-material";
import { pathnames } from "@/navigation";

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

const DrawerItems: Array<DrawerItem> = [
  {
    icon: <Dashboard />,
    label: "sidebar.dashboard",
    path: pathnames["/dashboard"],
  },
  {
    icon: <Dashboard />,
    label: "sidebar.sample",
    path: pathnames["/example"],
    children: [
      {
        label: "sidebar.sample",
        path: pathnames["/example"],
        matches: [pathnames["/example"]],
      },
    ],
  },
];

export default DrawerItems;
