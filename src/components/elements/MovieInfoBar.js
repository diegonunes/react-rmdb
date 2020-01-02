import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers';
import PropTypes from 'prop-types';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="movieinfobar-info">Duração: {calcTime(time)}</span>
      </div>
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="producao" size="2x" />
        <span className="movieinfobar-info">Produção: {convertMoney(budget)}</span>
      </div>
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="arrecadacao" size="2x" />
        <span className="movieinfobar-info">Arrecadação: {convertMoney(revenue)}</span>
      </div>
    </div>
  </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
