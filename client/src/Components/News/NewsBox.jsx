import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNews } from "../../Redux/actions";
import News from "./News";
import swal from "sweetalert";

import './NewsBox.modules.css'

const NewsBox = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const myNews = useSelector((state) => state.news);
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      );
    console.log('SOY EL LOCAL', user)
    console.log('soy la noticia', myNews)

    let myNewsReverse = myNews.reverse();

    let renderNewsBox = myNewsReverse.slice(0, 10);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])


    const handleUserBlock = (e) => {
        e.preventDefault();
        if (user.length === 0) {
            swal({
                title: 'Log in',
                text: 'You must be logged in to browse the site.',
                type: 'Alert',
                buttons: {
                  confirm: {
                    text: 'Confirmar',
                    value: 'confirm',
                  },
                  cancel: 'Cancel',
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
    }
   return(
    <div className="containerNewsBox">
        {
            renderNewsBox.map((n) => {
                if(user.length === 0) {
                    return(
                        <div key={n._id} className="containerNewsRender">
                            <div className="containerContentNews">
                            <h3>{n.titleNew}</h3>
                            <img src={n.imageNew} alt="img not found" width='40%' />
                            <p>{n.descriptionNew}</p>
                            <h5>{n.dateNew}</h5>
                            <button type="submit" name="buttonOffUser" onClick={handleUserBlock}>
                                complete news
                            </button>
                            </div>
                        </div>
                    )
                } else {
                    return(
                        <div key={n._id} className="containerNewsRender">
                        <div key={n._id} className="containerNewsBox">
                            <h3>{n.titleNew}</h3>
                            <p>{n.descriptionNew}</p>
                            <img src={n.imageNew} alt="img not found" width='40%' />
                            <h5>{n.dateNew}</h5>
                            <Link to={'/DetailNews/' + n._id}>
                                complete news
                            </Link>
                        </div>
                        </div>

                    )

                }
            })
        }
    </div>
   )
}
 
export default NewsBox;