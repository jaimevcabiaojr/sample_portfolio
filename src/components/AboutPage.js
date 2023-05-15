
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
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundImage: `url(${require('../images/IMG_20181013_172244.jpg')})`,
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
            {
              "  Hi Im Jaime  Vidanes Cabiao Jr, ive been a Technician almost Half of my life. hence we  run a Electronic Repair Shop  "
            }
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "white" }} variant="h5">
            {" "}
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
