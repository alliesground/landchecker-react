import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {

  return (
    <div>
      <Map 
        google={props.google}
        zoom={14}
        initialCenter={{ lat: -37.9373447811622 , lng: 145.449895817713 }}
      >
        <Marker 
          position={{ lat: -37.9373447811622, lng: 145.449895817713 }}
        />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBOZgMZiZkgyLm_skMivxnZZdSLYa3DlBI'
})(MapContainer);

