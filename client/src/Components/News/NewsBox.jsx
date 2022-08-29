import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../Redux/actions";
import News from "./News";
import './NewsBox.modules.css'

const NewsBox = () => {
    const dispatch = useDispatch()
    const myNews = useSelector((state) => state.news);
    console.log('soy la noticia', myNews)

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

   return(
    <div>
        {
            myNews.map((n) => {
                return(
                    <div key={n._id} className="containerNewsBox">
                        <h2>{n.titleNew}</h2>
                        <p>{n.descriptionNew}</p>
                        <img src={n.imageNew} alt="img not found" width='25%' />
                        <h5>{n.dateNew}</h5>
                    </div>
                )
            })
        }
    </div>
   )
}
 
export default NewsBox;