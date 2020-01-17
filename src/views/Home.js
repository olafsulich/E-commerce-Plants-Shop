import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Products from '../components/organisms/Products';
import Hero from '../components/organisms/Hero';
import Preferences from '../components/molecules/Preferences';
import Header from '../components/organisms/Header';
const Home = () => {
  const { plants, filtredPlants } = useContext(CartContext);
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

export default Home;
