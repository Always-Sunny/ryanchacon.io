import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'What do you have to say?'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="About">
        <div className="About-Container">
          <div className="about-content">
            <div className="about-content-container">
              <h1>Content</h1>
            </div>

          </div>
          <div className="about-form-container">
            <form className="about-form" onSubmit={this.handleSubmit}>
              <label className="about-label">
                <textarea className="about-textarea" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
