import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Coding from './pages/Coding';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
 


const App = () => {
  return (
      
    <BrowserRouter> 
         <Routes> 
         <Route path='/'element={Home}></Route>
         <Route path='/about'element={About}></Route>
         <Route path='/coding'element={Coding}></Route>
         <Route path='/contact'element={Contact}></Route>
         <Route path='/education'element={Education}></Route>
         <Route path='/experience'element={Experience}></Route>
         <Route path='/projects'element={Projects}></Route>
         <Route path='/skills'element={Skills}></Route>
         </Routes>
       
     </BrowserRouter> 
     
  )
};

export default App;