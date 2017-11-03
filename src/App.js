import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

import { Font, FONT_URL } from './utils';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import NextEvent from './components/NextEvent';
import Contact from './components/Contact';
import OverUs from './components/OverUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NextEvent />
        <Contact />
        <OverUs />
      </div>
    );
  }
}

injectGlobal([
  `
  @font-face {
    font-family: ${Font.PRIMARY};
    font-family: ${Font.SECONDARY};
    src: url(${FONT_URL});
  }

  body {
    font-family: ${Font.PRIMARY};
    margin: 0;
  }
`,
]);

export default App;
