import React, { useState } from 'react';
import '../styles/Login.css';
import Logo from '../Assets/logo.jpg'; 
import Login from '../Assets/Login.jpeg'; 
import { getAllUsers } from '../api/Users';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginC = ({ onLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState(location.state?.email || ''); 
  const [password, setPassword] = useState(location.state?.password || ''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const users = await getAllUsers();
      const user = users.find(user => (user.username === username || user.email === username));

      if (user && user.password === password) {
        onLogin(user.id, user.username);
        await window.Swal.fire({
          title: '¡Éxito!',
          text: 'Has iniciado sesión correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        navigate('/');
      } else {
        await window.Swal.fire({
          title: 'Error',
          text: 'Credenciales inválidas',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      await window.Swal.fire({
        title: 'Error',
        text: 'Error en el inicio de sesión. Por favor, intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };


  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form-container">
          <div className="login-form">
            <img src={Logo} alt="Logo" className="login-logo" />
            <h2>Iniciar Sesión</h2>
            <p>Por favor ingrese con su cuenta.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Usuario o correo electrónico*</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Usuario o correo electrónico" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Contraseña*</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Contraseña" 
                  required 
                />
              </div>
              <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
            <div className="login-links">
              <button onClick={() => console.log("Forgot password clicked")} className="btn forgot-password">¿Olvidaste tu Contraseña?</button>
              <p>Aún no tengo cuenta.{" "}
                <button onClick={handleSignUpClick} className="btn sign-up-link">Registrarme</button>
              </p>
            </div>
          </div>
        </div>
        <div className="login-image-container" style={{ backgroundImage: `url(${Login})` }} />
      </div>
    </div>
  );
};

export default LoginC;