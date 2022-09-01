import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerUser } from '../../Redux/actions';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


//Validacion de campos
export function validate(input) {
let errors = {};

if (!input.name) {
 errors.name = "Name is required";
} else if (!/^[A-Z][a-z]{3,20}$/.test(input.name)) {
 errors.name = "First capital letter, no numbers";
}
if (!input.lastName) {
 errors.lastName = "Lastname is required";
} else if (!/^[A-Z][a-z]{3,20}$/.test(input.lastName)) {
 errors.lastName = "First capital letter, no numbers";
}
if(!input.email) {
errors.email = "Email is required";
} else if (!/\S+@\S+\.\S+/.test(input.email)) {
errors.email = "Invalid email";
}
if(!input.password) {
errors.pasword = "Password is required";
} else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(input.password)) {
errors.email =  "Password is required";
}
if(!input.address) {
errors.address = "Address is required";
} else if(!/^[A-Za-z]+ [0-9]+$/.test(input.address)) {
errors.address = "Name and street number"
}
return errors;
}

const Register = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
    })
    console.log(input)

    const [errors, setErrors] = useState({})


    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});

        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsValidations = validate(input);

        if(Object.keys(errorsValidations).length === 0) {
            swal({
                title: 'Regístrese',
                text: '¿Do you want to confirm the data??',
                type: 'alert',
                buttons: {
                  cancel: 'Cancel',
                  confirm: {
                    text: 'Sing-up',
                    value: 'confirm',
                  },
                },
              })
              .then((value) => {
                if (value === 'confirm') {
                 dispatch(registerUser(input));
                  setInput({
                    name: "",
                    lastName: "",
                    email: "",
                    password: "",
                    address: "",
                  });
                  swal({
                    text: 'Registered successfully',
                    type: 'alert',
                    buttons: {
                      confirm: {
                        text: 'Confirmar',
                        value: 'confirm',
                      },
                    },
                  })
                  navigate('/Login')
                }
              })
              .catch((error) => {
                console.log(error);
              });
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
        
    }

    return ( 
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' onChange={handleChange}/>
                <input type="text" name='lastName' placeholder='Lastname' onChange={handleChange} />
                <input type="text" name='email' placeholder='Email' onChange={handleChange} />
                <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                <input type="text" name='address' placeholder='Address' onChange={handleChange} />
                <button type='submit'>Confirm</button>
            </form>
        </div>
     );
}
 
export default Register;