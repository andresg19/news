import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOneNews } from '../../Redux/actions';
import './AddNews.modules.css';


const AddNews = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        titleNew: "",
        descriptionNew: "",
        textNew: "",
        imageNew: "",
        dateNew: "",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addOneNews(input))
    }
    
    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value}); 
    }
    
    return ( 
        <div className='containerAddNews'>
            <form className='containerFormNews' onSubmit={handleSubmit}>
            <p>Add a news</p>
                <input type="text" name='titleNew' placeholder='Title' onChange={handleChange} />
                <input type="text" name='descriptionNew' placeholder='Description' onChange={handleChange} />
                <input type="text" name='textNew' placeholder='Narration' onChange={handleChange} />
                <input type="text" name='imageNew' placeholder='Link image' onChange={handleChange} />
                <input type="text" name='dateNew' placeholder='Date' onChange={handleChange} />
                <button type='submit'>
                    Add news
                </button>
            </form>
        </div>
     );
}
 
export default AddNews;