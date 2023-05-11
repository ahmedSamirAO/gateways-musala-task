import React from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components/macro";

import Header from "../components/GatewayDetails/Header";
import Details from "../components/GatewayDetails/Details";
import Table from "../components/GatewayDetails/Table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { GetGateways } from "../redux/actions";

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

const GatewayDetails = () => {
  const dispatch = useDispatch();

  const gateways = useSelector(({ gateways }) => gateways.gateways);

  const [gateway, setGateway] = useState(null);

  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    if (!gateways.length) {
      // Should get the gateway from the API
      dispatch(GetGateways());
    }
  }, [dispatch, gateways]);

  useEffect(() => {
    const gateway = gateways.find((gateway) => gateway.serialNumber === id);

    setGateway(gateway);
  }, [gateways, id]);

  return (
    <MainContent>
      <Helmet title="Gateway" />

      {gateway && (
        <React.Fragment>
          <Header gateway={gateway} />

          <Grid container spacing={6}>
            <Grid item xs={12} lg={12}>
              <Details gateway={gateway} />
            </Grid>

            <Grid item xs={12} lg={12}>
              <Table
                devices={gateway.devices}
                gatewaySSN={gateway.serialNumber}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </MainContent>
  );
};

export default GatewayDetails;
