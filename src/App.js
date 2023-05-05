import React from 'react'
import Navbar from './components/Navbar';
import Login from './Authorization/Login';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Navbar/>}/>
   </Routes>
  
  );
};

export default App;
