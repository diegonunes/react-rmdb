import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';

import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import CarregarMais from './elements/CarregarMais';
import FilmeThumb from './elements/FilmeThumb';
import BarraBusca from './elements/BarraBusca';
import Carregando from './elements/HeroImage';

import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);

  return (
    <>
      <HeroImage />
      <BarraBusca />
      <Grid />
      <FilmeThumb />
      <Carregando />
      <CarregarMais />
    </>
  );
};

export default Home;
