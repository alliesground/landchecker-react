import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const StyledDrawer = withStyles({ 
  root: { pointerEvents: "none", }, 
  paper: { 
    pointerEvents: "auto" ,
    padding: "30px"
  } 
})(props => <Drawer {...props} />);

const PropertyDetails = (props) => {

  const handleCloseView = () => {
    props.onClosePropertyDetailsView()
  }

  return (
    <React.Fragment key='right'>
      <Button 
        onClick={handleCloseView}
        color="secondary"
        variant="contained"
      >
        Close Info
      </Button>

      <StyledDrawer 
        anchor='right' 
        open={props.propertyDetailsView} 
        BackdropProps={
          {
            invisible: true,
          }
        }
      >
        <Typography
          color="textSecondary"
        >
          ID
        </Typography>
    
        <Typography variant="h5" component="h2">
          { props.property.id }
        </Typography>

        <Divider variant="middle" />

        <Typography
          color="textSecondary"
        >
          Council Property Number
        </Typography>
    
        <Typography variant="h5" component="h2">
          { props.property.council_property_number }
        </Typography>

        <Divider variant="middle" />

        <Typography
          color="textSecondary"
        >
          Latitude
        </Typography>
    
        <Typography variant="h5" component="h2">
          { props.property.latitude }
        </Typography>

        <Divider variant="middle" />

        <Typography
          color="textSecondary"
        >
          Longitude
        </Typography>
    
        <Typography variant="h5" component="h2">
          { props.property.longitude }
        </Typography>

      </StyledDrawer>
    </React.Fragment>
  )
}

export default PropertyDetails;

