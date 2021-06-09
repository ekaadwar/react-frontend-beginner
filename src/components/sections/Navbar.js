import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="py-4 fixed bg-white w-full shadow-md">
            <div className="container mx-auto">
              <div className="flex justify-between">
                <div className="flex items-center flex-row">
                  <img
                    src={this.props.image}
                    alt="Logo Eka Coffee"
                    className="mr-3"
                  />
                  <Link to="/">Eka Coffee</Link>
                </div>
                <div className="flex items-center space-x-16 ">
                  <Link to="/">Home</Link>
                  <Link to="/product">Product</Link>
                  <Link to="/cart">Your Cart</Link>
                  <Link to="/history">History</Link>
                </div>
                <div className="flex items-center space-x-16">
                  <Link to="/login">Login</Link>
                  <Link to="/signup">
                    <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/history" component={History} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
