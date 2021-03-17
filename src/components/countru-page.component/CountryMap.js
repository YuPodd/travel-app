import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export default function CountryMap(props) {
  return (
    <MapContainer
      className="markercluster-map"
      center={props.country.location}
      zoom={10}
      maxZoom={20}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      >
      <Marker position={props.country.location} />
      <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
        />
    </MapContainer>
  );

}
