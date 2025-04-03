// components/ui/Card.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Card.module.css'; // Create this CSS module for styling

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image for the vendor
  className?: string;
  children?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      {imageUrl && <Image src={imageUrl} alt={title} className={styles.cardImage} width={300} height={200} />}
      {imageUrl && <img src={imageUrl} alt={title} className={styles.cardImage} />}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <button className={styles.cardButton}>View Vendor</button>
    </div>
  );
};

export default Card;

