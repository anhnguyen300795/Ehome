import React from 'react';
import { connect } from 'react-redux';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.marker.position}>
    <Marker
      {...props.marker}
     />
  </GoogleMap>
));

const Container = (<div style={{ height: `352px` }} />)
const MapElement = (<div style={{ height: `100%` }} />)

export class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const marker = {
      position: {
        lat: this.props.latitude,
        lng: this.props.longitude,
      },
      defaultAnimation: 2
    }

    return (
      <MapComponent 
      containerElement = {Container}
      mapElement = {MapElement}
      marker = { marker }
      />
    );
  }
}

export default Map
