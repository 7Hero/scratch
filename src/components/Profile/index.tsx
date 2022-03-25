import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Stack, Typography, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles';
import useScreenWidth from '../../hooks/useScreenWidth'
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
  );
}

const UserSettings = () => {
  return (
    <Item elevation={0} >
      User Settings
    </Item>
  );
}
const RecipeCard = () => {

  const matches = useMediaQuery('@media (max-width:1200px)')
  const windowWidth = useScreenWidth(matches);

  return (
    <Grid item xs={1} >
      <Card elevation={0}>
        <CardMedia
          component="img"
          height={!matches ? 264 : windowWidth*0.2}
          alt="denumire de mancare"
          src='https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg'
        />
        <CardContent>
          <Typography variant='recipeTitle'>
          Cooked Coconut Mussels
          </Typography>
        </CardContent>
        <CardActions>
          <Button> Cook </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

const Profile = () => {
  return (
    <Grid container spacing={3} columns={13} direction={{xs:'column',sm:'column',lg:'row'}}>
      <Grid item xs={3}>
        <Stack spacing='15px' >
          <SideProfile/>
          <UserSettings/>
        </Stack>
      </Grid>
      <Grid item xs={10} >
        <Item elevation={0} >Carousel ( Facem alta data )</Item>
        <Item elevation={0} >
          <Grid container columns={2} spacing='25px'>
            <RecipeCard/> 
            <RecipeCard/> 
            <RecipeCard/> 
            <RecipeCard/> 
            <RecipeCard/> 
            <RecipeCard/> 
            <RecipeCard/> 
          </Grid>
        </Item>
      </Grid>
    </Grid>
  )
}

export default Profile;