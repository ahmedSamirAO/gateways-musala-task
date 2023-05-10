/* eslint-disable import/first */
import async from "../components/Async";

const Gateway = async(() => import("../pages/Gateway"));
const CreateGateway = async(() => import("../pages/CreateGateway"));

const gatewayRoute = {
  name: "gateway",
  path: "/gateway",
  component: Gateway,
};

const createGatewayRoute = {
  name: "createGateway",
  path: "/create-gateway",
  component: CreateGateway,
};

export const homeRoutes = [gatewayRoute, createGatewayRoute];
