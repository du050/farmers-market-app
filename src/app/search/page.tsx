'use client';
import React from 'react';
import dynamic from 'next/dynamic';


const MapClient = dynamic(() => import('@/components/layout/MapClient'),{
  ssr: false,
});

export default function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
      <MapClient />
    </div>
  );
}
