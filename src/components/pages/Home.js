import React from 'react'

import Jumbotron from '../components/home/Jumbotron'
import Advantages from '../components/home/Advantages'
import Favorites from '../components/home/Favorites'
import Spots from '../components/home/Spots'
import Partners from '../components/home/Partners'
import Testimony from '../components/home/Testimony'

import { connect } from 'react-redux'
import { authOff } from '../../redux/actions/auth'

class Home extends React.Component {
  componentDidMount() {
    this.props.authOff
  }
  render() {
    return (
      <>
        <Jumbotron />
        <Advantages />
        <Favorites />
        <Spots />
        <Partners />
        <Testimony />
      </>
    )
  }
}

const mapDispatchToProps = {
  authOff,
}

export default connect(null, mapDispatchToProps)(Home)
