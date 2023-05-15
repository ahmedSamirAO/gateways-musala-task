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

import Table from "../../components/GatewayDetails/Table";
import { THEMES } from "../../constants";
import createTheme from "../../theme";
import store from "../../redux/store/index";

describe("Gateway Details Table render", () => {
  test("renders Gateway Details Table", async () => {
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
          <Table devices={gateway.devices} gatewaySSN={gateway.serialNumber} />
        </ThemeProvider>
      </Provider>
    );

    const UIDCell = screen.getByText("UID");
    expect(UIDCell).toBeInTheDocument();

    const vendorCell = screen.getByText("Vendor");
    expect(vendorCell).toBeInTheDocument();

    const creationDateCell = screen.getByText("Creation Date");
    expect(creationDateCell).toBeInTheDocument();

    const statusCell = screen.getByText("Status");
    expect(statusCell).toBeInTheDocument();
  });
});
