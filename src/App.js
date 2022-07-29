import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  

  return (
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes> 
          <Footer />
        </Sidebar>
      </BrowserRouter>
  );
}

export default App;
