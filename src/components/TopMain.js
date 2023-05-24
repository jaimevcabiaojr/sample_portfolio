import { CenterFocusStrong, Margin, Public } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { grey, red, yellow } from "@mui/material/colors";
import React, { Component } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Sum() {
  return (
    <Paper
      id="home"
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
        backgroundImage: `url(${require("../images/img_elektroniikka-e1550203651118.jpg")})`,

        // backgroundColor: (theme) =>
        // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={12} md= {6} sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: 500, color: "white", mt: 5, mb: 5 }}
            variant="h1"
          >
            {"Welcome My page "}
            <h1>
              <span></span>
            </h1>
          </Typography>
        </Grid>
        <Grid item lg={12} sx={{ textAlign: "center", mb: 5 }}>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            Hi Thank You For Taking The Time On Checking My Website
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            This Site is a Testament that Everything can be Learned
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            Four Months Ago I Have No Knowledge in HTML Css or Javascript
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            And By the help Of Kodego , And with My Endless Search For Self
            Improvement ,
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            Perseverance,Hard Work ,100% Attendace and Multiple Code Reading .
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            I Was Able to Gradutate And be A part of top 5 of Our class.
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            Sometimes It only takes One Small Step in Making Your
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
            Greatest Dream Come True.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
