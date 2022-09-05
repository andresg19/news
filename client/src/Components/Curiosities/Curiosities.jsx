import React, {useEffect} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCuriosities } from '../../Redux/actions';
import ResponsiveAppBar from '../NavBar/Nav';
import swal from "sweetalert";


const Curiosities = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      )
    let curiosities = useSelector((state) => state.curiosities)

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
        dispatch(getCuriosities());
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
    }, [])

    if(user.length === 0) {
      return ( 
        <div className='bloqueado'>
        <div className='container curiosities'>
            <ResponsiveAppBar />
            <h1>Curiosities</h1>
            {
                curiosities.map((c) => {
                    return(
                        <div key={c._id} className='containerCurious'>
                            <h2>{c.title}</h2>
                            <img src={c.image} alt="img not found" />
                        </div>
                    )
                })
            }
        </div>
        </div>
     );
    } else {
      return ( 
        <div>
            <ResponsiveAppBar />
            <h1>Curiosities</h1>
            {
                curiosities.map((c) => {
                    return(
                        <div key={c._id} className='containerCurious'>
                            <h2>{c.title}</h2>
                            <img src={c.image} alt="img not found" />
                            <Link to={'/DetailCuriosities/' + c._id}>
                                complete curiosity
                            </Link>
                        </div>
                    )
                })
            }
        </div>
     );
    }

    return ( 
        <div>
            <ResponsiveAppBar />
            <h1>Curiosities</h1>
            {
                curiosities.map((c) => {
                    return(
                        <div key={c._id} className='containerCurious'>
                            <h2>{c.title}</h2>
                            <p>{c.text}</p>
                            <img src={c.image} alt="img not found" />
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Curiosities;