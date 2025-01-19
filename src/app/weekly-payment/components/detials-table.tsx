import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
  } from "@mui/material";
  
  interface IDetailsTableProps {
    project_name: string;
    totalHour: number;
    commission: string;
    totalPayable: number;
    extimatedEarnings: number;
    exchange_rate: string;
    upworkCommissionAmount: number;
    projectOwnerCommissionAmount: number;
  }
  
  export const DetailsTable = ({
    project_name,
    totalHour,
    commission,
    totalPayable,
    extimatedEarnings,
    exchange_rate,
    upworkCommissionAmount,
    projectOwnerCommissionAmount,
  }: IDetailsTableProps) => {
    return (
      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell>{project_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hours</TableCell>
                <TableCell>{totalHour.toFixed(3)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Commission</TableCell>
                <TableCell>{commission}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Upwork Comission</TableCell>
                <TableCell>
                  <Typography variant="body2" color={"error"}>
                    ${upworkCommissionAmount.toFixed(3)}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Project Owner Commission</TableCell>
                <TableCell>
                  <Typography variant="body2" color={"error"}>
                    $-{projectOwnerCommissionAmount.toFixed(3)}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Payable</TableCell>
                <TableCell>
                  <Typography variant="body2" color={"primary"} fontWeight={"bold"}>
                    ${totalPayable.toFixed(3)}
                  </Typography>
                </TableCell>
              </TableRow>
              {exchange_rate && (
                <TableRow>
                  <TableCell>Extimate Earnings</TableCell>
                  <TableCell>৳{extimatedEarnings}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };