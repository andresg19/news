import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearState, getNewsById } from "../../Redux/actions/index";
import swal from "sweetalert"
// import News from '../News/News';

const DetailNews = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      )
    const actualNew = useSelector((state) => state.detail)
    const { id } = useParams()
    console.log('SOY ID' ,id)
    console.log('actual', actualNew)

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
        dispatch(getNewsById(id))
        if(user.length === 0) {
            disableScroll()
                swal({
                    title: 'Log in',
                    text: 'you must log in to see this news.',
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
        return () => {
            dispatch(clearState()); 
          };
        }, [dispatch, id]);

        if(user.length === 0) {
          return ( 
            <div className='bloqueado'>
             
                        <div className="containerNews">
                            <h2>{actualNew.titleNew}</h2>
                            <p>{actualNew.textNew}</p>
                            <img src={actualNew.imageNew} alt="img not found" width='25%' />
                            <h5>{actualNew.dateNew}</h5>
                        </div>
            </div> 
            )
        } else {
          return ( 
            <div className='detailnewsContainer'>
             
                        <div className="containerNews">
                            <h2>{actualNew.titleNew}</h2>
                            <p>{actualNew.textNew}</p>
                            <img src={actualNew.imageNew} alt="img not found" width='25%' />
                            <h5>{actualNew.dateNew}</h5>
                        </div>
            </div>
          )
        }
    
}
 
export default DetailNews;

