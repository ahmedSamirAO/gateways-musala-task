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

    default:
      return state;
  }
}
