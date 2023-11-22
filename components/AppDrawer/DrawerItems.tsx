import { ReactNode } from "react";
import routerPath from "@/app/router-path";
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

const DrawerItems: Array<DrawerItem> = [
  {
    icon: <Dashboard />,
    label: "sidebar.home",
    path: routerPath.dashboard,
  },
  // {
  //   icon: <PaperIcon />,
  //   label: "sidebar.sample",
  //   path: routerPath.listPageExample,
  //   children: [
  //     {
  //       label: "sidebar.listSample",
  //       path: routerPath.listPageExample,
  //       matches: [routerPath.userDetail(), routerPath.userDetailEdit()],
  //     },
  //   ],
  // },
];

export default DrawerItems;
