import React, { Component } from 'react';
import Button from './Button';

class Nav extends Component {

  render() {

    return (
      <ul className='nav__list'>
        <li className='nav__item'><Button link="#features" buttonText="features"/></li>
        <li className='nav__item'><Button link="#case_studies" buttonText="case studies"/></li>
        <li className='nav__item'><Button link="#about" buttonText="about"/></li>
        <li className='nav__item'><Button buttonClass='button__type2' link="#contact" buttonText="contact"/></li>
      </ul>
    );
  }
}

export default Nav;