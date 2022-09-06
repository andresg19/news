import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCuriosities } from "../../Redux/actions";
import swal from "sweetalert"


const CuriositiesBox = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const myCurious = useSelector((state) => state.curiosities);
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      );
     
      let myCuriousReverse = myCurious.reverse();

    let renderCuriousBox = myCuriousReverse.slice(0, 10);


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
    <div className="containerCuriousBox">
        {
            renderCuriousBox.map((c) => {
                if(user.length === 0) {
                    return(
                        <div key={c._id} className="containerCuriousRender">
                          <div className="containerCuriousContent">
                            <h3>{c.title}</h3>
                            <img src={c.image} alt="img not found" width='40%' />
                            <button type="submit" name="buttonOffUser" onClick={handleUserBlock}>
                            complete curiosity
                            </button>
                            </div>
                        </div>
                    )
                }
                return(
                    <div key={c._id} className="containerCuriousRender">
                      <div className="containerCuriousContent">
                        <h3>{c.title}</h3>
                        <img src={c.image} alt="img not found" width='25%' />
                        <br />
                        <Link to={'/DetailCuriosities/' + c._id}>
                            complete curiosity
                        </Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
   )
}
 
export default CuriositiesBox;