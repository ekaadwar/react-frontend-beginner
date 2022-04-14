import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
// import ProductDetail from "../pages/ProductDetail";
import ProductDetailFunc from "../pages/ProductDatailFunc";
import ForgotPassword from "../pages/ForgotPassword";

class Routes extends React.Component {
  data = {
    isAuth: 0,
  };

  componentDidMount() {
    this.props.change(this.data);
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Products} />
        <Route path="/product/:id" component={ProductDetailFunc} />
        <Route path="/cart" component={Cart} />
        <Route path="/history" component={History} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-pass" component={ForgotPassword} />
        <Route part="/profile" component={Profile} />
      </Switch>
    );
  }
}

export default Routes;
