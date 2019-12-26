import React from 'react';

import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import CarregarMais from './elements/CarregarMais';
import FilmeThumb from './elements/FilmeThumb';
import BarraBusca from './elements/BarraBusca';
import Carregando from './elements/HeroImage';

const Home = () => (
  <>
    <HeroImage />
    <BarraBusca />
    <Grid />
    <FilmeThumb />
    <Carregando />
    <CarregarMais />
  </>
);

export default Home;
