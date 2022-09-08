import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerUser } from '../../Redux/actions';
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/Nav"
import swal from "sweetalert";
import './Register.modules.css'


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
} else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password)) {
errors.password =  "Minimum eight characters, at least one letter and one number";
}
if(!input.address) {
errors.address = "Address is required";
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
                title: 'Sing-up',
                text: '¿Do you want to confirm the data??',
                type: 'alert',
                buttons: {
                  cancel: 'Cancel',
                  confirm: {
                    text: 'Confirm',
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
                  }).then((value) => {
                    if (value === 'confirm') {

                      swal({
                        text: 'Log in',
                        type: 'succes',
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
      <div className='containerRegister'>
          <ResponsiveAppBar />

            <form className='containerFormRegister' onSubmit={handleSubmit}>
               <br /> 
               <input type="text" autoComplete='off' name='name' placeholder='Name' onChange={handleChange}/>
                <br />
                <p>{errors.name}</p>
                <br />
                <input type="text" autoComplete='off' name='lastName' placeholder='Lastname' onChange={handleChange} />
                <br />
                <p>{errors.lastName}</p>
                <br />
                <input type="text" autoComplete='off' name='email' placeholder='Email' onChange={handleChange} />
                <br />
                <p>{errors.email}</p>
                <br />
                <input type="password" autoComplete='off' name='password' placeholder='Password' onChange={handleChange} />
                <br />
                <p>{errors.password}</p>
                <br />
                <input type="text" autoComplete='off' name='address' placeholder='Address' onChange={handleChange} />
                <br />
                <p>{errors.address}</p>
                <br />
                <button type='submit'>Confirm</button>
            </form>
      </div>
       
     );
}
 
export default Register;