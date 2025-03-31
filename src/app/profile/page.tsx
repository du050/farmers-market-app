// pages/profile.tsx
import React from 'react';
import styles from '../../styles/Profile.module.css'; // Adjust the path as necessary

const Profile: React.FC = () => {
  return (
      <div className={styles.profileContainer}>
        <h2>Your Profile</h2>
        <div className={styles.profileInfo}>
          <h3>Username</h3>
          <p>Email: example@example.com</p>
        </div>
        <button className={styles.button}>Edit Profile</button>
      </div>
  );
};

export default Profile;
