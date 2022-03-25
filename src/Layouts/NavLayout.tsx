import { Outlet } from 'react-router-dom'
import Navbar from '../components/Profile/Navbar'

const NavLayout = () => {
  return (
    <div style={{backgroundColor:'#F7F8FA', height:'100vh'}}>
      <Navbar/>
      <div style={{paddingTop:'50px', paddingLeft:'96px', paddingRight:'96px'}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default NavLayout