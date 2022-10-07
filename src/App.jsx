import React from "react"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./componentes/Login"
import Home from "./paginas/Home"
import Singup from "./paginas/singup"
import { Dashboard } from "./paginas/Dashboard"
import { Profile } from "./paginas/Profile"


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/Singup" element={<Singup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
