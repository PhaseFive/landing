import React, { Component } from 'react';
// import logo from './logo.svg';
// import './NavBar.css';
import Link from './Link';

class NavBar extends Component {
  render() {
    return (
      <div id="NavBar">
        This is the NavBar component!
        <Link url="#NavBar">navbar</Link>
        <Link url="#Title">title</Link>
        <Link url="#ContactForm">contactform</Link>
        <Link url="#Footer">footer</Link>
        {/* <header className="NavBar-header">
          <img src={logo} className="NavBar-logo" alt="logo" />
          <h1 className="NavBar-title">Welcome to React</h1>
        </header>
        <p className="NavBar-intro">
          To get started, edit <code>src/NavBar.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default NavBar;
