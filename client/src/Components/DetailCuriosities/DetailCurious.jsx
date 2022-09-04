import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearState, getCuriositiesById } from "../../Redux/actions/index";
// import News from '../News/News';
import swal from "sweetalert";

const DetailCuriosities = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      )
    const actualCurious = useSelector((state) => state.detailCurious)
    console.log(actualCurious)
    const { id } = useParams();

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
        dispatch(getCuriositiesById(id))
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
        return () => {
            dispatch(clearState()); 
          };
        }, [dispatch, id]);

    return ( 
        <div className='detailnewsContainer'>
                    <div className="containerNews">
                        <h2>{actualCurious.title}</h2>
                        <p>{actualCurious.text}</p>
                        <img src={actualCurious.image} alt="img not found" width='25%' />
                    </div>
        </div>
     );
}
 
export default DetailCuriosities;

