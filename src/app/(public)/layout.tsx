import { Box } from "@mui/material";

export default function MarketingLayout(props: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        boxShadow: 3,
        borderRadius: "8px",
      }}
    >
      {props.children}
    </Box>
  );
}
