import React from 'react';
import GenresList from './components/GenresList';
import ProductsList from './components/ProductsList';
const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Tienda de Ropa en Línea</h1>
      <div className="row">
        {/* Columna para el listado de géneros */}
        <div className="col-md-4">
          <h2 className="mb-4">Géneros</h2>
          <GenresList />
        </div>
        
        {/* Columna para el listado de productos */}
        <div className="col-md-8">
          <h2 className="mb-4">Productos</h2>
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default App;
