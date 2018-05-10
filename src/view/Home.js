import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Content from '../components/Content';
import MobileNav from '../components/MobileNav';

class Home extends React.Component {


  render() {
    

    return (
      <section className='home'>
        <MobileNav />
        <Header />
        <Content />
      </section>
    );
  }
}

export default Home;
