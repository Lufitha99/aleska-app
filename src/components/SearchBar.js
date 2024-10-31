import React, { useState } from 'react';
import styled from 'styled-components';


const SearchContainer = styled.div`
  margin-bottom: 4rem; /* Margen inferior */
  
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #f1b4e5;
    background-color: #fbf4f3;
    font-size: 1rem;
    transition: border-color 0.3s;

  &:focus {
    border-color: #ff69b4; /* Color del borde al enfocar */
    outline: none; /* Sin borde de enfoque */
  }
`;
const SearchIcon = styled.i`
    position: absolute;
    top: 37%;
    left: 27%;
    color: #f1b4e5;
`;

const SearchBar = ({ products, onSearchResults }) => {
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
    <SearchContainer className='row m-5 p-5'>
      <SearchInput 
        type="text" 
        placeholder="Buscar por nombre, precio, descripción..." 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <SearchIcon className="fa-solid fa-magnifying-glass" /> 
    </SearchContainer>
  );
};

export default SearchBar;
