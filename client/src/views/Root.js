import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from '../context/CartContext';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import SinglePlant from './SinglePlant';
import Login from './Login';
import Checkout from './Checkout';
import NotFound from './NotFound';
import { fire } from '../firebase/Firebase';

class Root extends React.Component {
  state = {
    user: {},
  };

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.authListener();
  };

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  };

  render() {
    const { user } = this.state;
    return (
      <CartProvider>
        <BrowserRouter>
          <MainTemplate>
            <div>
              {!user ? (
                <Login />
              ) : (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/checkout" component={Checkout} />
                  <Route exact path="/plants/:slug" component={SinglePlant} />
                  <Route component={NotFound} />
                </Switch>
              )}
            </div>
          </MainTemplate>
        </BrowserRouter>
      </CartProvider>
    );
  }
}

export default Root;
