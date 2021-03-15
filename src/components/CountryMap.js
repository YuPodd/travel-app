import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default class CountryMap extends React.Component {
  render() {
    return (
      <MapContainer
          className="markercluster-map"
          center={this.props.country.location}
          zoom={6}
          maxZoom={10}
          noWrap={true}
        >
        <Marker position={this.props.country.location}>
          <Popup>
            {this.props.country.capital}
          </Popup>
        </Marker>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
      </MapContainer>
    );
  }
}