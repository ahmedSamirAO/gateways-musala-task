import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Header from "../../components/Gateway/Header";
import AppWrapper from "../../components/AppWrapper";

describe("Gateway Header", () => {
  test("renders Gateway Header", () => {
    render(
      <AppWrapper>
        <Header />
      </AppWrapper>
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
      <AppWrapper>
        <Router history={history}>
          <Header />
        </Router>
      </AppWrapper>
    );

    const createGatewayButton = screen.getByRole("button", {
      name: "CREATE",
    });
    expect(createGatewayButton).toBeInTheDocument();

    await fireEvent.click(createGatewayButton);

    expect(history.location.pathname).toBe("/create-gateway");
  });
});
