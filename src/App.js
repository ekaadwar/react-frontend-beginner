import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Logo</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/cart">Your Cart</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
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