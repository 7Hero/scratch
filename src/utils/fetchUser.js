import axios from 'axios';

const url = 'https://randomuser.me/api/?results='
async function init(nr){
  const { data } = await axios.get(url+nr);
  return data
}


export default init; 