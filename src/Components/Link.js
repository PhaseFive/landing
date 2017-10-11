import React, { Component } from 'react';
// import logo from './logo.svg';
// import './Link.css';

class Link extends Component {
  constructor(props) {
    super(props)
    this.url = props.url
  }

  render() {
    return (
      <div id={`Link_${this.url}`}>
        <a href={this.url}>
          {this.props.children}
        </a>
        {/* <header className="Link-header">
          <img src={logo} className="Link-logo" alt="logo" />
          <h1 className="Link-title">Welcome to React</h1>
        </header>
        <p className="Link-intro">
          To get started, edit <code>src/Link.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default Link;
