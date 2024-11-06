import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const FavoritesContainer = styled.div`
  margin: 20px;
`;

const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin-right: 10px;
`;

const Details = styled.div`
  flex-grow: 1;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;

const BackButton = styled.button`
  display: flex;
  padding: 10px 15px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; // Alinea los elementos en los extremos
  align-items: center; // Centra verticalmente los elementos
  margin-bottom: 20px; // Espacio en la parte inferior si es necesario
`;
const Favorites = ({ favorites, setFavorites }) => {
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  const handleRemoveFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== productId));
  };

  const handleBackToProducts = () => {
    navigate("/products"); // Redirige a la página de productos
  };

  return (
    <FavoritesContainer>
      <FlexContainer>
        <h3>Favoritos</h3>
        <BackButton onClick={handleBackToProducts}>Volver a Productos</BackButton>
      </FlexContainer>
      {favorites.length ? (
        favorites.map((product) => (
          <FavoriteItem key={product.id}>
            <Image src={product.image} alt={product.title} />
            <Details>
              <h5>{product.title}</h5>
              <p>Precio: ${product.price}</p>
            </Details>
            <RemoveButton onClick={() => handleRemoveFromFavorites(product.id)}>
              <i className="fas fa-trash"></i>
            </RemoveButton>
          </FavoriteItem>
        ))
      ) : (
        <p>No tienes productos en favoritos.</p>
      )}
      {/* Botón para volver a productos */}
    </FavoritesContainer>
  );
};

export default Favorites;
