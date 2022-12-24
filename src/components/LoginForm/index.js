import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { RiFacebookCircleLine } from 'react-icons/ri';
import { authentication, addUserToDB } from "../../config/firebase";
import { AiOutlineGoogle } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

import './LoginForm.css'
export default function BasicTextFields() {

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        const result = await signInWithPopup(authentication, provider)
        addUserToDB(result)
    };

    return (
        <div>
            <Box
                className="login-form"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField type="text" id="filled-basic" className='inputs' label="Email" variant="standard" />
                <TextField type="password" id="filled-basic" className='inputs' label="Password" variant="standard" />
                <Button variant="contained" className="inputs">Sign up</Button>
                <p className='already-user'>Already a user <a href="#">Login</a></p>
                <div className='icons'>
                    <AiOutlineGoogle color="" size="3em" className="icon" />
                    <RiFacebookCircleLine onClick={signInWithFacebook} className="icon" color="blue" size="3em" />
                    <TiSocialLinkedinCircular color="blue" size="3.5em" className="icon" />
                </div>
            </Box>
        </div>

    );
}