import React from 'react'
import logo from '../../logo.svg'
import { Container } from '@mui/material'
const LandingPage = () => {
  return (
    <>
    <Container sx= {{ mx: 12 }}>
      <img style= {{marginTop:'72px'}}src={logo}/>
      <div style= {{marginTop:'100px'}}>
          <p>Vasea</p>
          <p>Text mic</p>
      </div>
    </Container>
    </>
  )
}

export default LandingPage