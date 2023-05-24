import { CenterFocusStrong, Margin } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { grey, red, yellow } from "@mui/material/colors";
import React, { Component } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Sum() {
  return (
    <Paper
      id="about"
      sx={{
        p: 2,
        margin: "auto",
        mt: 20,
        mb: 20,
        maxWidth: 1300,
        // height: 650,
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: grey[500],
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundImage: `url(${require("../images/IMG_20181013_172244.jpg")})`,
        // backgroundColor: (theme) =>
        // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={12} sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: 500, color: "white", mt: 5, mb: 5 }}
            variant="h1"
          >
            {"About Me "}
          </Typography>
        </Grid>
        <Grid item lg={12} sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{ textAlign: "center", fontWeight: 500, color: "white" }}
            variant="h5"
          >
            {"My name is Jaime V Cabiao Jr and I am a Web Developer."}
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" I am passionate about Programming and I believe that "}
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {"Everything is achievable With Perseverance and Hardwork . "}
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {"I am committed to Self Improvement and "}
           
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {"I strive to be the Best Programmer as i could be."}
           
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
           
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
                     </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
           
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
