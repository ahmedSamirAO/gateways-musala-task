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
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Table from "../../components/Gateway/Table";
import { THEMES } from "../../constants";
import createTheme from "../../theme";
import store from "../../redux/store/index";

describe("Gateway Table render", () => {
  test("renders Gateway Table", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
          <Table />
        </ThemeProvider>
      </Provider>
    );

    const serialNumberCell = screen.getByText("Serial Number");
    expect(serialNumberCell).toBeInTheDocument();

    const nameCell = screen.getByText("Name");
    expect(nameCell).toBeInTheDocument();

    const IPv4Cell = screen.getByText("IPv4");
    expect(IPv4Cell).toBeInTheDocument();

    const devicesNumberCell = screen.getByText("Devices Number");
    expect(devicesNumberCell).toBeInTheDocument();

    await waitFor(() => {
      const tableCells = screen.queryByRole("cell", {
        name: "1683758501346",
      });

      expect(tableCells).toBeInTheDocument();
    });
  });

  test("check create gateway button go to create page", async () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
          <Router history={history}>
            <Table />
          </Router>
        </ThemeProvider>
      </Provider>
    );

    await waitFor(async () => {
      const tableCells = screen.getAllByRole("cell");
      const tableButtonCell = within(tableCells[4]).getByRole("button");

      await fireEvent.click(tableButtonCell);
      expect(history.location.pathname).toBe("/gateway/1683758501346");
    });
  });
});
