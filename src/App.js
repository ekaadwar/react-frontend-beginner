import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/sections/Navbar";
import Routes from "./components/sections/Routes";
import Footer from "./components/sections/Footer";

import Logo from "./img/logo/coffee.png";

class App extends React.Component {
  state = { isAuth: 0 };

  changeAuth = (data) => {
    this.setState({ isAuth: data.isAuth });
  };

  render() {
    const { onAuth } = this.props.auth;

    return (
      <Router>
        {!onAuth && <Navbar image={Logo} />}
        <Routes change={this.changeAuth} />
        <Footer image={Logo} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
