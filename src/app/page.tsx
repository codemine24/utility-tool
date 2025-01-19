import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} my={4}>
        <Grid size={8}>
          <Button
            variant="contained"
            component={Link}
            href="/weekly-payment"
            color="secondary"
          >
            Weekly Payment
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
