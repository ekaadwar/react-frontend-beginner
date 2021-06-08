import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"
import Logo from "./img/logo/coffee.png"

class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <nav className="py-4 bg-white w-full">
            <div className="container mx-auto">
              <div className="flex justify-between">
                <div className="flex items-center flex-row">
                  <img src={Logo} alt="Logo Eka Coffee" className="mr-3" />
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
                  <Link to="/signup"><button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">Sign Up</button></Link>
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

function Home() {
  return <h2 className="text-yelllow-900">Home</h2>;
}

function Product() {
  return <h2 className="text-yelllow-900">Product</h2>;
}

function Cart() {
  return <h2>Cart</h2>;
}

function History() {
  return <h2>History</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Signup() {
  return <h2>Signup</h2>;
}

export default App