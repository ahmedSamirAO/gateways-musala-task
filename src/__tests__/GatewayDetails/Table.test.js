import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Table from "../../components/GatewayDetails/Table";
import AppWrapper from "../../components/AppWrapper";

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
      <AppWrapper>
        <Table devices={gateway.devices} gatewaySSN={gateway.serialNumber} />
      </AppWrapper>
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

  test("Check Gateway Details Table Rows Number", async () => {
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
      <AppWrapper>
        <Table devices={gateway.devices} gatewaySSN={gateway.serialNumber} />
      </AppWrapper>
    );

    await waitFor(async () => {
      const tableCells = screen.getAllByRole("cell");
      const rowsNumber = tableCells.length / 5;

      expect(rowsNumber).toBe(2);
    });
  });
});
