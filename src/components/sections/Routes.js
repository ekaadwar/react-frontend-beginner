import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact component={Product} />
      <Route path="/product/detail" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/history" component={History} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route part="/profile" component={Profile} />
    </Switch>
  );
}

export default Routes;
