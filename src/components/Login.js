import React from 'react';
import '../styles/Login.css';
import Logo from '../Assets//logo.jpg'; 
import Login from '../Assets/Login.jpeg'; 

const LoginC = () => {
  return (
    <div className="container">
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <img src={Logo} alt="Logo" className="login-logo" />
          <h2>Log in</h2>
          <p>Please log in to your account.</p>
          <form>
            <div className="form-group">
              <label>Username or email*</label>
              <input type="text" placeholder="Username or email" required />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="login-button">Sign In</button>
          </form>
          <div className="login-links">
            <a href="#" className="forgot-password">Forgot password?</a>
            <p>
              I don’t have an account yet. <a href="#" className="sign-up-link">Sign in</a>
            </p>
          </div>
        </div>
      </div>
      <div className="login-image-container" style={{ backgroundImage: `url(${Login})` }}>
      </div>
    </div>
    </div>
  );
};

export default LoginC;

