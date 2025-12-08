
import './index.css';
import { Route, Routes } from "react-router-dom";
import Home from "./page/homePage";
import Pricing from './page/pricing';
function App() {


  return (
 <div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/pricing" element={<Pricing/>} />
  </Routes>
 </div>
  )
}

export default App
