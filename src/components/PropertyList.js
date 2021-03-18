
export default function PropertyList(props) {

  const handleClick = id => (e) => {
    props.onPropertyClick(id)
  }

  const properties = props.properties.map((property) => (
    <button 
      key={property.id}
      onClick={handleClick(property.id)}
    >
      { property.id }
    </button>
  ));

  return (
    <div>
      { properties }
    </div>
  )
}
