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
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import TextInput from "../components/TextInput";
import { AddDevice } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";

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

const CreateDevice = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const id = history.location.pathname.split("/")[2];

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
                  vendor: "",
                  status: "online",
                }}
                validationSchema={Yup.object().shape({
                  vendor: Yup.string().min(3).required("vendor is required"),
                  status: Yup.string().required("status is required"),
                })}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting, resetForm }
                ) => {
                  try {
                    dispatch(
                      AddDevice(id, {
                        vendor: values.vendor,
                        status: values.status,
                      })
                    );
                    history.push(`/gateway/${id}`);
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
                            name="vendor"
                            label="Vendor"
                            value={values.vendor}
                            errors={errors}
                            touched={touched}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} lg={4}>
                        <FormControl fullWidth>
                          <Typography variant="caption">Status</Typography>
                          <Select
                            name="status"
                            id="status"
                            label="Status"
                            value={values.status}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            IconComponent={() => (
                              <ArrowDropDown color="primary" fontSize="large" />
                            )}
                            variant="standard"
                          >
                            <MenuItem value="online">online</MenuItem>
                            <MenuItem value="offline">offline</MenuItem>
                          </Select>
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
                            Add Device
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

export default CreateDevice;
