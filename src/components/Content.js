import React, { Component } from 'react';
import PropTypes from 'prop-types';

import icon from '../assets/img/kolko_kwadrat2.svg';

class Content extends Component {

  render() {

    return (
      <div className='content'>
        <h3 className='content__text'>Not to make you feel dizzy but the challenge is worth it. Aim high, have fun, <span className='content__text-bold-white'>be awesome.</span></h3>
        <img className='content__icon' src={icon}></img>
      </div>
    );
  }
}

export default Content;
