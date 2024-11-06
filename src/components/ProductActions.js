import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActionContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
   background-color: #ff69b4;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: white;
    border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e13f7d;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #FDB5EB;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
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

const ProductActions = ({ cartItemsCount, userId }) => {
  return (
    <ActionContainer>
      <Link to="/products">
        <BackButton style={{marginRight: '10%'}}><i class="fa-solid fa-circle-left"></i>Volver</BackButton>
      </Link>
      
      {userId && (
        <Link to="/cart" style={{border: 'none', textDecoration: 'none'}}>
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
    </ActionContainer>
  );
};

export default ProductActions;
