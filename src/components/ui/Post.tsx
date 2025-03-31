// components/Post.tsx
import React from 'react';
import styles from '../../styles/Post.module.css'; // We'll create this CSS module next

interface User {
  name: string;
  avatar: string;
}

interface PostProps {
  user: User;
  content: string;
  image?: string | null;
  timestamp: string;
  likes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({ user, content, image, timestamp, likes, comments }) => {
  return (
    <div className={styles.post}>
      {/* Post Header */}
      <div className={styles.postHeader}>
        <img src={user.avatar} alt={user.name} className={styles.postAvatar} />
        <div className={styles.postUserInfo}>
          <h3>{user.name}</h3>
          <span className={styles.postTime}>{timestamp}</span>
        </div>
        <button className={styles.postOptions}>...</button>
      </div>
      
      {/* Post Content */}
      <div className={styles.postContent}>
        <p>{content}</p>
        {image && <img src={image} alt="Post" className={styles.postImage} />}
      </div>
      
      {/* Post Stats */}
      <div className={styles.postStats}>
        <span>{likes} likes</span>
        <span>{comments} comments</span>
      </div>
      
      {/* Post Actions */}
      <div className={styles.postActions}>
        <button className={styles.likeButton}>Like</button>
        <button className={styles.commentButton}>Comment</button>
        <button className={styles.shareButton}>Share</button>
      </div>
    </div>
  );
};

export default Post;