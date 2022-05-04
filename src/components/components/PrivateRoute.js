import React from 'react'

import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Navbar from '../sections/Navbar'

const PrivateRoute = ({
  authPage = false,
  children,
  auth,
  priv = true,
  ...rest
}) => {
  const { token } = auth
  return (
    <>
      {!authPage && <Navbar />}
      <Route
        {...rest}
        render={() => {
          if (priv !== false) {
            if (token !== null) {
              return children
            } else {
              return <Redirect to="/login" />
            }
          } else {
            return children
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
