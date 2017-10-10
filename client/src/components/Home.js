import React from 'react';
import Typed from 'typed.js';
import Header from './Header';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onComplete: false,
    };
  }
  componentDidMount() {
    const options = {
      strings: ['ryanchacon.io', 'Ryan Andrew Chacon', 'RAC'],
      // strings: ["Ryan Andrew Chacon"],
      typeSpeed: 50,
      backSpeed: 40,
      smartBackspace: true,
      showCursor: false,
      onComplete: () => { console.log(this.state), this.setState({ onComplete: true }), console.log(this.state); },
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
    const isCompleted = this.state.onComplete;
    let fadeIn = null;
    if (isCompleted) {
      fadeIn = <div className="tagline">Built With NodeJS and React</div>;
      }
      return (
        <div className="Home">
          <div className="heading">
            <span
              className="intro"
              ref={(el) => { this.el = el; }}
              />
            {fadeIn}
          </div>
        </div>
      );
    }
  }


  export default Home;
