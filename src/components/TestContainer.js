import { useEffect, useState } from 'react';
import PropertyList from './PropertyList';
import PropertyView from './PropertyView';

export default function TestContainer() {

  const API_URL = 'http://localhost:3000/api/v1';

  const [properties, setProperties] = useState()

  useEffect(() => {
    getProperties();
  }, [])

  async function getProperties() {

    try {
      let res = await fetch(`${API_URL}/properties`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      res.json()
        .then(jsonRes => {
          setProperties(jsonRes)
        })

    } catch(error) {

      console.log(error);
    }
  }

  const [property, setProperty] = useState(null);

  const handlePropertyClick = (id) => {
    setProperty(
      properties.find(property => property.id === id)
    )
  }

  return (
    <div>
      {
        properties ?
        <PropertyList 
          properties={properties}
          onPropertyClick={handlePropertyClick}
        /> :
        null
      }
      
      <PropertyView 
        property={property}
      />
    </div>
  )
} 
