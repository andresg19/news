import React from 'react';
import { BrowserRouter as Router, useRoutes, } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Curiosities from './Components/Curiosities/Curiosities';
import DetailCuriosities from './Components/DetailCuriosities/DetailCurious';
import DetailNews from './Components/DetailNews/DetailNews';
import Home from './Components/Home/Home';
import News from './Components/News/News';


function App() {
  let element = useRoutes([
    {path: "/", element: <Home />},
    {path: "/News", element: <News />},
    {path: "/DetailNews/:id", element: <DetailNews />},
    {path: "/Curiosities", element: <Curiosities />},
    {path: "/DetailCuriosities/:id", element: <DetailCuriosities />},
    {path: "/Register", element: <Register />},
    {path: "/Login", element: <Login />}
  ]);
  return element
}


export default App
