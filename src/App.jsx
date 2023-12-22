import React,{ useState } from 'react';
import './App.css';
import SignUp from './pages/signup';
import Login from "./pages/login";
import Home from "./pages/home";
import { Route,Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>

      </Routes>
   
    </>
  ); 
}

export default App;
