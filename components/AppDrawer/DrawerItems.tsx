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
    label: "sidebar.users",
    path: pathnames["/dashboard"],
    matches: [pathnames["/dashboard"], pathnames["/users/[userId]"]],
  },
  {
    icon: <Dashboard />,
    label: "sidebar.table",
    path: pathnames["/user-list"],
    children: [
      {
        label: "sidebar.table",
        path: pathnames["/user-list"],
        matches: [pathnames["/user-list"]],
      },
    ],
  },
];

export default DrawerItems;
