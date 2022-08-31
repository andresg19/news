import React, { useState } from 'react';

const Register = () => {
    const [input, setInput] = useState({
        name: null,
        lastName: null,
        email: null,
        password: null,
        address: null,
    })

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    }

    return ( 
        <div>
            <h1>Register</h1>
            <form>
                <input type="text" name='name' placeholder='Name' />
                <input type="text" name='lastName' placeholder='Lastname' />
                <input type="text" name='email' placeholder='Email' />
                <input type="text" name='password' placeholder='Password' />
                <input type="text" name='address' placeholder='Address' />
            </form>
        </div>
     );
}
 
export default Register;