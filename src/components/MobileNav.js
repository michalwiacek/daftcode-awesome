import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

import logo from '../assets/img/logo_awesome.svg';

class MobileNav extends Component {

  render() {

    return (
      <div className='mobile-nav'>
        <Nav />
      </div>
    );
  }
}

export default MobileNav;
