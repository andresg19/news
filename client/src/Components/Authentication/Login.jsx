import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers, isLogged, userLogged } from '../../Redux/actions';
import swal from "sweetalert";


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
    let actualUser = []
 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = input

        users.forEach((u) => {

                // })dispatch(isLogged(u.email, body))
                if(u.email === data.email && u.password === data.password) {
                    dispatch(userLogged(u));
                    navigate('/');
            //    actualUser.push(u)
            //    dispatch(userLogged(actualUser));

           } else {
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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' placeholder='Email' onChange={handleChange} />
                <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                <button type='submit'>Enter the site</button>
            </form>
        </div>
     );
}
 
export default Login;