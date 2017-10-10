import React from 'react';

const About = () => (
  <div className="About">
    <div className="About-Container">

      <div className="about-header">
        <h1 className='name'>Ryan Andrew Chacon</h1>
        <img style={imgStyle} src='/images/lex_braniac_gold.jpg'/>
      </div>

      <p className="p1">Self-taught college programmer majoring in philosophy. I love lions, tigers, and bears; oh my.</p>

    </div>
  </div>
);

const imgStyle = {
  height: '300px',
  dispay: 'inline-block',
};

export default About;
