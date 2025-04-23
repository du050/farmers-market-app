'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function MapClient() {
    const [position, setPosition] = React.useState<{lat: number, lng: number} | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    useEffect(() => {
        if(!navigator.geolocation) {
            setError('Geolocation is not supported by this browser.');
            
        }
        navigator.geolocation.getCurrentPosition((position => {
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            
        }
        ), (error) => {
            setError(error.message);
        
        });
    }, []);

    if (error) return <p>{error}</p>;
    if (!position) return <p>Getting your location...</p>;

  return (
    <MapContainer center={[position.lat, position.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={[position.lat, position.lng]}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
}
