import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Title from './Components/Title';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <NavBar />
        <Title />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
