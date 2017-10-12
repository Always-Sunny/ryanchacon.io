import React from 'react';

const About = () => (
  <div className="About">
    <div className="About-Container">

      <div className="about-header">
        <h1 className='name'>Ryan Chacon</h1>
        <img style={imgStyle} src='/images/tom.jpg'/>
        <img src='gifs/source-wall.gif'/>
      </div>

      <p className="p1">Self-taught college programmer majoring in philosophy. I love lions, tigers, and bears; oh my.</p>
      <p>test</p>

    </div>
  </div>
);

const imgStyle = {
  height: '300px',
  dispay: 'inline-block',
};

export default About;
