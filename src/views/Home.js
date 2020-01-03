import React from 'react';
import Navigation from '../components/organisms/Nav';
import Products from '../components/organisms/Products';
import Hero from '../components/organisms/Hero';

const Home = () => (
  <>
    <main>
      <Hero />
      <Navigation />
      <Products />
    </main>
  </>
);

export default Home;
