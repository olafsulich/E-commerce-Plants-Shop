import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from '../context/CartContext';
import MainTemplate from '../templates/MainTemplate';
import { fire } from '../firebase/Firebase';
import Loader from '../components/atoms/Loader/Loader';
import ErrorBoundary from '../components/organisms/ErrorBoundary';

const Home = lazy(() => import('./Home'));
const SinglePlant = lazy(() => import('./SinglePlant'));
const Login = lazy(() => import('./Login'));
const Checkout = lazy(() => import('./Checkout'));

class Root extends React.Component {
  state = {
    user: {},
  };

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
                <Suspense fallback={<Loader />}>
                  <Login />
                </Suspense>
              ) : (
                <Switch>
                  <Suspense fallback={<Loader />}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/plants/:slug" component={SinglePlant} />
                  </Suspense>
                </Switch>
              )}
            </div>
          </MainTemplate>
        </BrowserRouter>
      </CartProvider>
    );
  }
}

export default function ErrorBoundaryFunc(props) {
  return (
    <ErrorBoundary>
      <Root {...props} />
    </ErrorBoundary>
  );
}
