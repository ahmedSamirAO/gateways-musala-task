import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components/macro";
import { Provider } from "react-redux";

import Details from "../../components/GatewayDetails/Details";
import { THEMES } from "../../constants";
import createTheme from "../../theme";
import store from "../../redux/store/index";

describe("Gateway Details Details render", () => {
  test("renders Gateway Details Details", async () => {
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
      <Provider store={store}>
        <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
          <Details gateway={gateway} />
        </ThemeProvider>
      </Provider>
    );

    const serialNumberCell = screen.getByRole("heading", {
      name: /Serial Number:/i,
      level: 4,
    });
    expect(serialNumberCell).toBeInTheDocument();

    const serialNumber = screen.getByText(gateway.serialNumber);
    expect(serialNumber).toBeInTheDocument();

    const nameCell = screen.getByRole("heading", { name: /Name:/i, level: 4 });
    expect(nameCell).toBeInTheDocument();

    const name = screen.getByText(gateway.name);
    expect(name).toBeInTheDocument();

    const IPv4Cell = screen.getByRole("heading", { name: /IPv4:/i, level: 4 });
    expect(IPv4Cell).toBeInTheDocument();

    const IPv4 = screen.getByText(gateway.IPv4);
    expect(IPv4).toBeInTheDocument();
  });
});
