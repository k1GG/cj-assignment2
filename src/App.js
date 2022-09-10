import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom'

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Background from './components/Background';


function app() {
   return(
    <BrowserRouter>
      <Navbar />
      <Background />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
   );

}

export default app;