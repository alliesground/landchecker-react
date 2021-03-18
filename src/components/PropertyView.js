export default function PropertyView(props) {
  return (
    <div data-testid="property-details-view">
      <b>
      { props.property ? props.property.longitude : null }
      </b>
    </div>
  )
}
