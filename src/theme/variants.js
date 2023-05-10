import merge from "deepmerge";
import { green, indigo } from "@material-ui/core/colors";
import { THEMES } from "../constants";

const customBlue = {
  50: "#e9f0fb",
  100: "#c8daf4",
  200: "#a3c1ed",
  300: "#7ea8e5",
  400: "#6395e0",
  500: "#4782da",
  600: "#407ad6",
  700: "#376fd0",
  800: "#2f65cb",
  900: "#2052c2 ",
};

const customRed = {
  50: "#eb0029",
};

const defaultVariant = {
  name: THEMES.DEFAULT,
  palette: {
    type: "light",
    primary: {
      main: customRed[50],
      text: customRed[50],
      contrastText: "#FFF",
    },
    secondary: {
      main: customBlue[500],
      contrastText: "#FFF",
    },
    background: {
      default: "#f6f6f7",
      paper: "#FFF",
    },
    offWhite: {
      main: "#f6f6f7",
    },
    grey: {
      main: "#fafafa",
      inputBg: "#ebebeb",
    },
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK,
  palette: {
    type: "dark",
    primary: {
      main: customBlue[600],
      contrastText: "#FFF",
    },
    background: {
      default: "#1B2635",
      paper: "#233044",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
  },
});

const lightVariant = merge(defaultVariant, {
  name: THEMES.LIGHT,
  palette: {
    type: "light",
  },
});

const blueVariant = merge(defaultVariant, {
  name: THEMES.BLUE,
  palette: {
    type: "light",
  },
});

const greenVariant = merge(defaultVariant, {
  name: THEMES.GREEN,
  palette: {
    primary: {
      main: green[800],
      contrastText: "#FFF",
    },
    secondary: {
      main: green[500],
      contrastText: "#FFF",
    },
  },
});

const indigoVariant = merge(defaultVariant, {
  name: THEMES.INDIGO,
  palette: {
    primary: {
      main: indigo[600],
      contrastText: "#FFF",
    },
    secondary: {
      main: indigo[400],
      contrastText: "#FFF",
    },
  },
});

const variants = [
  defaultVariant,
  darkVariant,
  lightVariant,
  blueVariant,
  greenVariant,
  indigoVariant,
];

export default variants;
