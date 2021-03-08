import { useEffect, useState } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {

  const handleMarkerClick = (markerProps) => {
    props.onMarkerClick(markerProps)
  }

  const propertyMarkers = () => {
    return props.properties.data.map((property, index) => {
      return (
        <Marker
          id={property.id}
          key={index}
          position={{
            lat: property.latitude, 
            lng: property.longitude
          }}
          onClick={handleMarkerClick}
        />
      )
    })
  }

  return (
    <div>
      <Map 
        google={props.google}
        zoom={4}
        initialCenter={{ lat: -25.007819154909 , lng: 134.35168708717748 }}
      >
        {
          (props.properties.completed ? propertyMarkers() : null)
        }
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBOZgMZiZkgyLm_skMivxnZZdSLYa3DlBI'
})(MapContainer);

