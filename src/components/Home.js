import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <Link to="/about">This is Home. Go to About.</Link>
  </div>
);

export default Home;
