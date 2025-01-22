import { Box } from "@mui/material";
import * as React from "react";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return <Box>{props.children}</Box>;
}
