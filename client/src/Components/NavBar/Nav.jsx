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
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Nav.modules.css'

const pages = ['News', 'Curiosities'];

const ResponsiveAppBar = () => {
  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem("actualUser"))
    ? JSON.parse(localStorage.getItem("actualUser"))
    : [],
  );
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  
  const onClick = () => {
    setIsNavExpanded(!isNavExpanded)
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogIn = () => {
    navigate('/Login');
  }

  const handleRegister = () => {
    navigate('/Register')    
  }

  const handleAdminPanel = () => {
    navigate('/AdminPanel')
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

  
  // if(user.isAdmin === true) {
  //   return (
  //     <AppBar position="static">
  //       <Container maxWidth="xl" className="tool">
  //         <Toolbar disableGutters>
  //           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
  //           <Typography
  //             variant="h6"
  //             noWrap
  //             component="a"
  //             href="/"
  //             sx={{
  //               mr: 2,
  //               display: { xs: "none", md: "flex" },
  //               fontFamily: "monospace",
  //               fontWeight: 700,
  //               letterSpacing: ".3rem",
  //               color: "red",
  //               textDecoration: "none",
  //             }}
  //           >
  //             LOGO
  //           </Typography>
            
  //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //             <IconButton
  //               size="large"
  //               aria-label="account of current user"
  //               aria-controls="menu-appbar"
  //               aria-haspopup="true"
  //               onClick={handleOpenNavMenu}
  //               color="inherit"
  //             >
  //               <MenuIcon />
  //             </IconButton>
  //             <Menu
  //               id="menu-appbar"
  //               anchorEl={anchorElNav}
  //               anchorOrigin={{
  //                 vertical: "bottom",
  //                 horizontal: "left",
  //               }}
  //               keepMounted
  //               transformOrigin={{
  //                 vertical: "top",
  //                 horizontal: "left",
  //               }}
  //               open={Boolean(anchorElNav)}
  //               onClose={handleCloseNavMenu}
  //               sx={{
  //                 display: { xs: "block", md: "none" },
  //               }}
  //             >
  //               <Button
  //                 onClick={handleAdminPanel}
  //                 sx={{ my: 2, color: "red", display: "block" }}
  //               >
  //                 Admin Panel
  //               </Button>
  
  //              <Button href='/News' sx={{ my: 2, color: "red", display: "block" }}>
  //               News
  //              </Button>
  
  //              <Button href='/Curiosities' sx={{ my: 2, color: "red", display: "block" }}>
  //               Curiosities
  //              </Button>
  
  //               <Button
  //                 onClick={handleLogOut}
  //                 sx={{ my: 2, color: "red", display: "block" }}
  //               >
  //                 log out
  //               </Button>
  //             </Menu>
  //           </Box>
  //           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
  //           <Typography
  //             variant="h5"
  //             noWrap
  //             component="a"
  //             href=""
  //             sx={{
  //               mr: 2,
  //               display: { xs: "flex", md: "none" },
  //               flexGrow: 1,
  //               fontFamily: "monospace",
  //               fontWeight: 700,
  //               letterSpacing: ".3rem",
  //               color: "red",
  //               textDecoration: "none",
  //             }}
  //           >
  //             LOGO
  //           </Typography>
  //           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
  //           <Button
  //                 onClick={handleAdminPanel}
  //                 sx={{ my: 2, color: "red", display: "block" }}
  //               >
  //                 Admin Panel
  //               </Button>
  
             
  //           <Button href='/News' sx={{ my: 2, color: "red", display: "block" }}>
  //               News
  //              </Button>
  
  //              <Button href='/Curiosities' sx={{ my: 2, color: "red", display: "block" }}>
  //               Curiosities
  //              </Button>
  
  //             <Button
  //                 onClick={handleLogOut}
  //                 sx={{ my: 2, color: "red", display: "block" }}
  //               >
  //                 log out
  //               </Button>
  //           </Box>
  //         </Toolbar>
  //       </Container>
  //     </AppBar>
  //   );
  // }
  if(user.isAdmin === true) {
    return(
<nav  class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Rock garage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">What to see?</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/News">NEWS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/Curiosities">CURIOSITIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page "href="/AdminPanel">ADMIN PANEL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" onClick={handleLogOut}>LOG OUT</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
   
    )
  } else if(user.length !== 0) {
    return(
      <nav  class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Rock garage</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">What to see?</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/News">NEWS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/Curiosities">CURIOSITIES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" onClick={handleLogOut}>LOG OUT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
  } 
  if(user.length === 0) {
    return(
      <nav  class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Rock garage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      {/* <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">What to see?</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div> */}
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href='/Login'>LOG IN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href='/Register'>REGISTER</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    )
  }
  }
  export default ResponsiveAppBar;

// if( user.length === 0) {

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl" className="tool">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "red",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
          
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {/* {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))} */}

//               <Button
//                 onClick={handleLogIn}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 log in
//               </Button>
//               <Button
//                 onClick={handleRegister}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 register
//               </Button>
              
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "red",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {/* {pages.map((page) => (
              
//               <Button
//                 key={page}
//                 href={`/${page}`}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 {page}
//               </Button>
              
//             ))} */}
//             <Button
//                 onClick={handleLogIn}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 log in
//               </Button>
//               <Button
//                 onClick={handleRegister}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 register
//               </Button>
//           </Box>
//           {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             <Button
//               onClick={handleLogOut}
//               sx={{ my: 2, color: "red", display: "block" }}
//             >
//               log out
//             </Button>
//           </Box> */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );

// } else if(user.length !== 0){
//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl" className="tool">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "red",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
          
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//              <Button href='/News' sx={{ my: 2, color: "red", display: "block" }}>
//               News
//              </Button>

//              <Button href='/Curiosities' sx={{ my: 2, color: "red", display: "block" }}>
//               Curiosities
//              </Button>

//               <Button
//                 onClick={handleLogOut}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 log out
//               </Button>
//               <Button
//                 onClick={handleRegister}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 register
//               </Button>
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "red",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
           
//           <Button href='/News' sx={{ my: 2, color: "red", display: "block" }}>
//               News
//              </Button>

//              <Button href='/Curiosities' sx={{ my: 2, color: "red", display: "block" }}>
//               Curiosities
//              </Button>

//             <Button
//                 onClick={handleLogOut}
//                 sx={{ my: 2, color: "red", display: "block" }}
//               >
//                 log out
//               </Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );

// }  


// };
