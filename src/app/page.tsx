"use client";
import { Icon } from "@iconify/react";
import { Button, InputAdornment, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React from "react";

const projects = [
  { href: "weekly-payment", name: "Weekly Payment" },
  { href: "percent-calculator", name: "% Calculator" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  const handleChange = (event: any) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(event.target.value);
    const filteredProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(query)
    );
    setFilteredProjects(filteredProjects);
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} my={4}>
        <Grid size={12}>
          <TextField
            id="outlined-basic"
            label="Search tools"
            variant="outlined"
            fullWidth
            value={searchQuery}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="iconamoon:search-thin" height={24} />
                  </InputAdornment>
                ),
              },
            }}
            onChange={handleChange}
          />
        </Grid>
        {filteredProjects.map((project) => (
          <Grid size={{ xs: 12, md: 4 }} key={project.name}>
            <Button
              variant="contained"
              component={Link}
              href={project.href}
              color="secondary"
            >
              {project.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
