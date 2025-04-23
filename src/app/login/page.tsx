// pages/login.tsx
'use client';
import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';
import Button from '../../components/ui/Button' // Adjust the path as necessary

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className={styles.loginContainer}>
      <h1>Login to FarmConnect</h1>
      <form onSubmit={(e) => {
        e.preventDefault(); 
      }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <Button label="Log In" className={styles.button} onClick={() => console.log('Logged In')}></Button>
      </form>
    </div>
  );
};

export default Login;
