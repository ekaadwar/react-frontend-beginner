import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/ProductClass'
import Cart from '../pages/Cart'
import History from '../pages/History'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import ProductDetail from '../pages/ProductDetail'
import ForgotPassword from '../pages/ForgotPassword'
import PrivateRoute from '../components/PrivateRoute'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Products} />
        <Route path="/product/:id" component={ProductDetail} />

        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>

        <PrivateRoute path="/history">
          <History />
        </PrivateRoute>

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-pass" component={ForgotPassword} />

        <PrivateRoute part="/profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    )
  }
}

export default Routes
