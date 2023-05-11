import { GatewayActions } from "../actions/types";

const initialState = {
  gateways: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case GatewayActions.SAVE_GATEWAYS:
      return {
        ...state,
        gateways: actions.payload,
      };
    case GatewayActions.ADD_GATEWAY:
      return {
        ...state,
        gateways: [
          {
            ...actions.payload,
            devices: [],
            serialNumber: new Date().getTime().toString(),
          },
          ...state.gateways,
        ],
      };
    case GatewayActions.ADD_DEVICE:
      const gateways = state.gateways.map((gateway) => {
        if (gateway.serialNumber === actions.payload.gatewaySSN) {
          gateway.devices.unshift({
            ...actions.payload.device,
            uid: new Date().getTime().toString(),
            created_at: new Date().getTime(),
          });
        }
        return gateway;
      });
      return {
        ...state,
        gateways: [...gateways],
      };
    case GatewayActions.REMOVE_DEVICE:
      const newGateways = state.gateways.map((gateway) => {
        if (gateway.serialNumber === actions.payload.gatewaySSN) {
          const devices = gateway.devices.filter(
            (device) => device.uid !== actions.payload.uid
          );
          gateway.devices = [...devices];
        }
        return gateway;
      });
      return {
        ...state,
        gateways: [...newGateways],
      };

    default:
      return state;
  }
}
