import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";

const AllCompetitionsCard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <main style={{ width: "45%", backgroundColor: "#808080" }}>
          <h2>All Competitions</h2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item>xs=8</Item>
              </Grid>
              {/* <Grid item xs={6}>
                <Item>xs=4</Item>
              </Grid> */}
            </Grid>
          </Box>
        </main>
      </div>
    </div>
  );
};

export default AllCompetitionsCard;
