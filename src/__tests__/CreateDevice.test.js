import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components/macro";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import CreateDevice from "../pages/CreateDevice";
import { THEMES } from "../constants";
import createTheme from "../theme";
import store from "../redux/store/index";
import { HelmetProvider } from "react-helmet-async";
import { act } from "react-dom/test-utils";
import AppWrapper from "../components/AppWrapper";

describe("CreateDevice tests", () => {
  test("renders CreateDevice", () => {
    const history = createMemoryHistory();
    history.push("/gateway/1683758501346/create-device");

    render(
      <Provider store={store}>
        <HelmetProvider>
          <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
            <Router history={history}>
              <CreateDevice />
            </Router>
          </ThemeProvider>
        </HelmetProvider>
      </Provider>
    );

    const vendorField = screen.getByText("Vendor");
    expect(vendorField).toBeInTheDocument();

    const statusField = screen.getByText("Status");
    expect(statusField).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "Add Device" });
    expect(addButton).toBeInTheDocument();
  });

  test("change CreateDevice fields text", async () => {
    const history = createMemoryHistory();
    history.push("/gateway/1683758501346/create-device");

    render(
      <AppWrapper>
        <Router history={history}>
          <CreateDevice />
        </Router>
      </AppWrapper>
    );

    const vendorField = screen.getByRole("textbox", { name: "Vendor" });
    const addButton = screen.getByRole("button", { name: "Add Device" });

    await act(async () => {
      await fireEvent.change(vendorField, { target: { value: "te" } });
      await fireEvent.click(addButton);
    });

    expect(vendorField).toBeInvalid();

    const vendorFieldError = screen.getByText(
      "vendor must be at least 3 characters"
    );
    expect(vendorFieldError).toBeInTheDocument();
  });
});
