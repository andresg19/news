import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOneCuriosity } from '../../Redux/actions';


const AddCuriosities = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
      title: "",
      text: "",
      image: "",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addOneCuriosity(input))
    }
    
    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value}); 
    }
    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Title' onChange={handleChange} />
                <input type="text" name='text' placeholder='Narration' onChange={handleChange} />
                <input type="text" name='image' placeholder='Link image' onChange={handleChange} />
                <button type='submit'>
                    Add curiosity
                </button>
            </form>
        </div>
     );
}
 
export default AddCuriosities;