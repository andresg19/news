import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCuriosities } from "../../Redux/actions";

import './CuriositiesBox.modules.css'

const CuriositiesBox = () => {
    const dispatch = useDispatch()
    const myCurious = useSelector((state) => state.curiosities);


    useEffect(() => {
        dispatch(getCuriosities());
    }, [dispatch])

   return(
    <div>
        {
            myCurious.map((c) => {
                return(
                    <div key={c._id} className="containerCuriousBox">
                        <Link to={'/DetailCuriosities/' + c._id}>
                        <h2>{c.title}</h2>
                        <img src={c.image} alt="img not found" width='25%' />
                        </Link>
                    </div>
                )
            })
        }
    </div>
   )
}
 
export default CuriositiesBox;