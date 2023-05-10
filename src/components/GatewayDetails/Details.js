import React from "react";
import styled from "styled-components/macro";
import {
  Grid as MuiGrid,
  Typography as MuiTypography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);
const Grid = styled(MuiGrid)(spacing);

const HeadingGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
`;

function Details({ gateway }) {
  return (
    <HeadingGrid
      justify="space-between"
      alignItems="center"
      container
      spacing={0}
      mb={5}
      pl={10}
      pr={4}
      py={6}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h4" display="inline" pr={2}>
          Serial Number:
        </Typography>
        <Typography display="inline">{gateway.serialNumber}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} pr={2}>
        <Typography variant="h4" display="inline" pr={2}>
          name:{" "}
        </Typography>
        <Typography display="inline">{gateway.name}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h4" display="inline" pr={2}>
          IPv4:{" "}
        </Typography>{" "}
        <Typography display="inline">{gateway.IPv4}</Typography>
      </Grid>
    </HeadingGrid>
  );
}

export default Details;
