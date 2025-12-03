
import './index.css';
import { Route, Routes } from "react-router-dom";
import Home from "./page/homePage";
function App() {


  return (
 <div>
  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>
 </div>
  )
}

export default App
