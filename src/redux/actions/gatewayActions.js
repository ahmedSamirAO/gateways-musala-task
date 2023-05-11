import { GatewayActions } from "./types";

export const GetGateways = () => {
  return async (dispatch) => {
    const gateways = [
      {
        serialNumber: "1683758501346",
        name: "gateway 1",
        IPv4: "172.168.1.1",
        devices: [
          {
            uid: "1",
            vendor: "vendor 1",
            created_at: 1683758501350,
            status: "online",
          },
          {
            uid: "2",
            vendor: "vendor 1",
            created_at: 1683758501390,
            status: "offline",
          },
        ],
      },
      {
        serialNumber: "1683758601346",
        name: "gateway 2",
        IPv4: "172.168.1.1",
        devices: [
          {
            uid: "3",
            vendor: "vendor 2",
            created_at: 1683758511350,
            status: "online",
          },
        ],
      },
    ];
    setTimeout(() => {
      dispatch(saveGateways(gateways));
    }, 500);
  };
};

export const AddGateway = (gateway) => {
  return async (dispatch) => {
    dispatch(saveGateway(gateway));
  };
};

export const AddDevice = (gatewaySSN, device) => {
  return async (dispatch) => {
    dispatch(saveDevice(gatewaySSN, device));
  };
};

export const DeleteDevice = (gatewaySSN, uid) => {
  return async (dispatch) => {
    dispatch(removeDevice(gatewaySSN, uid));
  };
};

export const saveGateways = (gateways) => ({
  type: GatewayActions.SAVE_GATEWAYS,
  payload: gateways,
});

export const saveGateway = (gateway) => ({
  type: GatewayActions.ADD_GATEWAY,
  payload: gateway,
});

export const saveDevice = (gatewaySSN, device) => ({
  type: GatewayActions.ADD_DEVICE,
  payload: { gatewaySSN, device },
});

export const removeDevice = (gatewaySSN, uid) => ({
  type: GatewayActions.REMOVE_DEVICE,
  payload: { gatewaySSN, uid },
});
