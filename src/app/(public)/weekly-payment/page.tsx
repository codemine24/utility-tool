"use client";
import { calculateWeeklyPayment } from "@/helper/helper";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { DetailsTable } from "./components/detials-table";
import { TimeRow } from "./components/time-row";
import { initialWeeklyPayment } from "./utils/weekly-paymen.types";

export default function WeeklyPayment() {
  const [calculatedValue, setCalculatedValue] = React.useState<{
    totalPayable: number;
    totalHour: number;
    estimatedEarnings: number;
    upworkCommissionAmount: number;
    projectOwnerCommissionAmount: number;
  }>({
    totalHour: 0,
    totalPayable: 0,
    estimatedEarnings: 0,
    upworkCommissionAmount: 0,
    projectOwnerCommissionAmount: 0,
  });
  const [ignoreUpworkCommission, setIgnoreUpworkCommission] =
    React.useState(false);

  const {
    values,
    setValues,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialWeeklyPayment,
    validate: (values) => {
      const errors: any = {};
      if (!values.commission) {
        errors.commission = "This field is required";
      }
      if (!values.hourly_rate) {
        errors.hourly_rate = "This field is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      const calculatedValue = calculateWeeklyPayment(
        values.minute,
        values.commission,
        values.hourly_rate,
        values.exchange_rate,
        ignoreUpworkCommission
      );
      setCalculatedValue(calculatedValue);
    },
  });

  const handleReset = () => {
    setValues(initialWeeklyPayment);
    setCalculatedValue((pre) => ({
      ...pre,
      totalHour: 0,
    }));
  };

  React.useEffect(() => {
    const calculatedValue = calculateWeeklyPayment(
      values.minute,
      values.commission,
      values.hourly_rate,
      values.exchange_rate,
      ignoreUpworkCommission
    );
    setCalculatedValue(calculatedValue);
  }, [ignoreUpworkCommission]);

  return (
    <Box>
      <Stack spacing={2} direction="row" mb={2}>
        <Button
          variant="outlined"
          size="small"
          component={Link}
          href="/"
          title="Return home"
        >
          ⏎
        </Button>
        <Button
          variant="outlined"
          size="small"
          title="Reset"
          onClick={handleReset}
        >
          <Icon icon="system-uicons:reset" />
        </Button>
        <Button size="small" title="Check to ignore Upwork %" variant="outlined">
          <Checkbox
            checked={ignoreUpworkCommission}
            onChange={(e) => setIgnoreUpworkCommission(e.target.checked)}
            size="small"
          />
        </Button>

        <Typography variant="h5">Weekly Payment</Typography>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <TextField
              fullWidth
              id="project_name"
              name="project_name"
              label="Project/ Client Name"
              size="small"
              value={values.project_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="exchange_rate"
              name="exchange_rate"
              label="Exchange Rate"
              size="small"
              value={values.exchange_rate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              id="commission"
              name="commission"
              label="Commission"
              size="small"
              value={values.commission}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.commission && Boolean(errors.commission)}
              helperText={touched.commission && errors.commission}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="hourly_rate"
              name="hourly_rate"
              label="Hourly Rate"
              size="small"
              value={values.hourly_rate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.hourly_rate && Boolean(errors.hourly_rate)}
              helperText={touched.hourly_rate && errors.hourly_rate}
            />
          </Grid>
          <Grid size={12}>
            <TimeRow
              errors={errors}
              value={values.minute}
              onTimeChange={(time: number) => setFieldValue("minute", time)}
            />
          </Grid>
          <Grid size={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Table for displaying submitted data */}
      {calculatedValue.totalHour > 0 && (
        <DetailsTable
          project_name={values.project_name}
          totalHour={calculatedValue.totalHour}
          hourlyRate={values.hourly_rate}
          commission={values.commission}
          totalPayable={calculatedValue.totalPayable}
          estimatedEarnings={calculatedValue.estimatedEarnings}
          exchange_rate={values.exchange_rate}
          upworkCommissionAmount={calculatedValue.upworkCommissionAmount}
          projectOwnerCommissionAmount={
            calculatedValue.projectOwnerCommissionAmount
          }
        />
      )}
    </Box>
  );
}
