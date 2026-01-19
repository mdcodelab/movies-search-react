
import './App.css';
 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import MovieCard from './components/MovieCard';
 import Home from './pages/Home';
 import Favorites from './pages/Favorites';
 import Navbar from './components/Navbar';
 
 function App() {
   return (
     <div>
        <Navbar></Navbar>

       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
         path="/favorites" element={<Favorites></Favorites>}></Route>
       </Routes>
     </div>
   )
 }
 
 export default App
 