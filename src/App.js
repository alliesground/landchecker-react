import './App.css';
import Map from './components/MapContainer';
import { useEffect, useState } from 'react';
import PropertyDetails from './components/PropertyDetails';

const App = () => {

  const API_URL = 'http://localhost:3000/api/v1';

  const [properties, setProperties] = useState({
    data: null,
    loading: false,
    completed: false,
    error: false
  });

  const [
    propertyDetailsView, 
    setPropertyDetailsView
  ] = useState(false)

  const [property, setProperty] = useState({})

  const handleMarkerClick = (markerProps) => {
    setPropertyDetailsView(true)

    setProperty(
      properties.data.find(property => property.id === markerProps.id)
    )

  }

  const handleClosePropertyDetailsView = () => {
    setPropertyDetailsView(false)
  }

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

  return (
    <div className="App">
      <Map 
        properties={properties}
        onMarkerClick={handleMarkerClick}
      />

      <PropertyDetails 
        property={property}
        onClosePropertyDetailsView={handleClosePropertyDetailsView}
        propertyDetailsView={propertyDetailsView}
      />
    </div>
  );
}

export default App;
