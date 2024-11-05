import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import About from "./components/About";
import LoginC from "./components/Login";
import Footer from "./components/Footer";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <Router>  
      <Navbar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <Routes>
        <Route path="/" element={<Home setSelectedCategory={setSelectedCategory} />} /> {/* Pasa la función aquí */}
        <Route path="/products" element={<ProductsList selectedCategory={selectedCategory} />} />
        <Route path="/product/:id/:category" element={<ProductDetail />} />
        <Route path="/products/:category" element={<ProductsList selectedCategory={selectedCategory} />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/Login" element={<LoginC />}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
