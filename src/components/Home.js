import React from 'react';
import { Link } from 'react-router-dom';
import FilterBar from './FilterBar';

const Home = () => (
  <div className="Home">
      <FilterBar />
    <Link to="/about">This is Home. Go to About.</Link>
  </div>
);

export default Home;
