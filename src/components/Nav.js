import React, { Component } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class Nav extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      buttonText: PropTypes.string,
    })),
  }
  state = {
    selectedItem: undefined
  }
  onItemClick = (event) => {
    const { buttonText: selectedItem } = event.currentTarget;
    this.setState({
      selectedItem,
    });
  };
  

  render() {
    const items = [
      {buttonText: 'features' },
      {buttonText: 'case studies' },
      {buttonText: 'about' },
      ]
    //const { items } = this.props;
    const { selectedItem } = this.state;
    return (
      <ul className='nav__list'>
        {items && items.length > 0 ?
          items.map(item => 
            <li className='nav__item'>
            <Button
              key={item.buttonText}
              buttonText={item.buttonText}
              onClick={this.onItemClick}
              setState={{ active: selectedItem === item.buttonText ? 'true' : 'false' }}
            >
              {item.buttonText}
            </Button></li>
          ) : 'kwas'}
        
        <li className='nav__item'><Button buttonClass='button__type2' link="#contact" buttonText="contact"/></li>
      </ul>
    );
  }
}

export default Nav;