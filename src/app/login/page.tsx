// pages/login.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Profile.module.css';
import AuthButtons from '../../components/ui/AuthButtons';

const Login: React.FC = () => {
  const router = useRouter();
  /*{const [email, setEmail] = useState('');}
  const [password, setPassword] = useState('');*/  // this can be put in later

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/feed');
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login to FarmConnect</h1>
      <AuthButtons />
      <form onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
