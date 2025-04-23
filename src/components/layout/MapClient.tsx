'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getVendorLocations } from '@/lib/supabase_crud'
import { Location } from "../../interfaces/interfaces";
import  VenderMarker from '../../components/ui/VenderMarker';

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});



export default function MapClient() {
    const [position, setPosition] = React.useState<{lat: number, lng: number} | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    const [vendorLocations, setVendorLocations] = useState<Location[]>([]);

    useEffect(() => {
        if(!navigator.geolocation) {
            setError('Geolocation is not supported by this browser.');
            return;
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

    useEffect(() => {
      async function fetchLocations() {
        const { data, error } = await getVendorLocations();
        if (data) {
          setVendorLocations(data);
          console.log("Vendor Locations Data:", data);
        } else if (error) {
          console.error('Error fetching vendor locations:', error);
        }
      }
      fetchLocations();
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
      <VenderMarker mapData={vendorLocations} />
    </MapContainer>
  );
}
