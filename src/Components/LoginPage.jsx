import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loginWithEmail, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await loginWithEmail(email, password);
      navigate('/dashboard');
    } catch (err) {
      let errorMessage = 'Failed to sign in. Please try again.';

      switch(err.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Account disabled';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Account not found';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password';
          break;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <h1 style={styles.logoLarge}>CONNECTIFY</h1>
        <h2 style={styles.welcome}>Welcome Back</h2>
        <p style={styles.subtitle}>Log in to access your account</p>
        
        <button 
          onClick={signInWithGoogle}
          style={styles.googleButton}
        >
          Continue with Google
        </button>

        <div style={styles.divider}>
          <span style={styles.dividerText}>or</span>
        </div>
        <form onSubmit={handleEmailLogin} style={styles.emailForm}>
        {error && <div style={styles.error}>{error}</div>}
        
        <div style={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        
        <button 
          type="submit" 
          style={styles.emailButton}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in with Email'}
        </button>
      </form>
        
        <p style={styles.terms}>
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © 2025 Your Company. All rights reserved.
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    fontSize: '14px',
    color: '#000000',
    textDecoration: 'none',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    textAlign: 'center',
  },
  logoLarge: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '20px',
  },
  welcome: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  googleButton: {
    width: '100%',
    maxWidth: '400px',
    padding: '12px 24px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
    margin: '20px 0',
  },
  dividerText: {
    padding: '0 15px',
    color: '#666',
    fontSize: '14px',
  },
  emailForm: {
    width: '100%',
    maxWidth: '400px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },
  emailButton: {
    width: '100%',
    padding: '12px 24px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  terms: {
    fontSize: '14px',
    color: '#666',
    marginTop: '30px',
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    backgroundColor: '#ffffff',
    
  },
};

export default LoginPage;