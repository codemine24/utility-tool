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
  estimatedEarnings: number;
  exchange_rate: string;
  upworkCommissionAmount: number;
  projectOwnerCommissionAmount: number;
  hourlyRate: string;
}

export const DetailsTable = ({
  project_name,
  totalHour,
  commission,
  totalPayable,
  estimatedEarnings,
  exchange_rate,
  upworkCommissionAmount,
  projectOwnerCommissionAmount,
  hourlyRate,
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
              <TableCell>Total amount (Before Upwork Commission)</TableCell>
              <TableCell>
                <Typography variant="body2">
                  ${(totalHour * Number(hourlyRate)).toFixed(3)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Upwork commission (10%)</TableCell>
              <TableCell>
                <Typography variant="body2" color={"error"}>
                  ${upworkCommissionAmount.toFixed(3)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gross Amount (After Upwork Commission)</TableCell>
              <TableCell>
                <Typography variant="body2">
                  ${(projectOwnerCommissionAmount + totalPayable).toFixed(3)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Project owner commission ({commission}%)</TableCell>
              <TableCell>
                <Typography variant="body2" color={"error"}>
                  $-{projectOwnerCommissionAmount.toFixed(3)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Payable</TableCell>
              <TableCell>
                <Typography
                  variant="body2"
                  color={"primary"}
                  fontWeight={"bold"}
                >
                  ${totalPayable.toFixed(3)}
                </Typography>
              </TableCell>
            </TableRow>
            {exchange_rate && (
              <TableRow>
                <TableCell>Estimate Earnings</TableCell>
                <TableCell>৳{estimatedEarnings.toFixed(3)}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
