import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../Redux/actions/index";
// import News from '../News/News';

const DetailNews = () => {
    const dispatch = useDispatch();
    const actualNew = useSelector((state) => state.detail)
    const { id } = useParams()
    console.log('SOY ID' ,id)
    console.log('actual', actualNew)

    useEffect(() => {
        dispatch(getNewsById(id))
    }, [])

    return ( 
        <div className='detailnewsContainer'>
         
                    <div className="containerNews">
                        <h2>{actualNew.titleNew}</h2>
                        <p>{actualNew.textNew}</p>
                        <img src={actualNew.imageNew} alt="img not found" width='25%' />
                        <h5>{actualNew.dateNew}</h5>
                    </div>
        </div>
     );
}
 
export default DetailNews;

