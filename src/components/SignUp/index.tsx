import { Box, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";
import LoginButton from "../styles/LoginButton.js";
import validator from 'validator';
import { User, ErrorInput } from "../../types/interfaces/user"

const defaultState: ErrorInput = { error: false, helperText: '' };

const SignUp: React.FC = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [nameStyle,setNameStyle] = useState(defaultState)
  const [emailStyle,setEmailStyle] = useState(defaultState)
  const [passwordStyle,setPasswordStyle] = useState(defaultState)

  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/login');
  }

  const handleSignUp = (): void => {
    console.log(name,email,password);
    if(!name){
      setNameStyle({error: true, helperText:' Empty Field'})
      return;
    }else{
      setNameStyle(defaultState);
    }
    if(!validator.isEmail(email)){
      setEmailStyle({error:true,helperText:'Invalid Email'})
      return;
    }else{
      setNameStyle(defaultState);
    }
    if(window.users.some( (el: User) => el.email === email )){
      setEmailStyle({error:true,helperText:'Email already exists'})
      return;
    }
    if(!validator.isStrongPassword(password)){
      setPasswordStyle({error:true,helperText:'Your password is weak'})
      return;
    }else{
      setNameStyle(defaultState);
    }

    window.users.push({...window.users[0], login: {...window.users[0].login, username: name, password}, email });
    localStorage.logged = email;
    navigate('/profile')
    
  }

  return (
    <AuthLayout>
      <Box width='325px'>
        <Typography variant='mediumText' display='block' >Start from Scratch!</Typography>
        <Typography variant='smallText' mt={1.25}> Create account to continue </Typography>
        <TextField
          {...nameStyle}
          required 
          defaultValue={name}
          label='Full Name'
          variant='standard'
          sx={{mt:'60px',width:'100%'}}
          onChange={(e)=>{setName(e.target.value)}}
          />
        <TextField
          {...emailStyle}
          required 
          defaultValue={email}
          label='Email address'
          variant='standard'
          sx={{mt:'30px',width:'100%'}}
          onChange={(e) => setEmail(e.target.value)}
          />
        <TextField 
          {...passwordStyle}
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