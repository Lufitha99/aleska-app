import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoImage from "../Assets/logo.jpg";

const LogoStyled = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

function Logo() {
  const navigate = useNavigate();

  return (
    <LogoStyled
      src={LogoImage}
      alt="ALESKA Logo"
      onClick={() => navigate("/")}
    />
  );
}

export default Logo;
