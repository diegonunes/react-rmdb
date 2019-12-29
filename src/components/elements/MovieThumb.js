import React from 'react';

import { SytledMovieThumb, StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? <img src={image} alt="moviethumb" className="clickable" /> : <img src={image} alt="moviethumb" />}
  </StyledMovieThumb>
);

export default MovieThumb;
