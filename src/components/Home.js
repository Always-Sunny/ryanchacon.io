import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class Home extends React.Component {
  componentDidMount() {
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: ["ryanchacon.io","Ryan Andrew Chacon","RAC"],
      typeSpeed: 50,
      backSpeed: 30,
      smartBackspace: true,
      showCursor: false
      // onComplete: (self) => {}
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="Home">
        <div className="heading">
          <span
            className="intro"
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
            />
        </div>
      </div>
    );
  }
}









export default Home;
