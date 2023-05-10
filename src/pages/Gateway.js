import React from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import Header from "../components/Gateway/Header";
import Table from "../components/Gateway/Table";

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const Gateway = () => {
  const dispatch = useDispatch();
  return (
    <MainContent>
      <Helmet title="Gateway" />

      <Header />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <Table />
        </Grid>
      </Grid>
    </MainContent>
  );
};

export default Gateway;
