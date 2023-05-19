import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Header from "../../components/GatewayDetails/Header";
import AppWrapper from "../../components/AppWrapper";

describe("Gateway Details Header", () => {
  test("renders Gateway Details Header", () => {
    render(
      <AppWrapper>
        <Header />
      </AppWrapper>
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
      <AppWrapper>
        <Router history={history}>
          <Header gateway={gateway} />
        </Router>
      </AppWrapper>
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
