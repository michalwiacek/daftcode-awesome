import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

import logo from '../assets/img/logo_awesome.svg';

class Header extends Component {

  render() {

    return (
      <header className='header'>
       <img className='logo' src={logo} alt={'logo'}/>
       <Nav />
      </header>
    );
  }
}

export default Header;
