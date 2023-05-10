import React from "react";
import styled from "styled-components/macro";
import {
  Button as MuiButton,
  Grid as MuiGrid,
  Typography as MuiTypography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { useHistory } from "react-router-dom";

const Typography = styled(MuiTypography)(spacing);
const Grid = styled(MuiGrid)(spacing);
const Button = styled(MuiButton)(spacing);

const HeadingGrid = styled(Grid)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
`;

function GatewayHeader() {
  const history = useHistory();

  const openCreatePage = () => {
    history.push("/create-gateway");
  };

  return (
    <HeadingGrid
      justify="space-between"
      alignItems="center"
      container
      spacing={0}
      mb={10}
      pl={10}
      pr={4}
      py={6}
    >
      <Typography variant="h3">Create Gateway</Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        my={2}
        py={3}
        onClick={openCreatePage}
      >
        CREATE
      </Button>
    </HeadingGrid>
  );
}

export default GatewayHeader;
