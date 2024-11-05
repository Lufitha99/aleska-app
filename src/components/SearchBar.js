import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 4rem; /* Margen inferior */
  width: 100%; /* Asegúrate de que el contenedor ocupe todo el ancho disponible */
  display: flex; /* Usar flexbox para el contenedor */
  justify-content: center; /* Centrar el input dentro del contenedor */
`;

const SearchInput = styled.input`
  width: 100%; /* Asegura que el input ocupe el 100% del contenedor */
  max-width: 600px; /* Establecer un ancho máximo para pantallas grandes */
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
    <SearchContainer>
      <SearchInput 
        type="text" 
        placeholder="Buscar por nombre, precio, descripción..." 
        value={searchTerm} 
        onChange={handleChange} 
      />
    </SearchContainer>
  );
};

export default SearchBar;
