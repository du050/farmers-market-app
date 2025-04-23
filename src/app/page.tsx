// src/app/page.tsx
import React from 'react';
import Feed from '../app/feed/page';



export default function Home() {
  // Sample data for featured vendors
 
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      
      <Feed />
    </div>
  );
}