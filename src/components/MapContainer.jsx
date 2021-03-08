import { useEffect, useState } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  const API_URL = 'http://localhost:3000/api/v1';

  const [properties, setProperties] = useState({
    data: null,
    loading: false,
    completed: false,
    error: false
  });

  useEffect(() => {
    getProperties();
  }, [])

  async function getProperties() {
    setProperties({
      ...properties,
      data: properties.data,
      loading: true
    })

    try {
      let res = await fetch(`${API_URL}/properties`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      res.json()
        .then(jsonRes => {
          setProperties({
            data: jsonRes,
            loading: false,
            completed: true,
            error: false
          })
        })

    } catch(error) {

      console.log(error);
    }
  }

  const propertyMarkers = () => {
    return properties.data.map((property, index) => {
      return (
        <Marker
          key={index}
          position={{
            lat: property.latitude, 
            lng: property.longitude
          }}
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
          (properties.completed ? propertyMarkers() : null)
        }
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBOZgMZiZkgyLm_skMivxnZZdSLYa3DlBI'
})(MapContainer);

