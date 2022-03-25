import React from 'react'
import { Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import theme from '../../theme'

const Item = styled(Paper)(({ theme }) => ({
  //@ts-ignore
  ...theme.typography.title,
  padding: '25px',
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Profile = () => {
  return (
    <Grid container spacing={3} columns={13} >
      <Grid item xs={3} >
        <Item elevation={0} >Profile</Item>
      </Grid>
      <Grid item xs={10} >
        <Item elevation={0} >Left Part</Item>
      </Grid>
    </Grid>
  )
}

export default Profile;