import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.leftPanel}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757110.png"
          alt="Welcome"
          style={styles.image}
        />
      </div>
      <div style={styles.rightPanel}>
        <h2 style={styles.title}>Welcome to User Profile App</h2>
        <p style={styles.subtitle}>Please login or sign up to continue</p>
        <div style={styles.buttonGroup}>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/signup" style={{ ...styles.button, backgroundColor: '#28a745' }}>Sign Up</Link>
        </div>
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
    fontSize: '28px',
    marginBottom: '1rem',
    color: '#e74c3c',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '2rem',
    color: '#555',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 25px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default Home;
