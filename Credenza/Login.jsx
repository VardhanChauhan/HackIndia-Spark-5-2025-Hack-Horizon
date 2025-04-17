import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful!');
        window.location.href = '/dashboard.html';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    const email = prompt('Enter your email to reset password:');
    if (email) {
      fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        });
    }
  };

  return (
    <div className="auth-page">
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="input"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="page-link">
          <span
            className="page-link-label"
            onClick={handleForgotPassword}
            id="forgotPassword"
          >
            Forgot Password?
          </span>
        </p>
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>
      <p className="sign-up-label">
        Don't have an account?
        <span className="sign-up-link">
        <Link to="/signup">Sign up</Link>
        </span>
      </p>
    </div>
    </div>
  );
};

export default Login;
