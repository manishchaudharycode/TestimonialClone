
import './index.css';
import { Route, Routes } from "react-router-dom";

import Pricing from './page/pricing';
import SignUp from './page/signUp';
import SignIn from './page/signIn';
import Home from './page/home';
import WallOfLove from './page/wall-of-love';
import Features from './page/features';
import Integration from './page/integrations';
import Agency from './page/agency';
import EcommerceRetail from './page/customers-ecommerce-retail';

function App() {


  return (
 <div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/customers-ecommerce-retail' element={<EcommerceRetail/>} />
    <Route path='/agency' element={<Agency/>}/>
    <Route path='/integrations' element={<Integration/>} />
    <Route path='/features' element={<Features/>}/>
    <Route path="/pricing" element={<Pricing/>} />
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/wall-of-love' element={<WallOfLove/>} />
  </Routes>
 </div>
  )
}

export default App
