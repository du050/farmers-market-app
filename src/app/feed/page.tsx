'use client';
import React, { useState } from 'react';
import styles from '../../styles/Feed.module.css';
import Post from '../../components/ui/Post';

const Feed: React.FC = () => {
  const [postInput, setPostInput] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Enhanced Posts data with categories
  const posts = [
    {
      id: 1,
      user: {
        name: 'Fresh Farm Produce',
        avatar: '/bee8.jpg',
        verified: true,
      },
      content: 'Just harvested a fresh batch of organic strawberries! Come by our stall this weekend for a sweet treat! 🍓 #organic #freshproduce',
      image: '/bee4.jpg',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      category: 'produce',
      location: 'North End Market'
    },
    {
      id: 2,
      user: {
        name: 'Honey Haven',
        avatar: '/bee1.jpg',
        verified: true,
      },
      content: 'Our new batch of wildflower honey is now available! Limited stock, so get yours before it\'s gone! #localhoney #sustainable',
      image: '/bee3.jpg',
      timestamp: '5 hours ago',
      likes: 42,
      comments: 12,
      category: 'specialty',
      location: 'Downtown Market'
    },
    {
      id: 3,
      user: {
        name: 'Bread & Butter Bakery',
        avatar: '/bee9.jpg',
        verified: false,
      },
      content: 'Fresh sourdough bread coming out of the oven in 30 minutes! Who\'s ready for warm bread? #artisanbread #freshbaked',
      image: null,
      timestamp: '1 day ago',
      likes: 56,
      comments: 15,
      category: 'bakery',
      location: 'West Side Market'
    },
    {
      id: 4,
      user: {
        name: 'Green Acres Dairy',
        avatar: '/bee5.jpg',
        verified: true,
      },
      content: 'New aged gouda cheese now available! Made with milk from our grass-fed cows and aged for 18 months. Perfect for your weekend cheese board! #artisancheese #localdairy',
      image: '/bee9.jpg',
      timestamp: '3 hours ago',
      likes: 37,
      comments: 9,
      category: 'dairy',
      location: 'Riverside Market'
    },
    {
      id: 5,
      user: {
        name: 'Market Manager',
        avatar: '/bee9.jpg',
        verified: true,
      },
      content: 'MARKET UPDATE: Due to the forecast, we\'ll be setting up extra tents this weekend. All vendors will be protected from the rain, so come shop rain or shine! #marketday #communityevent',
      image: '/bee2.jpg',
      timestamp: '1 hour ago',
      likes: 89,
      comments: 23,
      category: 'announcement',
      location: 'All Markets'
    },
  ];

  // Filter posts based on selected category
  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.category === filter);

  // Handle post submission
  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (postInput.trim()) {
      // Here you would typically send the new post to an API
      alert(`New post submitted: ${postInput}`);
      setPostInput('');
    }
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.feedContainer}>
        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          <button 
            className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Posts
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'produce' ? styles.active : ''}`} 
            onClick={() => setFilter('produce')}
          >
            Produce
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'bakery' ? styles.active : ''}`} 
            onClick={() => setFilter('bakery')}
          >
            Bakery
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'dairy' ? styles.active : ''}`} 
            onClick={() => setFilter('dairy')}
          >
            Dairy
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'specialty' ? styles.active : ''}`} 
            onClick={() => setFilter('specialty')}
          >
            Specialty
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'announcement' ? styles.active : ''}`} 
            onClick={() => setFilter('announcement')}
          >
            Announcements
          </button>
        </div>
        
        {/* Create Post Box */}
        <div className={styles.createPost}>
          <form onSubmit={handleSubmitPost}>
            <div className={styles.postInput}>
              <img src="/images/user-avatar.jpg" alt="User" className={styles.userAvatar} />
              <input 
                type="text" 
                placeholder="What's fresh at your stall today?" 
                value={postInput}
                onChange={(e) => setPostInput(e.target.value)}
              />
            </div>
            <div className={styles.postActions}>
              <button type="button" className={styles.photoButton}>
                <span>📷</span> Photo
              </button>
              <button type="button" className={styles.videoButton}>
                <span>🎥</span> Video
              </button>
              <button type="button" className={styles.eventButton}>
                <span>📅</span> Event
              </button>
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={!postInput.trim()}
              >
                Post
              </button>
            </div>
          </form>
        </div>
        
        {/* Posts List */}
        <div className={styles.postsList}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Post 
                key={post.id}
                user={post.user}
                content={post.content}
                image={post.image}
                timestamp={post.timestamp}
                likes={post.likes}
                comments={post.comments}
                location={post.location}
              />
            ))
          ) : (
            <div className={styles.noPostsMessage}>
              No posts in this category yet. Be the first to share!
            </div>
          )}
        </div>
        
        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreButton}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;