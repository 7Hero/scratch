import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../../Layouts/AuthLayout";
import { styled } from "@mui/material/styles"
import { height } from "@mui/system";

const LoginButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontFamily:'Nunito',
  backgroundColor: '#30BE76',
  width:'100%',
  fontWeight:700,
  marginTop:'40px',
  height:'50px',
  borderRadius:'8px',
  filter: 'drop-shadow(0px 6px 20px rgba(13, 51, 32, 0.1))',
  '&:hover': {
    backgroundColor: '#3CD688',
    boxShadow: 'none',
  }
})

const Login = () => {

  return (
    <AuthLayout>
      <Box width='325px'>
        <Typography variant='mediumText' display='block' >Welcome Back!</Typography>
        <Typography variant='smallText' mt={1.25}> Please login to continue </Typography>
        <TextField 
          required 
          defaultValue=''
          label='Email address'
          variant='standard'
          sx={{mt:'60px',width:'100%'}}
        />
        <TextField 
          required 
          defaultValue=''
          label='Passwrod'
          variant='standard'
          type='password'
          sx={{mt:'30px',width:'100%'}}
        />
        <LoginButton variant='contained'>
            Login
        </LoginButton>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' mt='30px'>
          <Typography variant='smallText' display='block' > New to Scratch? </Typography>
          <Link underline='none' component='button' variant='mediumText' color='#30BE76' fontSize='16px'> Create Account Here</Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}

export default Login;