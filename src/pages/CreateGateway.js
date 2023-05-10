import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";

import {
  Card as MuiCard,
  Button as MuiButton,
  FormControl as MuiFormControl,
  CardContent,
  CardHeader as MuiCardHeader,
  Grid,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import TextInput from "../components/TextInput";

const StyledCard = styled(MuiCard)(spacing);

const FormControl = styled(MuiFormControl)(spacing);
const Button = styled(MuiButton)(spacing);

const Card = styled(StyledCard)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  border: unset;
  border-radius: 0;
  padding: 50px 29px 26px;
`;

const CardHeader = styled(MuiCardHeader)`
  padding-top: 0;

  .MuiCardHeader-title {
    font-size: 24px;
    font-weight: bold;
  }
`;

const CreateGateway = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Helmet title="Users" />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <Card mb={3} variant="outlined">
            <CardHeader title="Details" />
            <CardContent>
              <Formik
                initialValues={{
                  userName: "",
                  userEmail: "",
                  newPassword: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object().shape({
                  userName: Yup.string().min(3).required("Name is required"),
                  userEmail: Yup.string().email().required("Email is required"),
                  newPassword: Yup.string()
                    .required("Password is required")
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,15}$/,
                      "Password should contains at least one lowercase letter, uppercase letter, number, and special character"
                    ),
                  confirmPassword: Yup.string()
                    .oneOf(
                      [Yup.ref("newPassword"), null],
                      "Passwords must match"
                    )
                    .required("new password is required"),
                })}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting, resetForm }
                ) => {
                  try {
                    // TODO:dispatch action to update user profile
                    resetForm();
                  } catch (error) {
                    const message = error.message || "Something went wrong";

                    setStatus({ success: false });
                    setErrors({ submit: message });
                    setSubmitting(false);
                  }
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={4}>
                        <FormControl fullWidth variant="outlined">
                          <TextInput
                            type="password"
                            name="newPassword"
                            label="New Password"
                            value={values.newPassword}
                            errors={errors}
                            touched={touched}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} lg={4}>
                        <FormControl fullWidth variant="outlined">
                          <TextInput
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={values.confirmPassword}
                            errors={errors}
                            touched={touched}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} lg={4}>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            py={3}
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                          >
                            Change Password
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CreateGateway;
