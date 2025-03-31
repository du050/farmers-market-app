import React from 'react';
import styles from '../../styles/Feed.module.css';
import Post from '../../components/ui/Post';

const Feed: React.FC = () => {
  // Posts data
  const posts = [
    {
      id: 1,
      user: {
        name: 'Fresh Farm Produce',
        avatar: '/images/farm-avatar.jpg',
      },
      content: 'Just harvested a fresh batch of organic strawberries! Come by our stall this weekend for a sweet treat! 🍓',
      image: '/images/strawberries.jpg',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      user: {
        name: 'Honey Haven',
        avatar: '/images/honey-avatar.jpg',
      },
      content: 'Our new batch of wildflower honey is now available! Limited stock, so get yours before it\'s gone!',
      image: '/images/honey-jars.jpg',
      timestamp: '5 hours ago',
      likes: 42,
      comments: 12,
    },
    {
      id: 3,
      user: {
        name: 'Bread & Butter Bakery',
        avatar: '/images/bakery-avatar.jpg',
      },
      content: 'Fresh sourdough bread coming out of the oven in 30 minutes! Who\'s ready for warm bread?',
      image: null,
      timestamp: '1 day ago',
      likes: 56,
      comments: 15,
    },
  ];

  return (
    <div className={styles.mainContent}>
      <div className={styles.feedContainer}>
        {/* Create Post Box */}
        <div className={styles.createPost}>
          <div className={styles.postInput}>
            <img src="/images/user-avatar.jpg" alt="User" className={styles.userAvatar} />
            <input type="text" placeholder="What's fresh today?" />
          </div>
          <div className={styles.postActions}>
            <button className={styles.photoButton}>
              <span>📷</span> Photo
            </button>
            <button className={styles.videoButton}>
              <span>🎥</span> Video
            </button>
            <button className={styles.eventButton}>
              <span>📅</span> Event
            </button>
          </div>
        </div>
        
        {/* Posts List */}
        <div className={styles.postsList}>
          {posts.map(post => (
            <Post 
              key={post.id}
              user={post.user}
              content={post.content}
              image={post.image}
              timestamp={post.timestamp}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;