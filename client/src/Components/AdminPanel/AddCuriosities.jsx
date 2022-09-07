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
        <div className='containerAddCuriosity'>
            <form className='containerFormCuriosity' onSubmit={handleSubmit}>
            <p>Add a curiosity</p>
                <br />
                <input type="text" name='title' placeholder='Title' onChange={handleChange} />
                <br />
                <input type="text" name='text' placeholder='Narration' onChange={handleChange} />
                <br />
                <input type="text" name='image' placeholder='Link image' onChange={handleChange} />
                <br />
                <button type='submit'>
                    Add curiosity
                </button>
            </form>
        </div>
     );
}
 
export default AddCuriosities;