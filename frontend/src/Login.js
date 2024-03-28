// Login.js

import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import TopBar from './TopBar';

export default function Login() {
    const loginValidationSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    });

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) =>{
            // Perform login logic, for now just navigate to home
            navigate("/portal/home");
        },
    });

    return (
        <div>
            <TopBar />
            <form className='addForm' onSubmit={formik.handleSubmit}> 
                <h1>Login</h1>
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    name="email"
                    onBlur={formik.handleBlur} 
                    error={formik.touched.email && formik.errors.email} 
                    helperText={formik.touched.email && formik.errors.email? formik.errors.email: null}
                />

                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    name="password"
                    onBlur={formik.handleBlur} 
                    error={formik.touched.password && formik.errors.password} 
                    helperText={formik.touched.password && formik.errors.password? formik.errors.password: null}
                />

                <Button variant="contained" type="submit">Login</Button>

                <h4>Don't have an account? Click here <Link to="/register">Register</Link></h4>
            </form>
        </div>
    );
}
