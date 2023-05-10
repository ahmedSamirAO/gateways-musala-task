import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";

import * as Actions from "../redux/actions";

const StyledAlert = withStyles((theme) => ({
  root: {
    position: "fixed",
    top: "170px",
    maxWidth: "90%",
    minWidth: "300px",
    zIndex: "9999",
    "& .message": {
      fontSize: "18px",
      fontFamily: "Inter",
      color: theme.palette.primary.main,
      whiteSpace: "pre-line",
    },
  },
}))(MuiAlert);

function ErrorAlert() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const isError = useSelector(({ common }) => common.isError);
  const errorMessage = useSelector(({ common }) => common.errorMessage);

  const closeErrorAlert = () => {
    dispatch(Actions.saveErrorMessage({ isError: false, errorMessage: "" }));
  };

  useEffect(() => {
    setShow(isError);
  }, [isError]);

  return (
    <>
      {show && (
        <Grid container spacing={0} alignItems="center" justify="center">
          <StyledAlert severity="error" onClose={closeErrorAlert}>
            <Typography className="message">{errorMessage}</Typography>
          </StyledAlert>
        </Grid>
      )}
    </>
  );
}

export default ErrorAlert;
