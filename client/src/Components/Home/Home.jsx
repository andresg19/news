import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsBox from "../News/NewsBox";
import ResponsiveAppBar from "../NavBar/Nav";
import "./Home.modules.css";
import CuriositiesBox from "../Curiosities/CuriositiesBox";
import { getUsers } from "../../Redux/actions";
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
      <ResponsiveAppBar />
      <div className="banner">
        <img
          src="/snstbv.jpg"
          alt="img not found"
          width="100%"
          height="400px"
        />
      </div>

      <section className="sectionNewsAndCurious">
        <div className="sectionNews">
          <h2>News section</h2>
          <NewsBox />
        </div>
        
        <div className="sectionCurious">
          <h2>Curiosities section</h2>
          <CuriositiesBox />
        </div>
      </section>
    </div>
  );
};

export default Home;
