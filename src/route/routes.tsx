import { lazy } from "react";

const Dashboard = lazy(() => import("../page/Dashboard"));
const Login = lazy(() => import("../page/Login"));
const Register = lazy(() => import("../page/Register"));
const Menu1 = lazy(() => import("../page/Menu1"));
const Menu21 = lazy(() => import("../page/Menu21"));
const Menu22 = lazy(() => import("../page/Menu22"));
const Menu3 = lazy(() => import("../page/Menu3"));

const routes = {
  login: {
    path: "/login",
    name: "Login",
    component: Login,
  },
  register: {
    path: "/register",
    name: "Register",
    component: Register,
  },
  dashboard: {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    permission: "HOME",
  },
  menu1: {
    path: "/menu1",
    name: "Menu1",
    component: Menu1,
    permission: "MENU_1",
  },
  menu21: {
    path: "/menu2_1",
    name: "Menu21",
    component: Menu21,
    permission: "MENU_2_1",
  },
  menu22: {
    path: "/menu2_2",
    name: "Menu22",
    component: Menu22,
    permission: "MENU_2_2",
  },
  menu3: {
    path: "/menu3",
    name: "Menu3",
    component: Menu3,
    permission: "MENU_3",
  },
};

const guest = {
  routes: [routes.login, routes.register],
  redirect: {
    ...routes.login,
  },
};

const member = {
  routes: [
    routes.menu1,
    routes.menu21,
    routes.menu22,
    routes.menu3,
    routes.dashboard,
  ],
  redirect: {
    ...routes.dashboard,
  },
};

const permissionRoutes = {
  guest,
  member,
};

export default permissionRoutes;
