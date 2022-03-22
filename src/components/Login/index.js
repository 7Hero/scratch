import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../../Layouts/AuthLayout";
import { styled } from "@mui/material/styles"
import { height } from "@mui/system";
import { useState } from "react";
import LoginButton from "../styles/LoginButton.js"
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(email,password)
  }

  const handleClick = () => {
    // Handle validation.
    navigate('/sign_up')
  }

  return (
    <AuthLayout>
      <Box width='325px'>
        <Typography variant='mediumText' display='block' >Welcome Back!</Typography>
        <Typography variant='smallText' mt={1.25}> Please login to continue </Typography>
        <TextField 
          required 
          defaultValue={email}
          label='Email address'
          variant='standard'
          sx={{mt:'60px',width:'100%'}}
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
        <LoginButton variant='contained' onClick={handleLogin}>
            Login
        </LoginButton>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' mt='30px'>
          <Typography variant='smallText' display='block' > New to Scratch? </Typography>
          <Link underline='none' component='button' variant='mediumText' color='#30BE76' fontSize='16px' onClick={handleClick}> Create Account Here</Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}

export default Login;