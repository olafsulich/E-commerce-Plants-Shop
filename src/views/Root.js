import React from 'react';
import Header from '../components/organisms/Header';
import MainTemplate from '../templates/MainTemplate';
import Hero from '../components/organisms/Hero';
import Navigation from '../components/organisms/Nav';
import Products from '../components/organisms/Products';

const Root = () => (
  <MainTemplate>
    <>
      <Header />
      <main>
        <Hero />
        <Navigation />
        <Products />
      </main>
    </>
  </MainTemplate>
);
export default Root;
