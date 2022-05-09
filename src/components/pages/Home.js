import React from 'react'

import Jumbotron from '../components/home/Jumbotron'
import Advantages from '../components/home/Advantages'
import Favorites from '../components/home/Favorites'
import Spots from '../components/home/Spots'
import Partners from '../components/home/Partners'
import Testimony from '../components/home/Testimony'

import { connect } from 'react-redux'
import { authOff } from '../../redux/actions/auth'
import { getProfile } from '../../redux/actions/profile'

class Home extends React.Component {
  componentDidMount() {
    this.props.authOff()
    if (this.props.auth.token !== null) {
      this.props.getProfile(this.props.auth.token)
    }
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

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  authOff,
  getProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
