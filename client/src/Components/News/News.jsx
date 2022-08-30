import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../Redux/actions";
import ResponsiveAppBar from "../NavBar/Nav";

const News = () => {
    const dispatch = useDispatch()
    const myNews = useSelector((state) => state.news);
    console.log('soy la noticia', myNews)

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

   return(
    <div>
        <ResponsiveAppBar />
        {
            myNews.map((n) => {
                return(
                    <div key={n._id} className="containerNews">
                        <h2>{n.titleNew}</h2>
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