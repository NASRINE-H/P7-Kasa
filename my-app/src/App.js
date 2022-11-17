import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'; 
import FicheLogement from './pages/FicheLogement';
import NotFound from './pages/NotFound';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <Routes>
        <Route
         path = "*" element = {<Home/>} />
          
       
      
      
         <Route path = "/FicheLogement" element={<FicheLogement/>} />
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/NotFound" element = {<NotFound/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}



export default App;

