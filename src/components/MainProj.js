import { CenterFocusStrong, Margin } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { grey, red, yellow } from "@mui/material/colors";
import React, { Component } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import ProjCard1 from "./ProjCard1";
import ProjCard2 from "./ProjCard2";
import ProjCard3 from "./ProjCard3";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Projects() {
  return (
    <Paper  
      sx={{
        p: 2,
        margin: "auto",
        mt:20,
        mb:20,
        maxWidth: 1300,
        // height: 650,
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: grey[500],
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundImage: `url(${require('../images/image.jpg')})`,
        // backgroundColor: (theme) =>
        // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // display:'flex',alignItems:'center',justifyContent:'center'
      }}
    >
      <Grid sx={{ml:3}} container spacing={2}>
        <Grid item lg={12} sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: 500, color: "white" ,mt:5,mb:5}} variant="h1">
            {" "}
            My Sample Projects
          </Typography>
         
        </Grid>

        <Grid item lg={4} md={6} sm={12} sx={{mb:5}}>
       <ProjCard1/>

        </Grid>
        <Grid item lg={4} md={6} sm={12} sx={{mb:5}}>
       
        <ProjCard2/>
        </Grid>
        <Grid item lg={4} md={6} sm={12} sx={{mb:5}}>
       
        <ProjCard3/>
        </Grid>

       
        {/* <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
    </Paper>
  );
}
