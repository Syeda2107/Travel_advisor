import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';
import { styled } from '@mui/material/styles';

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 200,
}));

const List = ({ places = [], type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Attractions and Hotels around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControlStyled className={classes.formControl}>
            {/* <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}> */}
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControlStyled>
          <FormControlStyled className={classes.formControl}>
            {/* <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}> */}
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControlStyled>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;