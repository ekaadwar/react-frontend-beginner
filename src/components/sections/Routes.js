import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/ProductClass'
import Cart from '../pages/Cart'
import History from '../pages/History'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
// import ProductDetail from "../pages/ProductDetail";
// import ProductDetailFunc from "../pages/ProductDatailFunc";
import ProductDetail from '../pages/ProductDetail'
import ForgotPassword from '../pages/ForgotPassword'
import PrivateRoute from '../components/PrivateRoute'
// import SpecialRoute from '../components/SpecialRoute'
// import CustomeRoute from '../components/CustomeRoute'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* <SpecialRoute path="/" exact>
          <Home />
        </SpecialRoute> */}
        <Route path="/" exact component={Home} />

        {/* <SpecialRoute path="/product">
          <Products />
        </SpecialRoute> */}
        <Route path="/product" component={Products} />
        {/* <CustomeRoute path="/product" componet={Products} /> */}
        {/* <PrivateRoute path="/product" priv={false}>
          <Products />
        </PrivateRoute> */}

        {/* <SpecialRoute path="/product/:id">
          <ProductDetail />
        </SpecialRoute> */}
        <Route path="/product/:id" component={ProductDetail} />

        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
        {/* <Route path="/cart" component={Cart} /> */}

        <PrivateRoute path="/history">
          <History />
        </PrivateRoute>
        {/* <Route path="/history" component={History} /> */}

        {/* <SpecialRoute authPage path="/login">
          <Login />
        </SpecialRoute> */}
        <Route path="/login" component={Login} />

        {/* <SpecialRoute authPage path="/signup">
          <Signup />
        </SpecialRoute> */}
        <Route path="/signup" component={Signup} />

        {/* <SpecialRoute authPage path="/forgot-pass">
          <ForgotPassword />
        </SpecialRoute> */}
        <Route path="/forgot-pass" component={ForgotPassword} />

        <PrivateRoute part="/profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    )
  }
}

export default Routes
