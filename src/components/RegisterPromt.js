import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPrompt() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleRegister = () => {
    console.log("Registro con correo:", email);
    navigate("/login");
  };

  // Función para obtener el estilo del botón
  const buttonStyle = {
    marginTop: "10px",
    backgroundColor: isHovered ? "Black" : "#FEEBB8", // Cambiar colores en hover
    border: "none",
    color: isHovered ? "White" : "Black", // Cambiar colores en hover
    borderRadius: "25px",
    padding: "10px 30px",
    fontSize: "2rem",
    letterSpacing: isHovered ? "6px" : "4px", // Aumentar espacio entre letras en hover
    fontWeight: "400",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginLeft: "-10px",
    fontFamily: "'Abril Fatface', sans-serif",
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>¡Únete a nosotros!</h2>
      <p style={styles.parrafo}>
        Regístrate para poder dar reseñas, interactuar con otros clientes y disfrutar de descuentos exclusivos.
      </p>
      <input
        type="email"
        placeholder="Ingresa tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleRegister}
        style={buttonStyle} // Usar la función para obtener el estilo
      >
        Registrarme
      </button>
    </div>
  );
}

// Estilos
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#F9F9F9",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "5% auto",
    maxWidth: "1000px",
  },
  title: {
    fontFamily: "'Abril Fatface', sans-serif",
    fontSize: "3rem",
    color: "Black",
    marginBottom: "10px",
  },
  parrafo: {
    fontFamily: "'Aboreto', sans-serif",
    fontSize: "1.5rem",
    fontWeight: "100",
    color: "Black",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    marginBottom: "10px",
    fontSize: "1rem",
    fontFamily: "'Abril Fatface', sans-serif",
  },
};

export default RegisterPrompt;
