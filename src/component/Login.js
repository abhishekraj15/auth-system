import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Basic password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // If validation passes, you can proceed with authentication logic
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form fields and error state after submission
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log('Login with Google clicked');
  };

  const handleSignUp = () => {
    // Add logic to navigate to the signup page or display a signup modal
    console.log('Navigate to signup page or display signup modal');
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login Credential</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FaLock /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="form-input"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="form-buttons">
          <button type="submit" className="login-button">
            Login
          </button>
          <button type="button" className="signup-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;