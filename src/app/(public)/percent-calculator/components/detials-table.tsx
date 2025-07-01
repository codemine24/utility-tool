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
  totalEarning: string;
  totalExpense: string;
  amountAfterExpense: string;
  fundPercentage: string;
  fund: string;
  amountAfterFund: string;
  fazlyCommission: string;
  rapuCommission: string;
  donation: string;
}

export const PercentageDetailsTable = ({
  totalEarning,
  totalExpense,
  amountAfterExpense,
  fundPercentage,
  fund,
  amountAfterFund,
  fazlyCommission,
  rapuCommission,
  donation,
}: IDetailsTableProps) => {
  return (
    <Box mt={4}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>Total Earning</TableCell>
              <TableCell>৳{totalEarning.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Expense</TableCell>
              <TableCell>
                <Typography variant="body2" color="error">
                  ৳{totalExpense}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Donation (1%)</TableCell>
              <TableCell>
                <Typography variant="body2" color="error">
                  ৳{donation}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Amount After Expense</TableCell>
              <TableCell>৳{amountAfterExpense}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fund ({fundPercentage}%)</TableCell>
              <TableCell>৳{fund}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Amount After Fund</TableCell>
              <TableCell>৳{amountAfterFund}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fazly (58%)</TableCell>
              <TableCell>
                <Typography variant="body2" color="success">
                  ৳{fazlyCommission}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rapu (42%)</TableCell>
              <TableCell>
                <Typography variant="body2" color="success">
                  ৳{rapuCommission}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
