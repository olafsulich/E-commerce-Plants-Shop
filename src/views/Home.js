import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Products from '../components/organisms/Products';
import Hero from '../components/organisms/Hero';
import Preferences from '../components/molecules/Preferences';
import Header from '../components/organisms/Header';

const Home = () => {
  // const { plants, filtredPlants } = context;
  const { plants } = useContext(CartContext);
  // const { plants, filtredPlants } = useContext(CartContext);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Preferences plants={plants} />
        <Products plants={plants} />
      </main>
    </>
  );
};

export default Home;
