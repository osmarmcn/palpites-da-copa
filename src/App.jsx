import React from "react"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./componentes/Login"
import Home from "./paginas/Home"
import Singup from "./paginas/singup"
import { Dashboard } from "./paginas/Dashboard"


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/Singup" element={<Singup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
