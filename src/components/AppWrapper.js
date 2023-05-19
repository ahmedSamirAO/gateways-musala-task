import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "../redux/store/index";
import createTheme from "../theme";
import { THEMES } from "../constants";

const AppWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
          {children}
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  );
};

export default AppWrapper;
