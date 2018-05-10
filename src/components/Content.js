import React, { Component } from 'react';
import PropTypes from 'prop-types';

import icon from '../assets/img/kolko_kwadrat2.svg';
import fb from '../assets/img/fb1.svg';
import tw from '../assets/img/tw.svg';
import g from '../assets/img/g+.svg';

class Content extends Component {

  render() {

    return (
      <div className='content'>
        <h3 className='content__text'>Not to make you feel dizzy but the challenge is worth it. Aim high, have fun, <span className='content__text-bold-white'>be awesome.</span></h3>
        <img className='content__icon' src={icon}></img>
        <div className='social'>
          <p className='social__text'>Look carefully and notice every detail, nothing tricky though.</p>
          <ul className='social__wrapper'>
            <li className='social__item'><img className='social__icon' src={fb}></img><span className='spacer'> / </span><span>awesome</span></li>
            <li className='social__item'><img className='social__icon' src={tw}></img><span className='spacer'> / </span><span>awesome</span></li>
            <li className='social__item'><img className='social__icon-g' src={g}></img><span className='spacer'> / </span><span>awesome</span></li>
          </ul>
        </div>
        <div className='triangle'><div className='triangle__bg'></div><p className='triangle__text'>MORE</p><p className='triangle__plus'>+</p></div>
      </div>
    );
  }
}

export default Content;
