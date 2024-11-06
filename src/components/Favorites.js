import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

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
   background-color: #ff69b4;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: white;
    border-radius: 10px;

  &:hover {
    background-color: #555;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 20px; 
`;
const Favorites = ({ favorites, setFavorites }) => {
  const navigate = useNavigate(); 

  const handleRemoveFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== productId));
  };

  const handleBackToProducts = () => {
    navigate("/products"); 
  };

  return (
    <FavoritesContainer>
      <FlexContainer>
        <h3>Favoritos</h3>
        <BackButton onClick={handleBackToProducts}><i class="fa-solid fa-circle-left"></i>Volver</BackButton>
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
    </FavoritesContainer>
  );
};

export default Favorites;
