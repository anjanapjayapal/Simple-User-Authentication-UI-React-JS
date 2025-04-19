import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setMessage('✅ Login successful!');
    } else {
      setMessage('❌ Please enter both fields');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.leftPanel}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757110.png"
          alt="login visual"
          style={styles.image}
        />
      </div>
      <div style={styles.rightPanel}>
        <h2 style={styles.title}>Login</h2>
        {message && <p style={styles.message}>{message}</p>}
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.loginButton}>Login</button>
        </form>
        <p style={styles.text}>
          <a href="#" style={styles.link}>Forgot password?</a>
        </p>
        <p style={styles.text}>
          Don't have an account? <Link to="/signup" style={styles.link}>Register</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  leftPanel: {
    flex: 1,
    backgroundColor: '#007bff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  image: {
    width: '80%',
    maxWidth: '300px',
  },
  rightPanel: {
    flex: 1,
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1.5rem',
    color: '#e74c3c',
    fontSize: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  loginButton: {
    padding: '10px 20px',
    width: '84%',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    color: 'green',
    marginBottom: '1rem',
  },
  text: {
    marginTop: '1rem',
    fontSize: '14px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Login;
