import React from 'react'

import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Navbar from '../sections/Navbar'
import Home from '../pages/Home'

const CustomeRoute = ({ auth = false, path = '', component = Home }) => {
  return (
    <>
      {auth !== false && <Navbar />}
      <Route path={path} component={component} />
    </>
  )
}

export default connect()(CustomeRoute)
