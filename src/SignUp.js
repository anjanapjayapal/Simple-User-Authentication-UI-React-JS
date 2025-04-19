import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("❌ Passwords don't match!");
      setSuccess(false);
    } else if (email && username && password) {
      setMessage('✅ Sign up successful!');
      setSuccess(true);
    } else {
      setMessage('❌ Please fill all fields');
      setSuccess(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.leftPanel}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757110.png"
          alt="signup visual"
          style={styles.image}
        />
      </div>
      <div style={styles.rightPanel}>
        <h2 style={styles.title}>Sign Up</h2>
        {message && <p style={success ? styles.success : styles.error}>{message}</p>}
        <form onSubmit={handleSignUp} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        {success && (
          <p style={{ marginTop: '1rem' }}>
            <Link to="/login" style={styles.linkButton}>Go to Login</Link>
          </p>
        )}
        {!success && (
          <p style={styles.text}>
            Already have an account? <Link to="/login" style={styles.link}>Login</Link>
          </p>
        )}
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
  button: {
    padding: '10px 20px',
    width: '84%',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  linkButton: {
    backgroundColor: '#007bff',
    padding: '10px 20px',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  text: {
    marginTop: '1rem',
    fontSize: '14px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  success: {
    color: 'green',
    marginBottom: '1rem',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
  },
};

export default SignUp;
