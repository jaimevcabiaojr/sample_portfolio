import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { grey } from '@mui/material/colors';
// import  SwipeableTextMobileStepper from "./Carousel";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1500,
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: grey[500]
        // backgroundColor: (theme) =>
          // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
;
          {/* <SwipeableTextMobileStepper/> */}
        </Grid>
        
      </Grid>
    </Paper>
  );
}