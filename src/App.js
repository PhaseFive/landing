import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CardPaper from './components/CardPaper'
import { deepPurple, red, green } from 'material-ui/colors'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      ...deepPurple
    },
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <CardPaper />
      </MuiThemeProvider>
    );
  }
}

export default App;
