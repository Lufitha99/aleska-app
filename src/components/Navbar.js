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
    display: none; 
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  font-size: 1rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
  display: none; 
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; 
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
  display: none; 
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 1rem 0;
  z-index: 999;

  @media (max-width: 768px) {
    display: ${({ isOpen }) =>
      isOpen ? "block" : "none"}; 
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
    font-size: 0.9rem; 
  }
`;

const Divlogo = styled.div`
  display: flex;
  justify-content: start;
  flex-grow: 0.5;
  @media (max-width: 768px) {
    flex-grow: 1;
  }
  @media (max-width: 425px) {
    flex-grow: 1;
  }
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center; 
  color: inherit; 
  background-color: transparent; 
  border: none; 
  cursor: pointer; 
  text-transform: uppercase;
  span {
    margin-right: 8px; 
  }
  i {
    margin-right: 2px;
  }

  &:hover {
    color: fuchsia;
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
    console.log("Cerrando sesión internamente...");
    handleLogout(); 
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
              navigate("/"); 
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
                    Sobre nosotros
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
                    navigate("/"); 
                    closeMenu();
                  }}
                >
                  Inicio
                </CategoryButton>
                <CategoryButton
                  className={`${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory("all");
                    navigate("/products"); 
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
                    }`} 
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
                      navigate("/login"); 
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
                navigate("/"); 
                closeMenu();
              }}
            >
              Inicio
            </CategoryButton>
            <CategoryButton
              className={`${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory("all");
                navigate("/products"); 
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
                  
                  const englishCategory = categoryMapping[category];
                  navigate(`/products/${englishCategory}`); 
                  closeMenu();
                }}
              >
                {category}
              </CategoryButton>
            ))}
            {userId ? (
              <CategoryButton
                className={`${selectedCategory === "logout" ? "active" : ""}`}
                onClick={internalLogout} 
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
                  navigate("/login"); 
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
                  Sobre nosotros
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
