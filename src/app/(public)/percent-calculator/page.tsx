"use client";
import { calculatePercentage } from "@/helper/helper";
import { Icon } from "@iconify/react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import {
  initialPercentage,
  initialPercentageCalculation,
  IPercentageCalculation,
} from "../weekly-payment/utils/weekly-paymen.types";
import { PercentageDetailsTable } from "./components/detials-table";

export default function WeeklyPayment() {
  const [calculatedValue, setCalculatedValue] =
    React.useState<IPercentageCalculation>(initialPercentageCalculation);

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
    initialValues: initialPercentage,
    validate: (values) => {
      const errors: any = {};
      if (!values.total_earning) {
        errors.total_earning = "This field is required";
      }
      if (!values.total_expense) {
        errors.total_expense = "This field is required";
      }
      if (!values.fund) {
        errors.fund = "This field is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      const calculatedValue = calculatePercentage(
        values.total_earning,
        values.total_expense,
        values.fund
      );
      setCalculatedValue(calculatedValue);
    },
  });

  const handleReset = () => {
    setValues(initialPercentage);
    setCalculatedValue(initialPercentageCalculation);
  };
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

        <Typography variant="h5">% Calculator</Typography>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <TextField
              fullWidth
              id="total_earning"
              name="total_earning"
              label="Total Earning ৳"
              size="small"
              value={values.total_earning}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.total_earning && Boolean(errors.total_earning)}
              helperText={touched.total_earning && errors.total_earning}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="total_expense"
              name="total_expense"
              label="Total Expense ৳"
              size="small"
              value={values.total_expense}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.total_expense && Boolean(errors.total_expense)}
              helperText={touched.total_expense && errors.total_expense}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              id="fund"
              name="fund"
              label="Fund (%)"
              size="small"
              value={values.fund}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.fund && Boolean(errors.fund)}
              helperText={touched.fund && errors.fund}
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
      {calculatedValue.rapuCommission && (
        <PercentageDetailsTable
          totalEarning={calculatedValue.totalEarning}
          totalExpense={calculatedValue.totalExpense}
          amountAfterExpense={calculatedValue.amountAfterExpense}
          fundPercentage={values.fund}
          fund={calculatedValue.fund}
          amountAfterFund={calculatedValue.amountAfterFund}
          fazlyCommission={calculatedValue.fazlyCommission}
          rapuCommission={calculatedValue.rapuCommission}
          donation={calculatedValue.donation}
        />
      )}
    </Box>
  );
}
