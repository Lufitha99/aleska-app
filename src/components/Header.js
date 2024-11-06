import React, { useState } from "react";
import { Link } from "react-router-dom";
import KendallImage from "../Assets/Kendall.jpg";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  text-align: left;
  margin-bottom: -12%;
  overflow: hidden; // Para evitar que la imagen se desborde

  @media (max-width: 768px) {
margin-bottom: 5%;
  }
`;

const HeaderImage = styled.img`
  mask-image: linear-gradient(to right, rgb(0 0 0 / 0%), black 20%);
  width: 114%;
  height: 120%;
  transform: translate(12%, -13%);
  position: relative;
  filter: brightness(0.9);
  z-index: -1;
  clip-path: inset(0 0 10% 0);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%; // Ajustar el ancho en móviles
    height: auto; // Mantener la proporción de la imagen
    transform: translateX(32%); // Eliminar la traducción en móviles
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: black;
  font-weight: bold;
  margin-top: 30px;
  padding-left: 6%;
  padding-bottom: 23%;

  @media (max-width: 768px) {
    left: 10px; // Ajustar la posición en móviles
    padding-left: 5%; // Reducir padding en móviles
  }
`;

const Title = styled.h1`
  font-family: "Abril Fatface", sans-serif;
  font-size: 6.5rem;

  @media (max-width: 768px) {
    font-size: 4rem; // Reducir tamaño de fuente en móviles
  }
    @media (max-width: 425px) {
    font-size: 2rem; // Reducir tamaño de fuente en móviles
  }
`;

const Paragraph = styled.p`
  font-family: "Aboreto", sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
    margin: 0;
    color: #3c3c3c;
  @media (max-width: 768px) {
    font-size: 1rem; // Reducir tamaño de fuente en móviles
  }
        @media (max-width: 425px) {
    font-size: 0.8rem; // Reducir tamaño de fuente en móviles
  }
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: ${({ isHovered }) => (isHovered ? "black" : "#FEEBB8")};
  border: none;
  color: ${({ isHovered }) => (isHovered ? "white" : "black")};
  border-radius: 25px;
  padding: 10px 30px;
  font-size: 2rem;
  letter-spacing: ${({ isHovered }) => (isHovered ? "6px" : "4px")};
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: -10px;
  font-family: "'Abril Fatface', sans-serif";

  @media (max-width: 768px) {
    font-size: 1rem; // Reducir tamaño de fuente del botón en móviles
    padding: 8px 20px; // Reducir padding del botón en móviles
  }
`;

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HeaderContainer>
      <HeaderImage src={KendallImage} alt="img" />
      <ContentContainer>
        <Title>AlESKA</Title>
        <Paragraph>
          Estilo, elegancia y tecnología
          <br />
          al alcance de un clic.
        </Paragraph>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <Button
            isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            COMPRA AHORA

          </Button>
        </Link>
      </ContentContainer>
    </HeaderContainer>
  );
}

export default Header;
