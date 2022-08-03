import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Details from './pages/Details';
import './global.css'
 

ReactDOM.render(
  <BrowserRouter> {/*Na documentação, colocar essa tag antes de tudo*/}
    <Routes> {/*Englobar todas as rotas dentro dessa tag*/}
      <Route path="/" element={<Home/>}/> {/*Aqui são os caminhos, esse é o inicial*/}
      <Route path="/details/:id" element={<Details/>}/> {/*Essa é a proxima rota*/}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);