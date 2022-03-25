import axios from 'axios';

async function init(nr){
  const { data } = await axios.get( 'https://randomuser.me/api/?results='+nr );
  return data;
}

export default init;


