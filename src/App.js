import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import About from "./components/About";
import LoginC from "./components/Login";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignupForm";
import Favorites from "./components/Favorites";
import CartUser from "./components/CartUser";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [favorites, setFavorites] = useState([]); 
  const [cart, setCart] = useState([]);
  const handleLogin = (id, name) => {
    setUserId(id);
    setUserName(name);
  };

  const handleLogout = () => {
    setUserId(null);
    setUserName('');
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
  };

  return (
    <Router>
      <Navbar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        userId={userId} 
        handleLogout={handleLogout} 
        userName={userName}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
        <Route path="/products" element={<ProductsList setFavorites={setFavorites} favorites={favorites} userId={userId} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/product/:id/:category" element={<ProductDetail />}  />


        <Route path="/products/:categoryName" element={<ProductsList setFavorites={setFavorites} favorites={favorites} userId={userId} addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginC onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/favorites" element={<Favorites setFavorites={setFavorites} favorites={favorites} />} />
        <Route path="/cart" element={<CartUser cart={cart} removeFromCart={removeFromCart} userId={userId} />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
