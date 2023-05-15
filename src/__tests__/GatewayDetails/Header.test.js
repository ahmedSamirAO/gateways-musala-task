import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components/macro";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Header from "../../components/GatewayDetails/Header";
import { THEMES } from "../../constants";
import createTheme from "../../theme";

describe("Gateway Details Header", () => {
  test("renders Gateway Details Header", () => {
    render(
      <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
        <Header />
      </ThemeProvider>
    );

    const createGatewayText = screen.getByText(/Create Device/i);
    expect(createGatewayText).toBeInTheDocument();

    const createGatewayButton = screen.getByRole("button", {
      name: "CREATE",
    });
    expect(createGatewayButton).toBeInTheDocument();
  });

  test("check create device button go to create page", async () => {
    const history = createMemoryHistory();

    const gateway = {
      serialNumber: "1683758501346",
      name: "gateway 1",
      IPv4: "172.168.1.1",
      devices: [
        {
          uid: "1",
          vendor: "vendor 1",
          created_at: 1683758501350,
          status: "online",
        },
        {
          uid: "2",
          vendor: "vendor 1",
          created_at: 1683758501390,
          status: "offline",
        },
      ],
    };

    render(
      <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
        <Router history={history}>
          <Header gateway={gateway} />
        </Router>
      </ThemeProvider>
    );

    const createGatewayButton = screen.getByRole("button", {
      name: "CREATE",
    });
    expect(createGatewayButton).toBeInTheDocument();

    await fireEvent.click(createGatewayButton);

    expect(history.location.pathname).toBe(
      "/gateway/1683758501346/create-device"
    );
  });
});
