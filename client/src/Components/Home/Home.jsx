import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsBox from "../News/NewsBox";
import ResponsiveAppBar from "../NavBar/Nav"
import './Home.modules.css'
// import { getNews } from "../../Redux/actions";


const Home = () => {
    // const dispatch = useDispatch()
    // // const myNews = useSelector((state) => state.news);
    // console.log('soy la noticia', myNews)

    // // useEffect(() => {
    // //     dispatch(getNews());
    // // }, [dispatch])
    
    return (
        <div className="container">
            <ResponsiveAppBar />
            <div className="banner">
                <img src="/snstbv.jpg" alt="img not found" width='100%' height='400px'/>
            </div>
        <section className="section">
            <h2>News section</h2>
            <NewsBox/>
        </section>
         
        </div>
     );
}
 
export default Home;