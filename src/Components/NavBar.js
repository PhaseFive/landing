import React, { Component } from 'react';
// import logo from './logo.svg';
import './NavBar.css';
import Link from './Link';

class NavBar extends Component {
  render() {
    return (
      <div id="NavBar" className="NavBar">
        <Link url="#NavBar">navbar</Link>
        <Link url="#Title">title</Link>
        <Link url="#ContactForm">contactform</Link>
        <Link url="#Footer">footer</Link>
      </div>
    );
  }
}

export default NavBar;
