import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCuriosities } from "../../Redux/actions";
import swal from "sweetalert"

import './CuriositiesBox.modules.css'

const CuriositiesBox = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const myCurious = useSelector((state) => state.curiosities);
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      );

    useEffect(() => {
        dispatch(getCuriosities());
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
    <div>
        {
            myCurious.map((c) => {
                if(user.length === 0) {
                    return(
                        <div key={c._id} className="containerCuriousBox">
                            <h2>{c.title}</h2>
                            <img src={c.image} alt="img not found" width='25%' />
                            <button type="submit" name="buttonOffUser" onClick={handleUserBlock}>
                            complete curiosity
                            </button>
                        </div>
                    )
                }
                return(
                    <div key={c._id} className="containerCuriousBox">
                        <h2>{c.title}</h2>
                        <img src={c.image} alt="img not found" width='25%' />
                        <Link to={'/DetailCuriosities/' + c._id}>
                            complete curiosity
                        </Link>
                    </div>
                )
            })
        }
    </div>
   )
}
 
export default CuriositiesBox;