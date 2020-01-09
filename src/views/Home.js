import React from 'react';
import Products from '../components/organisms/Products';
import Hero from '../components/organisms/Hero';
import Preferences from '../components/molecules/Preferences';

const Home = () => (
  <>
    <main>
      <Hero />
      <Preferences />
      <Products />
    </main>
  </>
);

export default Home;
