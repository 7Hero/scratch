import styled from "@emotion/styled";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";
import LoginButton from "../styles/LoginButton.js"

const SignUp = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }

  const handleSignUp = () => {
    console.log(name,email,password);
  }

  return (
    <AuthLayout>
      <Box width='325px'>
        <Typography variant='mediumText' display='block' >Start from Scratch!</Typography>
        <Typography variant='smallText' mt={1.25}> Create account to continue </Typography>
        <TextField 
          required 
          defaultValue={name}
          label='Full Name'
          variant='standard'
          sx={{mt:'60px',width:'100%'}}
        />
        <TextField 
          required 
          defaultValue={email}
          label='Email address'
          variant='standard'
          sx={{mt:'30px',width:'100%'}}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          required 
          defaultValue={password}
          label='Passwrod'
          variant='standard'
          type='password'
          sx={{mt:'30px',width:'100%'}}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton variant='contained' onClick={handleSignUp}>
            Sign Up
        </LoginButton>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' mt='30px'>
          <Typography variant='smallText' display='block' > Already have an account? </Typography>
          <Link underline='none' component='button' variant='mediumText' color='#30BE76' fontSize='16px' onClick={handleClick}> Login Here</Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}

export default SignUp;