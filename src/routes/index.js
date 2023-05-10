/* eslint-disable import/first */
import async from "../components/Async";

const HomePage = async(() => import("../pages/Home"));

const homeRoute = {
  name: "home",
  path: "/",
  component: HomePage,
};

export const homeRoutes = [homeRoute];
