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


    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value});
    }
    
    let body = {isLogged: true}
   
 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = input

        users.forEach((u) => {

                // })dispatch(isLogged(u.email, body))
                if(u.email === data.email && u.password === data.password) {
                    // dispatch(isLogged(u.email, body));
                    dispatch(userLogged(u))
                    navigate('/')
            //    actualUser.push(u)
            //    dispatch(userLogged(actualUser));

           } else if(u.email !== data.email && u.password !== data.password){
            swal({
            
                text: 'Check the entered data',
                type: 'Error',
                buttons: {
                  confirm: {
                    text: 'Confirmar',
                    value: 'confirm',
                  },
                },
              })
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
              <button type='submit'>Confirm</button>
          </form>
    </div>
     );
}
 
export default Login;