import React from 'react'

import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Navbar from '../sections/Navbar'

const PrivateRoute = ({ authPage = false, children, auth, ...rest }) => {
  const { token } = auth
  return (
    <>
      {!authPage && <Navbar />}
      <Route
        {...rest}
        render={() => {
          if (token !== null) {
            return children
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(PrivateRoute)
