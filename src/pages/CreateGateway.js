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
import { AddGateway } from "../redux/actions";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

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
                  name: "",
                  IPv4: "",
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string().min(3).required("Name is required"),
                  IPv4: Yup.string()
                    .required("IPv4 is required")
                    .matches(
                      "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
                      "IPv4 not valid"
                    ),
                })}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting, resetForm }
                ) => {
                  try {
                    dispatch(
                      AddGateway({
                        name: values.name,
                        IPv4: values.IPv4,
                      })
                    );
                    history.push("/gateways");
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
                            type="text"
                            name="name"
                            label="Name"
                            value={values.name}
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
                            type="text"
                            name="IPv4"
                            label="IPv4"
                            value={values.IPv4}
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
                            Add Gateway
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
