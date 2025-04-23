import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { VenderMarkerProps } from '../../interfaces/interfaces';

export default function VenderMarker({ mapData }: VenderMarkerProps) {
  return(
    <>
    {mapData.map((item) => (
      <Marker
        key={`${item.id}-${item.vender_name}`}
        position={[item.latitude, item.longitude]}
        icon={
          item.icon_url
            ? new L.Icon({ // Use L.Icon here
                iconUrl: item.icon_url,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
              })
            : undefined
        }
      >
        <Popup>{item.vender_name}</Popup>
      </Marker>
    ))}
  </>
);
}