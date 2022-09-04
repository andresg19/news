import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const pages = ['News', 'Curiosities'];

const ResponsiveAppBar = () => {
  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem("actualUser"))
    ? JSON.parse(localStorage.getItem("actualUser"))
    : [],
  );
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogIn = () => {
    navigate('/Login');
  }
  
  const handleLogOut = () => {
    swal({
      title: 'Log out',
      text: 'If you log out, you must log in again to navigate within the page.',
      type: 'Alert',
      buttons: {
        confirm: {
          text: 'Confirmar',
          value: 'confirm',
        },
        cancel: 'Cancel',
      },
    }).then((val) => {
      if (val === 'confirm') {
        window.localStorage.clear();
        window.location.reload();
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }



if( user.length === 0) {

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="tool">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <Button
                onClick={handleLogIn}
                sx={{ my: 2, color: "red", display: "block" }}
              >
                log in
              </Button>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              
              <Button
                key={page}
                href={`/${page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "red", display: "block" }}
              >
                {page}
              </Button>
              
            ))} */}
            <Button
                onClick={handleLogIn}
                sx={{ my: 2, color: "red", display: "block" }}
              >
                log in
              </Button>
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleLogOut}
              sx={{ my: 2, color: "red", display: "block" }}
            >
              log out
            </Button>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );

} else {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="tool">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
             <Button href='/News' sx={{ my: 2, color: "red", display: "block" }}>
              News
             </Button>

             <Button href='/Curiosities' sx={{ my: 2, color: "red", display: "block" }}>
              Curiosities
             </Button>

              <Button
                onClick={handleLogOut}
                sx={{ my: 2, color: "red", display: "block" }}
              >
                log out
              </Button>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
           
          <Button href='/News' sx={{ my: 2, color: "red", display: "block" }}>
              News
             </Button>

             <Button href='/Curiosities' sx={{ my: 2, color: "red", display: "block" }}>
              Curiosities
             </Button>

            <Button
                onClick={handleLogOut}
                sx={{ my: 2, color: "red", display: "block" }}
              >
                log out
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

} 

};
export default ResponsiveAppBar;