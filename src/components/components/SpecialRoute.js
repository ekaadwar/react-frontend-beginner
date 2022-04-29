import React from 'react'

import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Navbar from '../sections/Navbar'

const SpecialRoute = ({ authPage = false, children, ...rest }) => {
  return (
    <>
      {!authPage && <Navbar />}
      <Route
        {...rest}
        render={() => {
          return children
        }}
      />
    </>
  )
}

export default connect()(SpecialRoute)
