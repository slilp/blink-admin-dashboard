import {
  FaHome,
  FaChartBar,
  FaChartArea,
  FaChartPie,
  FaDatabase,
  FaQuestion,
} from "react-icons/fa";

export interface MenuInfo {
  title: string;
  path: string;
  permission: string;
  icon: JSX.Element;
}

export interface MenuBar {
  title: string;
  path: string;
  permission: string;
  icon: JSX.Element;
  sub: MenuInfo[];
}

const menu: MenuBar[] = [
  {
    title: "Home",
    path: "/",
    permission: "HOME",
    icon: <FaHome></FaHome>,
    sub: [],
  },
  {
    title: "Menu1",
    path: "/menu1",
    permission: "MENU_1",
    icon: <FaChartArea></FaChartArea>,
    sub: [],
  },
  {
    title: "Menu2",
    path: "",
    permission: "MENU_2",
    icon: <FaChartPie></FaChartPie>,
    sub: [
      {
        title: "Menu2.1",
        path: "/menu2_1",
        permission: "MENU_2_1",
        icon: <FaDatabase></FaDatabase>,
      },
      {
        title: "Menu2.2",
        path: "/menu2_2",
        permission: "MENU_2_2",
        icon: <FaQuestion></FaQuestion>,
      },
    ],
  },
  {
    title: "Menu3",
    path: "/menu3",
    permission: "MENU_3",
    icon: <FaChartBar></FaChartBar>,
    sub: [],
  },
];

export default menu;
