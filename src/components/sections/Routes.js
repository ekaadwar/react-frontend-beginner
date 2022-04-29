import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/ProductClass";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
// import ProductDetail from "../pages/ProductDetail";
// import ProductDetailFunc from "../pages/ProductDatailFunc";
import ProductDetail from "../pages/ProductDetail";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "../components/PrivateRoute";
import SpecialRoute from "../components/SpecialRoute";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <SpecialRoute path="/" exact>
          <Home />
        </SpecialRoute>
        {/* <SpecialRoute path="/product">
          <Products />
        </SpecialRoute> */}
        <Route path="/product" component={Products} />
        <SpecialRoute path="/product/:id">
          <ProductDetail />
        </SpecialRoute>
        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
        <PrivateRoute path="/history">
          <History />
        </PrivateRoute>
        <SpecialRoute authPage path="/login">
          <Login />
        </SpecialRoute>
        <SpecialRoute authPage path="/signup">
          <Signup />
        </SpecialRoute>
        <SpecialRoute authPage path="/forgot-pass">
          <ForgotPassword />
        </SpecialRoute>
        <PrivateRoute part="/profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    );
  }
}

export default Routes;
