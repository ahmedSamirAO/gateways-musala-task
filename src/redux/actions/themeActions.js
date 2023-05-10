import { ThemeActions } from "./types";

export function setTheme(value) {
  return {
    type: ThemeActions.THEME_SET,
    payload: value,
  };
}
