import { Avatar, Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  //@ts-ignore
  ...theme.typography.title,
  padding: '25px',
  color: theme.palette.text.secondary,
}));

const NumberBoxes = ({text,number}) => {
  return(
    <div style={{textAlign:'center'}}>
      <Typography variant='h4'> {number} </Typography>
      <Typography variant='textGray'> {text} </Typography>
    </div>
  )
}


const SideProfile = () => {
  return (
    <Grid item xs={3} >
    <Item elevation={0} >
      <Box sx={{width:'100%'}}>
        <Stack direction='row' spacing='15px'>
            <Avatar alt={ localStorage.logged } sx={{height:'70px',width:'70px'}} />
            <Stack direction='column'>
              <Typography variant='title'> Popescu Vasile </Typography>
              <Typography variant='smallText'> Potato Master</Typography>
              <Typography variant='smallText' sx={{mt:'6px'}} alignItems='center' display='flex'> 345 followers <Typography display='inline' fontSize={10}>&nbsp;&nbsp;•&nbsp;&nbsp;</Typography> 21k likes</Typography>
            </Stack>
        </Stack>
      </Box>
      <Divider sx={{my:'25px'}}/>
      <Box>
        <Stack direction='row' spacing='auto' >
        <NumberBoxes number={25} text='Recipes'/>
        <NumberBoxes number={300} text='Saved'/>
        <NumberBoxes number={234} text='Following'/>
        </Stack>
      </Box>
    </Item>
  </Grid>
  );
}

const Profile = () => {
  return (
    <Grid container spacing={3} columns={13} direction={{xs:'column',sm:'column',lg:'row'}}>
      <SideProfile/>
      <Grid item xs={10} >
        <Item elevation={0} >Left Part</Item>
      </Grid>
    </Grid>
  )
}

export default Profile;