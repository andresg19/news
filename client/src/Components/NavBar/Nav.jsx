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
<nav  class="navbar navbar-dark bg-dark">
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
    //   <nav className="navigation">
    //   <a href="/" className="brand-name">
    //     Rock garage
    //   </a>
    //   <button className="hamburger" onClick={onClick} >
    //     {/* icon from heroicons.com */}
        
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       viewBox="0 0 20 20"
    //       fill="white"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>
    //   <div
    //      className={
    //       isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    //     }>
    //     <ul>
    //       <li>
    //         <a href="/">Home</a>
    //       </li>
    //       <li>
    //         <a href="/News">News</a>
    //       </li>
    //       <li>
    //         <a href="/Curiosities">Curiosities</a>
    //       </li>
    //       <li>
    //         <a href="/AdminPanel">Admin Panel</a>
    //       </li>
    //       <li>
    //         <a onClick={handleLogOut}>Log out</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  
    )
  } else if(user.length !== 0) {
    return(
      <nav class="navbar  navbar-expand-lg bg-dark position-relative ">
        <div class="container-fluid">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </button>

          <Link to="/">
            <div>
              <button type="button" class="btn btn-outline-dark  bg-dark ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
              </button>
            </div>
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white bg-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mi Cuenta
                </a>

                <ul
                  class="dropdown-menu text-white bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      to="/profile"
                      class="dropdown-item text-white bg-dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>{" "}
                      Mi Perfil
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link
                      // to={`/favoritos/${usuarioActual.uid}`}
                      class="dropdown-item text-white bg-dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-suit-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                      </svg>{" "}
                      Favoritos
                    </Link>
                  </li>

                  <li>
                    <Link
                      // to={`/historial/${usuarioActual.uid}`}
                      class="dropdown-item text-white bg-dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-clock-history"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                      </svg>{" "}
                      Historial
                    </Link>
                  </li>

                  <li>
                    <hr class="dropdown-divider color-white" />
                  </li>

                  <li>
                    <a  class="dropdown-item text-white bg-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        />
                      </svg>{" "}
                      Salir
                    </a>
                  </li>
                </ul>
              </li>

              <a  >
                <button type="button" class="btn btn-outline-dark  bg-dark ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </button>
              </a>
            </ul>
          </div>
        </div>
      ) : (
        <div class="container-fluid">
          <Link to="/">
            <div>
              <button type="button" class="btn btn-outline-dark  bg-dark ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
              </button>
            </div>
          </Link>

          <Link to="/login">
            <button
              type="button "
              class="btn btn-outline-warning   bg-dark text-light"
            >
              Iniciar Sesión
            </button>
          </Link>

          <Link to="/register">
            <button
              type="button"
              class="btn btn-outline-warning  bg-dark text-light"
            >
              Registrarse
            </button>
          </Link>

          <Link to="/cart">
            <button type="button" class="btn btn-outline-dark  bg-dark ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </button>
          </Link>
        </div>
      

      <div class="mx-3">
      </div>
    </nav>
    //   <nav className="navigation">
    //   <a href="/" className="brand-name">
    //     Rock garage
    //   </a>
    //   <button className="hamburger" onClick={onClick} >
    //     {/* icon from heroicons.com */}
        
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       viewBox="0 0 20 20"
    //       fill="white"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>
    //   <div
    //      className={
    //       isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    //     }>
    //     <ul>
    //       <li>
    //         <a href="/">Home</a>
    //       </li>
    //       <li>
    //         <a href="/News">News</a>
    //       </li>
    //       <li>
    //         <a href="/Curiosities">Curiosities</a>
    //       </li>
    //       <li>
    //         <a onClick={handleLogOut}>Log out</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  
    )
  } 
  if(user.length === 0) {
    return(
      <nav className="navigation">
      <a href="/" className="brand-name">
        Rock garage
      </a>
      <button className="hamburger" onClick={onClick} >
        {/* icon from heroicons.com */}
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
         className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
        </ul>
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
