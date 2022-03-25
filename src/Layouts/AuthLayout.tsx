import { Box } from '@mui/system';
import bg from './bg.svg'
import Image from './Image.png'
import logo from './../logo.svg'
import React from 'react';

const containerStyle = {
  backgroundImage:`url(${Image})`,
  height:'100vh',
  backgroundPosition: 'top right',
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover'
}


const AuthLayout: React.FC = ({ children }) => {

return (
  <div style={containerStyle} >

    <div style={{background:'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1))',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
      <Box sx={{ width:912,height: 570, backgroundColor: 'white', borderRadius:1,display:'flex'}}>
          <img src={bg} style={{position:'absolute',borderRadius:'8px'}} alt='background_image'/>
        <Box style={{position:'relative', display:'flex',justifyContent:'center',alignItems:'center',width:'50%',height:'100%'}}>
          <img src={logo} style={{transform:'scale(2)'}} alt='logo' />
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' width='50%' height='100%'>
          {children}
        </Box>
      </Box>
    </div>
  </div>
);
}

export default AuthLayout;