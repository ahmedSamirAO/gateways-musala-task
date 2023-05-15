import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components/macro";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Header from "../../components/Gateway/Header";
import { THEMES } from "../../constants";
import createTheme from "../../theme";

describe("Gateway Header", () => {
  test("renders Gateway Header", () => {
    render(
      <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
        <Header />
      </ThemeProvider>
    );

    const createGatewayText = screen.getByText(/Create Gateway/i);
    expect(createGatewayText).toBeInTheDocument();

    const createGatewayButton = screen.getByRole("button", {
      name: "CREATE",
    });
    expect(createGatewayButton).toBeInTheDocument();
  });

  test("check create gateway button go to create page", async () => {
    const history = createMemoryHistory();

    render(
      <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
        <Router history={history}>
          <Header />
        </Router>
      </ThemeProvider>
    );

    const createGatewayButton = screen.getByRole("button", {
      name: "CREATE",
    });
    expect(createGatewayButton).toBeInTheDocument();

    await fireEvent.click(createGatewayButton);

    expect(history.location.pathname).toBe("/create-gateway");
  });
});
