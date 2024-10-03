import Centenario from './pages/Centenario';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/main.css'
import Finish from './pages/SubmitForm';
import Template from './pages/Template';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Template /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/finish' element={ <Finish /> } />
          <Route path='/projects/centenario' element={ <Centenario /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
