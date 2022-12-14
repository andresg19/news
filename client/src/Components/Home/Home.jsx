import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsBox from "../News/NewsBox";
import Nav from "../NavBar/Nav";
import "./Home.modules.css";
import CuriositiesBox from "../Curiosities/CuriositiesBox";
import { getUsers } from "../../Redux/actions";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
// import { getNews } from "../../Redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  const actualUser = useSelector((state) => state.userLogged);
  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem("actualUser"))
    ? JSON.parse(localStorage.getItem("actualUser"))
    : [],
  )
console.log('SOY EL LOCAL', user)

  console.log('soy el actual', actualUser)

  useEffect(() => {
    dispatch(getUsers())
}, [])

  return (
    <div className="container">
      <Nav />
      <div className="banner">
        <img
          src="/banner.jpg"
          alt="img not found"
        />
      </div>

      <div className="sectionNews">
      <div class="paperclip"></div>
          <h2>Recent news</h2>
          <NewsBox />
      </div>
      
      <div className="Carousel">
      <Carousel />
      </div>

      <div className="sectionCurious">
      <div class="paperclip"></div>
          <h2>Curiosities</h2>
          <CuriositiesBox />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
