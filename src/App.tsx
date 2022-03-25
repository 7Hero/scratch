import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavLayout from "./Layouts/NavLayout";
import Profile from "./components/Profile";
import PrivateRoute from './components/PrivateRoute'
import { useEffect } from "react";
const App: React.FC = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    if( localStorage.logged ){
      navigate('profile');
    }
  },[])
  
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='login' element={<Login/>} />
      <Route path='sign_up' element={<SignUp/>} />
      {/* O sa fie protected route  */}
      <Route path='profile' element={<PrivateRoute element={<NavLayout/>} />}>
        <Route index element={ <Profile/>}/>
      </Route>
    </Routes>
  );
}

export default App;
