import React from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

function Home () {

  return(
    <div className="Home">
      <div className={"home-title"}>
        <h1 className="home-title-text">
          <Typist cursor={{ hideWhenDone: true }}>
            ryanchacon.io
          </Typist>
        </h1>

      </div>

    </div>
  )
};



// class Home extends React.Component {
//   state = {typing: true}
//   done = () => {
//     this.setState({ typing: false }, () => {
//       setTimeout(() => this.setState({ typing: true }), this.props.timeout || 1200);
//     });
//   }
//   render() {
//     return this.state.typing ?
//       <Typist onTypingDone={this.done}>ryanchacon</Typist>
//       : <span>ryanchacon</span>;
//   }
// }

export default Home;
