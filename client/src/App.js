import React from 'react';
import { BrowserRouter as Router, useRoutes, } from "react-router-dom";
import DetailNews from './Components/DetailNews/DetailNews';
import Home from './Components/Home/Home';
import News from './Components/News/News';


function App() {
  let element = useRoutes([
    {path: "/", element: <Home />},
    {path: "/News", element: <News />},
    {path: "/DetailNews/:id", element: <DetailNews />}
  ]);
  return element
}


export default App
