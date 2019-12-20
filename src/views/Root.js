import React from 'react';
import Header from '../components/organisms/Header';
import MainTemplate from '../templates/MainTemplate';
import WelcomeStyle from '../theme/WelcomeStyle';
import Navigation from '../components/organisms/Nav';
import Product from '../components/molecules/Product';

const Root = () => (
  <MainTemplate>
    <>
      <Header />
      <main>
        <WelcomeStyle />
        <Navigation />
        <Product />
      </main>
    </>
  </MainTemplate>
);
export default Root;
