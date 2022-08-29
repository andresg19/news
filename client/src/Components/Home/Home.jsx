import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Home.modules.css'
import { getNews } from "../../Redux/actions";


const Home = () => {
    const dispatch = useDispatch()
    const myNews = useSelector((state) => state.news);
    console.log('soy la noticia', myNews)

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])
    
    return ( 
        <div className="container">

        <div className="nav" color="red">
            <h1>Hello wordl!</h1>
        </div>
        
            {myNews.map((n) => {
                return (
                    <div key={n._id} className='news'>
                        <h1>{n.titleNew}</h1>
                        <h3>{n.descriptionNew}</h3>
                        <h3>{n.textNew}</h3>
                        <img src={n.imageNew} alt="img not found" />
                        <h5>{n.dateNew}</h5>
                    </div>
                )
            } ) }
        
        
            </div>
     );
}
 
export default Home;