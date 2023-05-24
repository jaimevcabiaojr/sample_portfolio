import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey, red, yellow } from "@mui/material/colors";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Projects from "./MainProj";


export const NavbarMUI = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{backgroundColor: grey[500] ,}} position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ mr: 2, display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: "inherit",
              textDecoration: "none",
              display: { xs: "none", md: "flex" },
            }}
          >
            My WebSite
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button sx={{ color: "white" }} href="#home">
              Home
            </Button>
            <Button sx={{ color: "white" }} href="#about"> 
              About
            </Button>
            <Button sx={{ color: "white" }} href="#proj"  >
              Projects
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu} textAlign="center">
              Home
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} textAlign="center">
              About
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} textAlign="center">
              Projects
            </MenuItem>
          </Menu>

          <AdbIcon sx={{ mr: 2, display: { xs: "flex", md: "none" } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
              display: { xs: "flex", md: "none" },
            }}
          >
            My Website
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
