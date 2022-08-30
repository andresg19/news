import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearState, getCuriositiesById } from "../../Redux/actions/index";
// import News from '../News/News';

const DetailCuriosities = () => {
    const dispatch = useDispatch();
    const actualCurious = useSelector((state) => state.detailCurious)
    console.log(actualCurious)
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCuriositiesById(id))
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

