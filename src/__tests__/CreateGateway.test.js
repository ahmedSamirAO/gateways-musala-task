import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components/macro";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import CreateGateway from "../pages/CreateGateway";
import { THEMES } from "../constants";
import createTheme from "../theme";
import store from "../redux/store/index";
import { HelmetProvider } from "react-helmet-async";
import { act } from "react-dom/test-utils";

describe("CreateGateway tests", () => {
  test("renders CreateGateway", () => {
    render(
      <Provider store={store}>
        <HelmetProvider>
          <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
            <CreateGateway />
          </ThemeProvider>
        </HelmetProvider>
      </Provider>
    );

    const nameField = screen.getByText("Name");
    expect(nameField).toBeInTheDocument();

    const IPv4Field = screen.getByText("IPv4");
    expect(IPv4Field).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "Add Gateway" });
    expect(addButton).toBeInTheDocument();
  });

  test("change fields text", async () => {
    render(
      <Provider store={store}>
        <HelmetProvider>
          <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
            <CreateGateway />
          </ThemeProvider>
        </HelmetProvider>
      </Provider>
    );

    const nameField = screen.getByRole("textbox", { name: "Name" });
    const IPv4Field = screen.getByRole("textbox", { name: "IPv4" });
    const addButton = screen.getByRole("button", { name: "Add Gateway" });

    await act(async () => {
      await fireEvent.change(nameField, { target: { value: "test name" } });
      await fireEvent.change(IPv4Field, { target: { value: "1.5.1" } });
      await fireEvent.click(addButton);
    });

    expect(nameField).toBeValid();
    expect(IPv4Field).toBeInvalid();

    const IPv4FieldError = screen.getByText("IPv4 not valid");
    expect(IPv4FieldError).toBeInTheDocument();
  });
});
