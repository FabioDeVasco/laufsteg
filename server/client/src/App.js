import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import { Font, FONT_URL } from './utils';

import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import Header from './components/Header';
import NextEvent from './components/NextEvent';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Brands from './components/Brands';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="App">
        <Element name="header">
          <Header />
        </Element>
        <Element name="next-event">
          <NextEvent />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element name="about-us">
          <AboutUs />
        </Element>
        <Element name="brands">
          <Brands />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    );
  }
}

injectGlobal([
  `
  @import url(${FONT_URL});


  html, body {
    font-family: ${Font.PRIMARY};
    margin: 0;
  }
`,
]);

export default App;
