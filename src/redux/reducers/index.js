import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import commonReducer from "./commonReducer";

export const rootReducer = combineReducers({
  themeReducer,
  common: commonReducer,
});
