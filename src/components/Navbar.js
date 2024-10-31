import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../Assets/logo.jpg";
import { getAllCategories } from "../api/Categories"; // Asegúrate de que esta función esté en el archivo correcto

// Estilos para la barra de navegación
const NavbarContainer = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column; // Para alinear nav y categorías en columnas
  color: #fff;
  height: auto;
`;
const Logo = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem; // Espacio entre el logo y los enlaces
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0; // Eliminar margen para un alineamiento adecuado
  padding: 0; // Eliminar padding
  flex-grow: 1; // Hacer que los enlaces crezcan para ocupar espacio
  justify-content: center; // Centrar los enlaces
`;

const NavItem = styled.li`
  font-size: 1rem;
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  transition: color 0.3s ease;

  &:hover {
    color: fuchsia;
    text-decoration: underline;
  }
`;

const CategoriesContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0; // Eliminar margen para un alineamiento adecuado
  padding: 0; // Eliminar padding
  flex-grow: 1; // Hacer que los enlaces crezcan para ocupar espacio
`;

const CategoryButton = styled.li`
  background: none;
  border: none; // Borde blanco para que se vea el botón
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 300;
  transition: color 0.3s ease;
  text-transform: uppercase;

  &.active,
  &:hover {
    color: fuchsia;
    text-decoration: underline;
  }
`;

function Navbar({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const location = useLocation(); // Obtener la ubicación actual
  const navigate = useNavigate(); // Usar useNavigate para la navegación

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
      console.log("Categorías establecidas en el estado:", data);
    };
    fetchCategories();
  }, []);

  const isProductsPage = location.pathname === "/products" || location.pathname === "/store"; // Verificar si estamos en la página de productos

  return (
    <NavbarContainer>
      <div className="d-flex ">
      <div className="d-flex justify-content-start">
        <Logo src={LogoImage} alt="ALESKA Logo"  onClick={() => {
              navigate("/"); // Redirigir a la página de inicio
            }}/>
      </div>
      <div className="d-flex justify-content-center" style={{ flexGrow: 1 }}>
        <NavLinks>
          {!isProductsPage && (
            <>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products">Productos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
            </>
          )}
        </NavLinks>
        {isProductsPage && (
        <CategoriesContainer>
          <CategoryButton
            className={` ${selectedCategory === "home" ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory("all");
              navigate("/"); // Redirigir a la página de inicio
            }}
          >
            Home
          </CategoryButton>
          <CategoryButton
            className={` ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </CategoryButton>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              className={` ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoriesContainer>
      )}
        </div>
        
      </div>

      
    </NavbarContainer>
  );
}

export default Navbar;
