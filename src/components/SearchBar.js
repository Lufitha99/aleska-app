import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #f1b4e5;
  background-color: #fbf4f3;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff69b4;
    outline: none;
  }
`;

const IconContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  color: #FDB5EB;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
`;

const FavoriteCount = styled.span`
  position: absolute;
  top: -12px;
  right: -12px;
  background-color: #ff69b4;
  border-radius: 50%;
  color: white;
  padding: 0.3rem 0.5rem;
  font-size: 0.6rem;
  min-width: 20px;
  text-align: center;
`;

const CartCount = styled.span`
  position: absolute;
  top: -12px;
  right: -12px;
  background-color: #ff69b4;
  border-radius: 50%;
  color: white;
  padding: 0.3rem 0.5rem;
  font-size: 0.6rem;
  min-width: 20px;
  text-align: center;
`;

const SearchBar = ({ products, onSearchResults, favorites, userId, cartItemsCount }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase()) ||
        product.price.toString().includes(value)
      );
      onSearchResults(filteredProducts);
    } else {
      onSearchResults(products);
    }
  };

  return (
    <SearchContainer>
      <SearchInput 
        type="text" 
        placeholder="Buscar por nombre, precio, descripción..." 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <Link to="/favorites" style={{border: 'none', textDecoration: 'auto'}}>
        <IconContainer>
          <i className="fa-solid fa-heart" style={{fontSize: '1.8rem'}}></i>
          {favorites > 0 && (
            <FavoriteCount>
              {favorites}
            </FavoriteCount>
          )}
        </IconContainer>
      </Link>
      {userId && (
        <Link to="/cart" style={{border: 'none', textDecoration: 'auto'}}>
          <IconContainer>
            <i className="fa-solid fa-shopping-cart" style={{fontSize: '1.8rem'}}></i>
            {cartItemsCount > 0 && (
              <CartCount>
                {cartItemsCount}
              </CartCount>
            )}
          </IconContainer>
        </Link>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
