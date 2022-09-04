import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../Redux/actions";
import ResponsiveAppBar from "../NavBar/Nav";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './News.modules.css'

const News = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const myNews = useSelector((state) => state.news);
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      )
    console.log('soy la noticia', myNews)

    function disableScroll() {
        // Get the current page scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }

    useEffect(() => {
        dispatch(getNews());
        if(user.length === 0) {
        disableScroll()
            swal({
                title: 'Log in',
                text: 'you must log in to see the news.',
                type: 'Alert',
                buttons: {
                  confirm: {
                    text: 'Confirmar',
                    value: 'confirm',
                  },
                },
              }).then((val) => {
                if (val === 'confirm') {
                  navigate('/Login')
                }
              })
              .catch((error) => {
                console.log(error);
              });
        }
    }, [dispatch])
   {
    if (user.length === 0) {
        return(
            <div className="bloqueado">
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
    } else {
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
   }
}
 
export default News;