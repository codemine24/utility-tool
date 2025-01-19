import { Button, InputAdornment, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} my={4}>
        <Grid size={12}>
          <TextField
            id="outlined-basic"
            label="Search tools"
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="iconamoon:search-thin" height={24} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Button
            variant="contained"
            component={Link}
            href="/weekly-payment"
            color="secondary"
          >
            Weekly Payment
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Button
            variant="contained"
            component={Link}
            href="/weekly-payment"
            color="secondary"
          >
            Demo Tool
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Button
            variant="contained"
            component={Link}
            href="/weekly-payment"
            color="secondary"
          >
            % Calculator
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
