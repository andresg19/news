import React, { useState } from 'react';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value});
    }

    return ( 
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
            </form>
        </div>
     );
}
 
export default Login;