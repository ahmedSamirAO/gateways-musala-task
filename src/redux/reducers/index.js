import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import commonReducer from "./commonReducer";
import gatewayReducer from "./gatewayReducer";

export const rootReducer = combineReducers({
  themeReducer,
  common: commonReducer,
  gateways: gatewayReducer,
});
