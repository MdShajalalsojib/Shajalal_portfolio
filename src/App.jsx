import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Coding from './components/Coding';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/"element={<Home/>}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/education" element={<Education/>}></Route>
        <Route path = "/experience"element={<Experience/>}></Route>
        <Route path = "/skills"element={<Skills/>}></Route>
        <Route path = "/coding"element={<Coding/>}></Route>
        <Route path = "/projects"element={<Projects/>}></Route>
        <Route path = "/contact"element={<Contact/>}></Route>

      </Routes>
      
      </BrowserRouter>

    </div>
  );
};

export default App;