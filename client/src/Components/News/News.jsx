import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../Redux/actions";

const News = () => {
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
                    <div key={n._id} className="containerNews">
                        <title>{n.titleNew}</title>
                        <p>{n.descriptionNew}</p>
                        <p>{n.textNew}</p>
                        <img src={n.imageNew} alt="img not found" width='25%' />
                        <h5>{n.dateNew}</h5>
                    </div>
                )
            })
        }
    </div>
   )
}
 
export default News;