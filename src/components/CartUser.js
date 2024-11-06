import React from "react";
import styles from "../styles/Cart.module.css";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 20px; 
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

const CartUser = ({ cart, removeFromCart, userId }) => {
  const navigate = useNavigate();
  
  if (!userId) {
    return <div className="alert alert-warning">Debes estar logueado para ver tu carrito.</div>;
  }

  if (cart.length === 0) {
    return <div className="alert alert-info">Tu carrito está vacío.</div>;
  }

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBackToProducts = () => {
    navigate("/products");
  };

  const handlePayment = async () => {
    await window.Swal.fire({
      title: 'Pago Confirmado',
      text: 'Los productos llegarán en 7 días hábiles.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });

  };

  return (
    <div className={`${styles.container} mt-5`}>
      <FlexContainer>
        <h2>Carrito de Compras</h2>
        <BackButton onClick={handleBackToProducts}><i class="fa-solid fa-circle-left"></i>Volver</BackButton>
      </FlexContainer>
      <ul className={styles.productList}>
        {cart.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <div className={styles.productInfo}>
              <h5>{product.title}</h5>
              <p>Precio: ${product.price}</p>
              <button className="btn btn-danger" onClick={() => handleRemove(product.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <h5>Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</h5>
      </div>
      <button className="btn btn-primary" onClick={handlePayment}>Proceder al Pago</button>
    </div>
  );
};

export default CartUser;
