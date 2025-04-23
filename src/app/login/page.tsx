// pages/login.tsx
'use client';

import { useRouter } from 'next/navigation';
import styles from '../../styles/Profile.module.css';
import AuthButtons from '../../components/ui/AuthButtons';

const Login: React.FC = () => {
  const router = useRouter();
 

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
