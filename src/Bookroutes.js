import React from 'react'
import {Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function Bookroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
    </Routes>
  );
}

export default Bookroutes