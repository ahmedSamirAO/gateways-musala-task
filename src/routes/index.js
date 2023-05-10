/* eslint-disable import/first */
import async from "../components/Async";

const Gateway = async(() => import("../pages/Gateway"));
const CreateGateway = async(() => import("../pages/CreateGateway"));
const GatewayDetails = async(() => import("../pages/GatewayDetails"));

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

const viewGatewayDetailsRoute = {
  name: "gatewayDetails",
  path: "/gateway/:id",
  component: GatewayDetails,
};

export const homeRoutes = [
  viewGatewayDetailsRoute,
  gatewayRoute,
  createGatewayRoute,
];
