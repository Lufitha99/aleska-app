import React, { useState } from 'react';
import '../styles/SignupForm.css'; 
import Form from '../Assets/Form.jpeg';
import Logo from '../Assets/logo.jpg';




const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    cityOrCountry: '',
    username: '',
    password: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="header">
          <img src={Logo} alt="Logo" className="logo" />
          <h2>Sign up</h2>
          <p>Create an account.</p>
        </div>
        <div className="form-grid">
        <div className="input-group">
        <label>Firstname*</label>
          <input type="text" name="firstname" placeholder="Firstname*" onChange={handleChange} required />
          </div>
          <div className="input-group">
          <label>Lastname*</label>
          <input type="text" name="lastname" placeholder="Lastname*" onChange={handleChange} required />
          </div>
          <div className="input-group">
          <label>Email*</label>
          <input type="email" name="email" placeholder="Email*" onChange={handleChange} required />
          </div>
          <div className="input-group">
          <label>City or Country*</label>
          <input type="text" name="cityOrCountry" placeholder="City or country*" onChange={handleChange} required />
          </div>
          <div className="input-group">
          <label>Username*</label>
          <input type="text" name="username" placeholder="Username*" onChange={handleChange} required />
          </div>
          <div className="input-group">
          <label>Password*</label>
          <input type="password" name="password" placeholder="Password*" onChange={handleChange} required />
          </div>
          <div className="input-group">
          <label>Phone*</label>
          <input type="tel" name="phone" placeholder="Phone*" onChange={handleChange} required />
          </div>
          <div className="input-group">
          <label>Address*</label>
          <input type="text" name="address" placeholder="Address*" onChange={handleChange} required />
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="Form-image-container" style={{ backgroundImage: `url(${Form})` }}>
      </div>
    </div>
  );
};

export default SignUpForm;

