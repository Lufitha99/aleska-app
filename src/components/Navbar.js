import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../Assets/logo.jpg";
import { getAllCategories } from "../api/Categories";

const NavbarContainer = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos */
  color: #fff;
  position: sticky;
  z-index: 1000;
  top: 0;
  transition: background-color 0.3s ease;
  flex-direction: row; /* Mantener en fila para alinear horizontalmente */

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column; /* Cambiar a columna en pantallas más pequeñas */
  }
`;

const Logo = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; // Ocultar en móviles por defecto
  }
`;

const NavItem = styled.li`
  font-size: 1rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.9rem; // Tamaño de fuente más pequeño en móviles
  }
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

  &.active {
    color: fuchsia; // Estilo para el enlace activo
    text-decoration: underline; // Subrayado para indicar el enlace activo
  }
`;

const Hamburger = styled.div`
  display: none; // Ocultar en pantallas grandes
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; // Mostrar solo en móviles
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.3s;
  }
`;

const MobileMenu = styled.div`
  display: none; // Ocultar en pantallas grandes
  position: absolute; // Posición absoluta para el menú
  top: 80px; // Ajustar según la altura del Navbar
  left: 0;
  right: 0;
  background-color: #000; // Fondo del menú
  padding: 1rem 0; // Padding del menú
  z-index: 999; // Asegurar que esté por encima

  @media (max-width: 768px) {
    display: ${({ isOpen }) =>
      isOpen ? "block" : "none"}; // Mostrar u ocultar según el estado
  }
`;

const CategoriesContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryButton = styled.li`
  background: none;
  border: none;
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

  @media (max-width: 768px) {
    font-size: 0.9rem; // Tamaño de fuente más pequeño en móviles
  }
`;
const Divlogo = styled.div`
display: flex;
justify-content: start;
flex-grow: 0.5;
  @media (max-width: 768px) {
flex-grow: 0.9;
  }
  @media (max-width: 425px) {
flex-grow: 0.9;
  }
`
function Navbar({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar el menú
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const isProductsPage = location.pathname.startsWith("/products");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <div className="d-flex align-items-center" style={{ width: "100%" }}>
        {" "}
        {/* Alinea verticalmente el contenido */}
        <Divlogo
         
        >
          {" "}
          {/* Permite que el logo use todo el espacio disponible */}
          <Logo
            src={LogoImage}
            alt="ALESKA Logo"
            onClick={() => {
              navigate("/"); // Redirigir a la página de inicio
            }}
          />
        </Divlogo>
        <Hamburger onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        <div className="d-flex justify-content-center">
          <NavLinks>
            {/* Mostrar enlaces en la vista de escritorio */}
            {!isProductsPage ? (
              <>
                <NavItem>
                  <NavLink
                    to="/"
                    onClick={closeMenu}
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/products"
                    onClick={closeMenu}
                    className={
                      location.pathname.startsWith("/products") ? "active" : ""
                    }
                  >
                    Productos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/about"
                    onClick={closeMenu}
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className={location.pathname === "/login" ? "active" : ""}
                  >
                    Login
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <CategoriesContainer>
                <CategoryButton
                  className={`${selectedCategory === "home" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory("all");
                    navigate("/"); // Redirigir a la página de productos
                    closeMenu();
                  }}
                >
                  Home
                </CategoryButton>
                <CategoryButton
                  className={`${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory("all");
                    navigate("/products"); // Redirigir a la página de productos
                    closeMenu();
                  }}
                >
                  All
                </CategoryButton>
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    className={`${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      navigate(`/products/${category}`); // Redirigir a la categoría seleccionada
                      closeMenu();
                    }}
                  >
                    {category}
                  </CategoryButton>
                ))}
                <CategoryButton
                  className={`${selectedCategory === "login" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory("all");
                    navigate("/login"); // Redirigir a la página de productos
                    closeMenu();
                  }}
                >
                  Login
                </CategoryButton>
              </CategoriesContainer>
            )}
          </NavLinks>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen}>
        {isProductsPage ? (
          <CategoriesContainer>
            <CategoryButton
              className={`${selectedCategory === "home" ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory("all");
                navigate("/"); // Redirigir a la página de productos
                closeMenu();
              }}
            >
              Home
            </CategoryButton>
            <CategoryButton
              className={`${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory("all");
                navigate("/products"); // Redirigir a la página de productos
                closeMenu();
              }}
            >
              All
            </CategoryButton>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                className={`${selectedCategory === category ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category);
                  navigate(`/products/${category}`); // Redirigir a la categoría seleccionada
                  closeMenu();
                }}
              >
                {category}
              </CategoryButton>
            ))}
            <CategoryButton
              className={`${selectedCategory === "login" ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory("all");
                navigate("/login"); // Redirigir a la página de productos
                closeMenu();
              }}
            >
              Login
            </CategoryButton>
          </CategoriesContainer>
        ) : (
          // Mostrar enlaces de navegación en la vista móvil
          <CategoriesContainer>
            <NavItem>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/products"
                onClick={closeMenu}
                className={
                  location.pathname.startsWith("/products") ? "active" : ""
                }
              >
                Productos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/login"
                onClick={closeMenu}
                className={location.pathname === "/login" ? "active" : ""}
              >
                Login
              </NavLink>
            </NavItem>
          </CategoriesContainer>
        )}
      </MobileMenu>
    </NavbarContainer>
  );
}

export default Navbar;
