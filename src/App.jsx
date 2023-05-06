// import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom";
import {Hero,Navbar,About, Footer} from "./components"


const App= ()=> {
  

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-[#FFFFFF]">
     
      <Navbar/>
      <Hero/>
      
      <About/>
      <Footer/>
    
    </div>
      </BrowserRouter>
    
  )
}

export default App
