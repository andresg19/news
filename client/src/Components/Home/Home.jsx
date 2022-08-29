import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsBox from "../News/NewsBox";
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

        <div className="nav" color="red">
            <h1>Hello world!</h1>
        </div>
        <section>
            <h2>News section</h2>
            <NewsBox/>
        </section>
         
        </div>
     );
}
 
export default Home;