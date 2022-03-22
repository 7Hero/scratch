import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App: React.FC = () => {
  
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='login' element={<Login/>} />
      <Route path='sign_up' element={<SignUp/>} />
      {/* O sa fie protected route  */}
      <Route path='Profile' element={"vasea"} />
    </Routes>
  );
}

export default App;