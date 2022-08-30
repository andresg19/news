import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCuriosities } from '../../Redux/actions';
import ResponsiveAppBar from '../NavBar/Nav';


const Curiosities = () => {
    const dispatch = useDispatch();
    let curiosities = useSelector((state) => state.curiosities)

    useEffect(() => {
        dispatch(getCuriosities())
    }, [])

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