import * as React from 'react'
import logo from '../../logo.svg'
import { Typography, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { JoinButton, InverseButton } from '../styles/LoginButton'
import Image from '../../Image.png'
import theme from '../../theme';

const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
})) 

const Logo = styled('img')({
  marginTop: '72px',
  cursor:'pointer',
  [theme.breakpoints.down('sm')]: {
    marginTop:'0'
  }
})
const containerStyle: React.CSSProperties = {
  backgroundImage:`url(${Image})`,
  height:'100%',
  backgroundPosition: 'top right',
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover'
}

const Wrapper = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   transform:'scale(1.5)'
  }
}))

const LandingPage: React.FC = () => {

  const navigate = useNavigate();
  return (
    <Wrapper style={containerStyle}>
    <Box sx={{ mx:12}}  >
      <Logo src={logo} alt='logo' onClick={() => { navigate('sign_up')} }/>
      <CustomStack sx= {{ maxWidth: '510px', marginTop:'100px' }} >
        <Typography display="block" variant='largeText' >Join over 50 millions people sharing recipes everyday</Typography>
        <Typography display="block" variant='smallText' > Never run out of ideas again. Try new foods, ingredients, cooking style, and more </Typography>
        <Stack mt={2} direction='row' justifyContent='space-between' >
          <Link to='sign_up' style={{width:'100%',marginRight:'30px'}}> <JoinButton> Join Scratch </JoinButton> </Link>
          <Link to='sign_up' style={{width:'100%'}}><InverseButton> Learn More</InverseButton></Link>
        </Stack>
      </CustomStack>
    </Box>
    </Wrapper>
  )
}

export default LandingPage