import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Header from '../components/organisms/Header';
import Home from './Home';
import NotFound from './NotFound';
import SinglePlant from './SinglePlant';
import Login from './Login';
import Checkout from './Checkout';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/:id" component={SinglePlant} />
        <Route component={NotFound} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
