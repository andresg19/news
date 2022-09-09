import React, {useEffect} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCuriosities } from '../../Redux/actions';
import ResponsiveAppBar from '../NavBar/Nav';
import swal from "sweetalert";
import './Curiosities.modules.css'
import Footer from "../Footer/Footer"

const Curiosities = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      )
    let curiosities = useSelector((state) => state.curiosities)

    let curiositiesReverse = curiosities.reverse()

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
                    text: 'you must log in to see the curiosities.',
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
            <ResponsiveAppBar />
            {
                curiositiesReverse.map((c) => {
                    return(
                        <div key={c._id} className='containerCurious'>
                            <p>{c.title}</p>
                            <img src={c.image} alt="img not found" width='25%'/>
                            <Link to={'/DetailCuriosities/' + c._id}>
                                <button>
                                complete curiosity
                                </button>
                            </Link>
                        </div>
                    )
                })
            }
            <Footer />
        </div>
     );
    } else {
      return ( 
        <div className='container'>
            <ResponsiveAppBar />

            {
                curiositiesReverse.map((c) => {
                    return(
                        <div key={c._id} className='containerCurious'>
                            <p>{c.title}</p>
                            <img src={c.image} alt="img not found" width='25%' />
                            <Link to={'/DetailCuriosities/' + c._id}>
                                <button>
                                complete curiosity
                                </button>
                            </Link>
                        </div>
                    )
                })
            }
            <Footer />
        </div>
     );
    }

}
 
export default Curiosities;
