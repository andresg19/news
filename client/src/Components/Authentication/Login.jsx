import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers, isLogged, userLogged } from '../../Redux/actions';
import swal from "sweetalert";
import ResponsiveAppBar from '../NavBar/Nav';
import './Login.modules.css'



const Login = () => {
    const users = useSelector((state) => state.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    console.log(input)
    console.log(users)
    const [errors, setErrors] = useState({})
    
    function validate(input) {
        let errors = {};
        
        if (!input.email || !input.password) {
            errors.insert = 'check password or email'
         }

       
        return errors;
        }
    
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value});

        // setErrors(validate({
        //     ...input,
        //     [e.target.name] : e.target.value,
        // }));
    }
    
    let body = {isLogged: true}
   
 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = input
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value,
        }));
        
            users.filter((u) => {
                 if (u.email === data.email && u.password === data.password) {
                    dispatch(userLogged(u));
                    navigate("/");
                   } 
            })
    }


    return ( 
        <div className='containerLogin'>
        <ResponsiveAppBar />
          <form className='containerFormLogin' onSubmit={handleSubmit}>
         <p>Enter your data</p>
             <input type="text" name='email' placeholder='Email' onChange={handleChange} />
              <input type="password" name='password' placeholder='Password' onChange={handleChange} />
              <h3>{errors.insert}</h3>
              <button type='submit'>Confirm</button>
          </form>
    </div>
     );
}
 
export default Login;