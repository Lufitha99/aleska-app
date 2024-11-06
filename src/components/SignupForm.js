import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Assets/logo.jpg";
import Form from "../Assets/Form.jpeg";
import { createUser, getUserById } from "../api/Users";
import { useNavigate, useLocation } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const SignupContainer = styled.div`
  display: flex;
  height: auto;
  padding: 20px;
  width: 60%;
  max-width: 100%;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 8px;
    @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    flex-direction: column;  // Cambiar la dirección a columna en pantallas pequeñas
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 10px;
  
    @media (max-width: 1024px) {
    height: auto; // Ajustar altura para móviles
  }
  @media (max-width: 768px) {
    flex-direction: column; // Cambiar la dirección a columna en pantallas pequeñas
    padding: 10px;
    height: auto; // Ajustar altura para móviles
  }
`;

const SignupFormStyled = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 0 0 90%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Para pantallas pequeñas, mostrar solo una columna
    gap: 10px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 12px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #555;
  }
`;

const FormImageContainer = styled.div`
  height: 100%;
  background-size: cover;
  flex: 0 0 32%;
  background-repeat: no-repeat;
  min-width: 300px;
  background-position: center;

  @media (max-width: 768px) {
    display: none; // Oculta el contenedor de la imagen en pantallas móviles
  }
@media (min-width: 769px) and (max-width: 1440px) {
  img {
    height: 87vh;
  }
}

@media (min-width: 1441px) and (max-width: 2560px) {
  img {
    height: 67vh;
  }
}
`;

const SignUpForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: location.state?.email || "",
    usuario: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await createUser(formData);
      console.log("User registered:", user);

      await window.Swal.fire({
        title: "Registro Exitoso",
        text: "Tu cuenta ha sido creada exitosamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      const randomUserId = Math.floor(Math.random() * 4) + 1;
      const randomUser = await getUserById(randomUserId);

      navigate("/login", {
        state: {
          email: randomUser.email,
          password: randomUser.password,
        },
      });
    } catch (error) {
      console.error("Error al registrar el  usuario:", error.message);
      await window.Swal.fire({
        title: "Error",
        text: error.message || "No se pudo registrar el usuario. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <Container>
      <SignupContainer>
        <FormContainer>
          <SignupFormStyled onSubmit={handleSubmit}>
            <Header>
              <LogoImage src={Logo} alt="Logo" />
              <h2>Registrarme</h2>
              <p>Crear una cuenta nueva.</p>
            </Header>
            <FormGrid>
              {Object.entries(formData).map(([key, value]) => (
                <InputGroup key={key}>
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)}*</label>
                  <Input
                    type={key === "password" ? "password" : "text"}
                    name={key}
                    value={value}
                    placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)}*`}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              ))}
            </FormGrid>
            <Button type="submit">Registrarse</Button>
          </SignupFormStyled>
        </FormContainer>
        <FormImageContainer>
          <img src={Form} alt="model"/>
        </FormImageContainer>
      </SignupContainer>
    </Container>
  );
};

export default SignUpForm;