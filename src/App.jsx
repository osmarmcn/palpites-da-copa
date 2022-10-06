import React from "react"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./componentes/Login"
import Home from "./paginas/Home"


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>

  
  )
}

export default App
