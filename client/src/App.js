import React from 'react';
import { BrowserRouter as Router, useRoutes, } from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
  let element = useRoutes([
    {path: "/", element: <Home />}
  ]);
  return element
}


export default App
