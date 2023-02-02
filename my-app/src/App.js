import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'; 
import FicheLogement from './pages/FicheLogement';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Footer from './compenents/Footer';

import './App.css';
import Header from './compenents/Header';
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/FicheLogement/:id" element={<FicheLogement/>} />
        <Route path = "/About" element = {<About/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}



export default App;

