import { Button, ButtonGroup, TextField } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

interface ITimeRowProps {
  errors: any;
  onTimeChange: (time: number) => void;
}
export const TimeRow = ({ errors, onTimeChange }: ITimeRowProps) => {
  const [rows, setRows] = React.useState([
    {
      hour: "",
      minute: "",
    },
  ]);

  const handleAdd = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index + 1, 0, {
      hour: "",
      minute: "",
    });
    setRows(newRows);
  };

  const handleDelete = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleChange = (
    index: number,
    value: string,
    key: "hour" | "minute"
  ) => {
    const newRows = [...rows];
    newRows[index][key] = value;
    setRows(newRows);
  };

  const calculateTime = () => {
    const totalMinutes = rows.reduce((acc, row) => {
      const rowHours = parseInt(row.hour) || 0;
      const rowMinutes = parseInt(row.minute) || 0;
      acc += rowHours * 60 + rowMinutes;
      return acc;
    }, 0);

    onTimeChange(totalMinutes);
  };

  React.useEffect(() => {
    calculateTime();
  }, [rows]);
  return (
    <>
      {rows.map((row, index) => (
        <Grid container spacing={2} key={index} mb={1}>
          <Grid size={5}>
            <TextField
              fullWidth
              id="hour"
              name="hour"
              label="Hours"
              size="small"
              value={row.hour}
              onChange={(e) =>
                handleChange(index, e.target.value as any, "hour")
              }
              error={Boolean(errors.hour)}
              helperText={errors.hour}
            />
          </Grid>
          <Grid size={5}>
            <TextField
              fullWidth
              id="minute"
              name="minute"
              label="Minutes"
              size="small"
              value={row.minute}
              onChange={(e) =>
                handleChange(index, e.target.value as any, "minute")
              }
              error={Boolean(errors.minute)}
              helperText={errors.minute}
            />
          </Grid>
          <Grid size={2} alignSelf="center">
            <ButtonGroup size="small" aria-label="Small button group">
              <Button variant="outlined" onClick={() => handleAdd(index)}>
                +
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(index)}
                disabled={rows.length === 1}
              >
                -
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
