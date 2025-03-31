// pages/login.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Profile.module.css'; // Adjust the path as necessary

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to authenticate the user
    router.push('/feed'); // Redirect to the feed page
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login to FarmConnect</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
