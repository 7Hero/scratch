import * as React from 'react'
import logo from '../../logo.svg'
import { Typography, Stack } from '@mui/material'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Image from '../../Image.png'
import './index.css';

const containerStyle: React.CSSProperties = {
  backgroundImage:`url(${Image})`,
  height:'100%',
  backgroundPosition: 'top right',
  backgroundRepeat: 'no-repeat'
}

const LandingPage: React.FC = () => {

  return (
    <div style={containerStyle}>
    <Box sx={{ mx:12}} >
      <img style= {{marginTop:'72px'}} src={logo} alt='logo'/>
      <Stack sx= {{ maxWidth: '510px', marginTop:'100px' }} >
        <Typography display="block" variant='largeText' >Join over 50 millions people sharing recipes everyday</Typography>
        <Typography display="block" variant='smallText' > Never run out of ideas again. Try new foods, ingredients, cooking style, and more </Typography>
        <Stack mt={2} direction='row' justifyContent='space-between' >
          <Link to='sign_up'> <div className='button' > Join Scratch </div> </Link>
          <Link to='sign_up'><div className='button butt'> Learn More</div></Link>
        </Stack>
      </Stack>
    </Box>
    </div>
  )
}

export default LandingPage