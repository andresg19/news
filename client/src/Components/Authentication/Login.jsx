import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers, isLogged, userLogged } from '../../Redux/actions';
import swal from "sweetalert";
import ResponsiveAppBar from '../NavBar/Nav';
import './Login.modules.css'


export function validate(input) {
    let errors = {};
    
    if(!input.email) {
        errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Invalid email";
        }
        if(!input.password) {
        errors.pasword = "Password is required";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password)) {
        errors.password =  "Minimum eight characters, at least one letter and one number";
        }

   
    return errors;
    }

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
    
    
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value});

        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value,
        }));
    }
    
    let body = {isLogged: true}
   
 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = input
        
        const errorsValidations = validate(input);

        if(Object.keys(errorsValidations).length === 0) {
            users.filter((u) => {
                 if (u.email === data.email && u.password === data.password) {
                    dispatch(userLogged(u));
                    navigate("/");
                   } 
            })
        }
    }


    return ( 
        <div className='containerLogin'>
        <ResponsiveAppBar />
          <form className='containerFormLogin' onSubmit={handleSubmit}>
         <p>Enter your data</p>
             <input type="text" name='email' placeholder='Email' onChange={handleChange} />
             <h3>{errors.email}</h3>
              <input type="password" name='password' placeholder='Password' onChange={handleChange} />
              <h3>{errors.password}</h3>
              <button type='submit'>Confirm</button>
          </form>
    </div>
     );
}
 
export default Login;