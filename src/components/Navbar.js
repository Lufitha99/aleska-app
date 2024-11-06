import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../Assets/logo.jpg";
import { getAllCategories } from "../api/Categories";

const NavbarContainer = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  color: #fff;
  position: sticky;
  z-index: 1000;
  top: 0;
  transition: background-color 0.3s ease;
  flex-direction: row;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
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
    display: none; // Mostrar u ocultar según el estado
    flex-direction: column;
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
    color: fuchsia;
    text-decoration: underline;
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
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 1rem 0;
  z-index: 999;

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
  text-transform: uppercase;

  @media (max-width: 768px) {
    flex-direction: column;
        list-style: none;
    display: flex;
    gap: 1rem;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
  }
`;
const NavLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
  ul {
    display: flex;
  }
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
    flex-grow: 0.8;
  }
`;
const StyledButton = styled.button`
  display: flex; /* Utiliza flexbox para alinear elementos en una línea */
  align-items: center; /* Centra verticalmente los elementos */
  color: inherit; /* Hereda el color del elemento padre */
  background-color: transparent; /* Fondo transparente, o ajusta según necesites */
  border: none; /* Sin borde, ajusta según necesites */
  cursor: pointer; /* Cambia el cursor al pasar el mouse */
  text-transform: uppercase;
  span {
    margin-right: 8px; /* Espacio entre elementos, ajusta el tamaño según sea necesario */
  }
  i {
    margin-right: 2px;
  }

  &:hover {
    color: fuchsia; /* Cambia el color al hacer hover */
  }
  p {
    margin: 0;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    p {
      display: none;
    }
    text-align: center;
    justify-content: center;
    display: flex;
    margin-left: 11%;

    
    width: max-content;
    margin: 16% 11% 4% -1%;
  }
  @media (max-width: 425px) {
    text-align: center;
    justify-content: center;
    display: flex;
    margin: 12% 11% 4% 28%;

  }
`;
const SpanMensaje = styled.span`
  marginleft: 8.5px;

  @media (max-width: 768px) {
    marginleft: 1.5px;
  }
  @media (max-width: 425px) {
    marginleft: 0.5px;
  }
`;
const categoryMapping = {
  Electrónica: "electronics",
  Joyería: "jewelery",
  Hombres: "men's clothing",
  Mujeres: "women's clothing",
};
function Navbar({
  selectedCategory,
  setSelectedCategory,
  userId,
  handleLogout,
  userName,
}) {
  const internalLogout = () => {
    // Aquí podrías agregar la lógica adicional que necesites antes de cerrar sesión
    console.log("Cerrando sesión internamente...");
    handleLogout(); // Llamar a la función de cierre de sesión pasada como prop
  };
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        if (data && Array.isArray(data) && data.length > 0) {
          setCategories(data.map((cat) => categoryMapping[cat] || cat));
        } else {
          setCategories(Object.keys(categoryMapping));
        }
      } catch (error) {
        setCategories(Object.keys(categoryMapping));
      }
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
        <Divlogo>
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
            {!isProductsPage ? (
              <>
                <NavItem>
                  <NavLink
                    to="/"
                    onClick={closeMenu}
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Inicio
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
                     nosotros
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    Contacto
                  </NavLink>
                </NavItem>
                {userId ? (
                  <NavItem style={{ display: "flex" }}>
                    <p style={{marginBottom: '0',color: '#fffefe'}}>{userName}</p>
                    <StyledButton onClick={internalLogout}>
                      <i
                        className="fa-regular fa-user"
                        style={{ marginLeft: "14px" }}
                      ></i>
                      <SpanMensaje>Cerrar sesión</SpanMensaje>
                    </StyledButton>
                  </NavItem>
                ) : (
                  <NavItem>
                    <NavLink
                      to="/login"
                      onClick={closeMenu}
                      className={location.pathname === "/login" ? "active" : ""}
                    >
                      Iniciar sesión
                      <i
                        className="fa-regular fa-user"
                        style={{ marginLeft: "14px" }}
                      ></i>
                    </NavLink>
                  </NavItem>
                )}
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
                  Inicio
                </CategoryButton>
                <CategoryButton
                  className={`${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory("all");
                    navigate("/products"); // Redirigir a la página de productos
                    closeMenu();
                  }}
                >
                  Todos
                </CategoryButton>
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    className={`${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      navigate(`/products/${categoryMapping[category]}`);
                    }}
                  >
                    {category}
                  </CategoryButton>
                ))}
                {userId ? (
                  <CategoryButton
                    className={`${
                      selectedCategory === "logout" ? "active" : ""
                    }`} // Cerrar sesión
                  >
                    <p style={{marginBottom: '0',color: '#fffefe'}}>{userName}</p>
                    <StyledButton onClick={internalLogout}>
                      <i
                        className="fa-regular fa-user"
                        style={{ marginLeft: "14px" }}
                      ></i>

                      <SpanMensaje>Cerrar sesión</SpanMensaje>

                    </StyledButton>
                  </CategoryButton>
                ) : (
                  <CategoryButton
                    className={`${
                      selectedCategory === "login" ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory("all");
                      navigate("/login"); // Redirigir a la página de login
                      closeMenu();
                    }}
                  >
                    Iniciar sesión
                    <i
                      className="fa-regular fa-user"
                      style={{ marginLeft: "14px" }}
                    ></i>
                  </CategoryButton>
                )}
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
              Inicio
            </CategoryButton>
            <CategoryButton
              className={`${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory("all");
                navigate("/products"); // Redirigir a la página de productos
                closeMenu();
              }}
            >
              Todos
            </CategoryButton>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                className={`${selectedCategory === category ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category);
                  // Usa el mapeo para obtener la URL en inglés
                  const englishCategory = categoryMapping[category];
                  navigate(`/products/${englishCategory}`); // Redirige a la categoría en inglés
                  closeMenu();
                }}
              >
                {category} {/* Esto mostrará el nombre en español */}
              </CategoryButton>
            ))}
            {userId ? (
              <CategoryButton
                className={`${selectedCategory === "logout" ? "active" : ""}`}
                onClick={internalLogout} // Cerrar sesión
              >
                <p style={{marginBottom: '0',color: '#fffefe'}}>{userName}</p>
                <StyledButton onClick={internalLogout}>
                  <i
                    className="fa-regular fa-user"
                    style={{ marginLeft: "14px" }}
                  ></i>
                  <SpanMensaje>Cerrar sesión</SpanMensaje>
                </StyledButton>
              </CategoryButton>
            ) : (
              <CategoryButton
                className={`${selectedCategory === "login" ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory("all");
                  navigate("/login"); // Redirigir a la página de login
                  closeMenu();
                }}
              >
                Iniciar sesión
                <i
                  className="fa-regular fa-user"
                  style={{ marginLeft: "14px" }}
                ></i>
              </CategoryButton>
            )}
          </CategoriesContainer>
        ) : (
          <NavLinksContainer>
            <NavLinks>
              <NavItem>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Inicio
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
                  Nosotros
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contacto
                </NavLink>
              </NavItem>
              {userId ? (
                <NavItem>
                  <p style={{marginBottom: '0',color: '#fffefe'}}>{userName}</p>
                  <StyledButton onClick={internalLogout}>
                    <i
                      className="fa-regular fa-user"
                      style={{ marginLeft: "14px" }}
                    ></i>
                    <SpanMensaje>Cerrar sesión</SpanMensaje>
                  </StyledButton>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className={location.pathname === "/login" ? "active" : ""}
                  >
                    Iniciar sesión
                    <i
                      className="fa-regular fa-user"
                      style={{ marginLeft: "14px" }}
                    ></i>
                  </NavLink>
                </NavItem>
              )}
            </NavLinks>
          </NavLinksContainer>
        )}
      </MobileMenu>
    </NavbarContainer>
  );
}

export default Navbar;
