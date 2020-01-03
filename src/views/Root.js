import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Header from '../components/organisms/Header';
import Home from './Home';
import NotFound from './NotFound';
import SinglePlant from './SinglePlant';
import Login from './Login';
import Checkout from './Checkout';
import { auth } from '../firebase/Firebase';

class Root extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
        <MainTemplate>
          <Header currentUser={currentUser} />
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
  }
}

export default Root;
