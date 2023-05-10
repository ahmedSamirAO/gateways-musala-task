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
      color: theme.palette.success.main,
      whiteSpace: "pre-line",
    },
  },
}))(MuiAlert);

function SuccessAlert() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const isSuccess = useSelector(({ common }) => common.isSuccess);
  const successMessage = useSelector(({ common }) => common.successMessage);

  useEffect(() => {
    setShow(isSuccess);

    if (isSuccess) {
      setTimeout(() => {
        dispatch(
          Actions.saveSuccessMessage({ isSuccess: false, successMessage: "" })
        );
      }, 5000);
    }
  }, [dispatch, isSuccess]);

  return (
    <>
      {show && (
        <Grid container spacing={0} alignItems="center" justify="center">
          <StyledAlert severity="success">
            <Typography className="message">{successMessage}</Typography>
          </StyledAlert>
        </Grid>
      )}
    </>
  );
}

export default SuccessAlert;
