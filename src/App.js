import React from "react";
import "./App.css"
import Navbar from "./components/sections/Navbar"
import Logo from "./img/logo/coffee.png"

class App extends React.Component{
  render(){
    return (
      <Navbar image = {Logo}/>   
    )
  }
}

export default App