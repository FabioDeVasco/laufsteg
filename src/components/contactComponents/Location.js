import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Location = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `75%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 49.140559, lng: 9.219895 }}
    clickableIcons={false}
    defaultClickableIcons={false}
    options={{
      scrollwheel: false,
      zoomControl: true,
    }}
  >
    <Marker position={{ lat: 49.140559, lng: 9.219895 }} />
  </GoogleMap>
));

export default Location;
