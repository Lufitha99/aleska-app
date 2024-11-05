import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import About from "./components/About";
import LoginC from "./components/Login";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <Router>  
      <Navbar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        isProductPage={window.location.pathname === "/products"} // Cambia aquí según la ruta actual
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList selectedCategory={selectedCategory} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/Login" element={<LoginC />}/>
      </Routes>
    </Router>
  );
};

export default App;

