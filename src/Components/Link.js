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
      </div>
    );
  }
}

export default Link;
