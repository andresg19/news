import React from 'react';
import { BrowserRouter as Router, useRoutes, } from "react-router-dom";
import Home from './Components/Home/Home';
import News from './Components/News/News';


function App() {
  let element = useRoutes([
    {path: "/", element: <Home />},
    {path: "/news", element: <News/>}
  ]);
  return element
}


export default App
