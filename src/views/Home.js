import React from 'react';
import PropTypes from 'prop-types';
import { withPlantConsumer } from '../context/PlantContext';
import Products from '../components/organisms/Products';
import Hero from '../components/organisms/Hero';
import Preferences from '../components/molecules/Preferences';
import Header from '../components/organisms/Header';

const Home = ({ context }) => {
  const { plants, filtredPlants } = context;
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Preferences plants={plants} />
        <Products plants={filtredPlants} />
      </main>
    </>
  );
};
Home.propTypes = {
  context: PropTypes.any.isRequired,
};

export default withPlantConsumer(Home);
