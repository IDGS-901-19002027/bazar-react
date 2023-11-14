import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import DetailProduct from './components/DetailProducts';
import Products from './components/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:name" element={<Products/>} />
        <Route path="/detail/:id" element={<DetailProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
