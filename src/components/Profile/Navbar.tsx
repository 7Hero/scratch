import { Avatar, Box, InputAdornment, Stack, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'
import Logo from '../../logo.svg'
import { Search, EmailOutlined, RoomServiceOutlined } from '@mui/icons-material'

const Wrapper = styled('div')({
  height:'80px',
  // width:'100%',
  backgroundColor:'white',
  padding: '0 96px 0 96px',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
})


const Navbar = () => {

  const currentUser = useMemo(()=>{
    return window.users.find( el => el.email === localStorage.logged)
  },[])

  return (
    <Wrapper >
      <div style={{justifySelf:'left'}}><img src={Logo}/></div>
      <TextField 
        style={{margin:'auto'}}
        variant='standard'
        placeholder='Search Recipe, Profile or Ingridients'
        InputProps={{
          sx:{
            width:'40vw',
            maxWidth:560,
          },
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Stack direction='row' spacing='25px' alignItems='center'>
        <RoomServiceOutlined/>
        <EmailOutlined/>
        <Avatar alt={currentUser.login.username} src={currentUser.picture.thumbnail}/>
      </Stack>
    </Wrapper>  
  )
}

export default Navbar