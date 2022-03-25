import styled from "@emotion/styled";
import { Button } from "@mui/material";

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

const JoinButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    fontFamily:'Nunito',
    backgroundColor: '#30BE76',
    maxWidth:'240px',
    width:'100%',
    fontWeight:700,
    height:'50px',
    borderRadius:'8px',
    textDecoration: 'none',
    color:'white',
    filter: 'drop-shadow(0px 6px 20px rgba(13, 51, 32, 0.1))',
    '&:hover': {
      backgroundColor: '#3CD688',
      boxShadow: 'none',
    }
})
const InverseButton = styled(JoinButton)({
  backgroundColor: 'white',
  color:'#30BE76',
  border: '2px solid #30BE76',
  boxSizing:'border-box',
  '&:hover': {
    backgroundColor: 'white',
    boxShadow: 'none',
  }
})

export { JoinButton, InverseButton }
export default LoginButton;