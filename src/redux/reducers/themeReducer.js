import { THEMES } from "../../constants";
import { ThemeActions } from "../actions/types";

const initialState = {
  currentTheme: THEMES.DEFAULT,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case ThemeActions.THEME_SET:
      return {
        ...state,
        currentTheme: actions.payload,
      };

    default:
      return state;
  }
}
