import logo from "./logo.svg";
import "./App.css";
import { AppBar, Container, Box } from "@mui/material";
import ResponsiveAppBar, { NavbarMUI } from "./components/AppBar";
import { Component } from "react";
import { Button, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopMain from "./components/TopMain";
import AppFooter from "./components/AppFooter";
import Sum from "./components/TopMain";
import ComplexGrid from "./components/MiddleMain";
import { blue, green, grey, pink, red, yellow } from "@mui/material/colors";
import Projects from "./components/MainProj";
import AboutPage from "./components/AboutPage";

// import RecipeReviewCard from "./components/ProjCard1";
// import SwipeableTextMobileStepper from "./components/Carousel";

function App() {
  return (
    <Box >
    <Box sx={{ backgroundColor: yellow[800] }}>
      <NavbarMUI />
      <Box sx={{ m: 5 }}>
        <Sum />
        <Projects/>
        {/* <RecipeReviewCard/> */}
{/* <SwipeableTextMobileStepper/> */}
        
        {/* <ComplexGrid /> */}
       <AboutPage/>
      </Box>
      <AppFooter />
    </Box>
    </Box>
  );
}

export default App;
