// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Paper, Typography } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import Rating from '@mui/material/Rating';
// import useMediaQuery from '@mui/material/useMediaQuery';

// import mapStyles from '../../mapStyles';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import { LocationOnOutlined as LocationOnOutlinedIcon } from '@mui/icons-material';
import Rating from '@mui/material/Rating';

import useStyles from './styles';
// import { styled } from '@mui/material/styles';

const Map = ({ setCoordinates, setBounds, coordinates, setChildClicked, places }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

    return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD899mjOnE8oXWTGPwtE4vUIUGoL_r_i14' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={({ center, marginBounds }) => {
          setCoordinates({ lat: center.lat, lng: center.lng });
          setBounds({ ne: marginBounds.ne, sw: marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isMobile
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt={place.name}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;