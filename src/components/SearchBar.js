import React, { useState } from 'react';

const SearchBar = ({ products, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Actualiza los resultados de búsqueda en tiempo real
    if (value) {
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(value.toLowerCase()) || // Nombre del producto
        product.category.toLowerCase().includes(value.toLowerCase()) || // Categoría
        product.price.toString().includes(value) // Precio
      );
      onSearchResults(filteredProducts);
    } else {
      onSearchResults(products); // Si no hay búsqueda, muestra todos los productos
    }
  };

  return (
    <div className="search-bar mb-4">
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={searchTerm} 
        onChange={handleChange} // Llama a handleChange al escribir
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
