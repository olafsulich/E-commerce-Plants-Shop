import React from 'react';
import Header from '../components/molecules/Header';
import MainTemplate from '../templates/MainTemplate';
import WelcomeStyle from '../theme/WelcomeStyle';
import Navigation from '../components/molecules/Nav';

const Root = () => (
  <MainTemplate>
    <>
      <Header />
      <WelcomeStyle />
      <Navigation />
    </>
  </MainTemplate>
);
export default Root;
