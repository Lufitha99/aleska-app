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
            <h2>Log in</h2>
            <p>Please log in to your account.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username or email*</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Username or email" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Password*</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password" 
                  required 
                />
              </div>
              <button type="submit" className="login-button">Sign In</button>
            </form>
            <div className="login-links">
              <button onClick={() => console.log("Forgot password clicked")} className="btn forgot-password">Forgot password?</button>
              <p>I don’t have an account yet.{" "}
                <button onClick={handleSignUpClick} className="btn sign-up-link">Sign up</button>
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
