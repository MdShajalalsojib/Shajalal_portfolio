import React from 'react';
import { Route, Routes} from 'react-router-dom';
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
      
     
          <>
          <Routes> 
         <Route path='/' element={Home }/>
         <Route path='/about'element={About }/>
         <Route path='/coding'element={Coding }/>
         <Route path='/contact'element={Contact }/>
         <Route path='/education'element={Education }/>
         <Route path='/experience'element={Experience }/>
         <Route path='/projects'element={Projects }/>
         <Route path='/skills'element={Skills }/>
         </Routes>
          </>
       
      
     
  );
};

export default App;