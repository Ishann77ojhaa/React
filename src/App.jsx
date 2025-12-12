
// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Increase from './Pages/Increase/Increase'

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/contact' element = {<Contact/>}/>
       <Route path='/increase' element = {<Increase/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
