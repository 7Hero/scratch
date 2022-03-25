import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Profile/Navbar'
import useMediaQuery from '@mui/material/useMediaQuery';
const NavLayout = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{backgroundColor:'#F7F8FA', height:'100vh'}}>
      <Navbar/>
      <div style={{paddingTop: !matches ? '50px' : '0', paddingLeft:!matches ? '50px' : '0', paddingRight:!matches ? '50px' : '0',maxWidth:'1940px',margin:'auto'}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default NavLayout