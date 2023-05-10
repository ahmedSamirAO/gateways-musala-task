import React, { forwardRef } from "react";
import { TextField as MuiTextField } from "@material-ui/core";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { withStyles } from "@material-ui/core/styles";

const TextField = styled(MuiTextField)(spacing);

const StyledTextField = withStyles({
  root: {
    marginBottom: "20px",

    "& .MuiOutlinedInput-root": {
      "& input": {
        padding: "15px 22px",
        backgroundColor: "#f6f6f7",
        borderRadius: "2px",
        fontSize: "14px",
        fontWeight: "normal",
        letterSpacing: "-0.35px",
        textAlign: "left",
        color: "#0f1923",
        fontFamily: "Inter",
      },
      "& fieldset": {
        borderRadius: 0,
      },
      "&.Mui-focused fieldset": {
        border: "unset !important",
      },
    },
  },
})(TextField);

const TextInput = forwardRef(
  (
    {
      placeholder = "",
      type = "text",
      name,
      label = "",
      value,
      errors,
      touched,
      onChange,
      onBlur,

      fullWidth = true,
      variant = "outlined",
    },
    ref
  ) => (
    <StyledTextField
      placeholder={placeholder}
      type={type}
      name={name}
      label={label}
      value={value}
      error={Boolean(touched[name] && errors[name])}
      fullWidth={fullWidth}
      helperText={touched[name] && errors[name]}
      onBlur={onBlur}
      onChange={onChange}
      className="custom-text-field"
      variant={variant}
    />
  )
);

export default TextInput;
