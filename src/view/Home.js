import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Content from '../components/Content';
class Home extends React.Component {


  render() {
    

    return (
      <section className='home'>
        <Header />
        <Content />
      </section>
    );
  }
}

export default Home;
