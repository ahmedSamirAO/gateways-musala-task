/* eslint-disable import/first */
import async from "../components/Async";

const Gateway = async(() => import("../pages/Gateway"));
const CreateGateway = async(() => import("../pages/CreateGateway"));
const GatewayDetails = async(() => import("../pages/GatewayDetails"));
const CreateDevice = async(() => import("../pages/CreateDevice"));

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

const CreateDeviceRoute = {
  name: "gatewayDetails",
  path: "/gateway/:id/create-device",
  component: CreateDevice,
};

export const homeRoutes = [
  CreateDeviceRoute,
  viewGatewayDetailsRoute,
  gatewayRoute,
  createGatewayRoute,
];
