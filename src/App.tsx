
import './index.css';
import { Route, Routes } from "react-router-dom";
import Home from "./page/homePage";
import Pricing from './page/pricing';
import SignUp from './page/signUp';
import SignIn from './page/signIn';
function App() {


  return (
 <div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/pricing" element={<Pricing/>} />
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/signup' element={<SignUp/>} />
  </Routes>
 </div>
  )
}

export default App
