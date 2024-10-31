import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../Assets/logo.jpg";

const NavbarContainer = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Logo = styled.img`
  height: 50px; /* Ajusta la altura del logo según necesites */
  width: 50px; /* Ancho igual que la altura para que sea un círculo perfecto */
  border-radius: 50%; /* Hace que la imagen sea redonda */
  object-fit: cover; /
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li`
  font-size: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  transition: color 0.3s ease;

  &:hover {
    color: #ffda77;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={LogoImage} alt="ALESKA Logo" />
      <NavLinks>
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
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
