import { useEffect, useState } from 'react';

const useScreenWidth = (props) => {

  const [windowWidth,setwindowWidth] = useState(window.innerWidth);
  useEffect(()=> {
    window.addEventListener('resize', ()=>{
      setwindowWidth(window.innerWidth);
    });
  },[props.matches])

  return windowWidth;
}

export default useScreenWidth