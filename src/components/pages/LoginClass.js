import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { toggleAuth, authLogin } from '../../redux/actions/auth'
import { coffeeLogo } from '../../assets/img'

class LoginClass extends React.Component {
  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    this.props.toggleAuth()
  }

  onLogin = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.authLogin(username, password)
  }

  componentDidUpdate() {
    const { token } = this.props.auth
    if (token !== null) {
      this.props.toggleAuth()
      this.props.history.push('/')
    }
  }
  render() {
    const { errMsg } = this.props.auth

    return (
      <section className="auth">
        <div className="bg-white md:bg-transparent min-h-screen">
          <div className="container h-full mx-auto">
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 bg-white">
                <div className="py-16 px-2 sm:px-10 lg:px-16 space-y-7">
                  <div className="flex justify-between mb-20">
                    <Link to="/" className="flex items-center flex-row">
                      <img
                        src={coffeeLogo}
                        alt="Logo Eka Coffee"
                        className="mr-3"
                      />
                      <h3 className="hidden lg:block font-bold text-yellow-900 text-xl">
                        Eka Coffee
                      </h3>
                    </Link>

                    <Link to="/signup">
                      <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                        Sign Up
                      </button>
                    </Link>
                  </div>

                  <h3 className="text-yellow-800 text-2xl font-bold text-center">
                    Login
                  </h3>

                  {errMsg !== '' && (
                    <div className="bg-red-300 text-red-900  font-bold p-2 rounded-md">
                      {errMsg}
                    </div>
                  )}

                  <form
                    className="space-y-7 max-w-md mx-auto"
                    onSubmit={this.onLogin}
                  >
                    <div>
                      <h4 className="bold">Email Address :</h4>
                      <input
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        onChange={(e) =>
                          this.setState({ username: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <h4 className="bold">Password:</h4>
                      <input
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>

                    <Link
                      to="/forgot-pass"
                      className="inline-block text-yellow-800 font-bold"
                    >
                      Forgot password?
                    </Link>

                    {/* <Link to="/profile"> */}
                    <button
                      className="block bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-xl font-bold w-full"
                      type="submit"
                    >
                      Login
                    </button>
                    {/* </Link> */}

                    <div>
                      <Link to="signup">
                        <button className="block bg-white hover:bg-gray-300 border-2 border-gray-300 px-5 py-2 rounded-xl font-bold w-full">
                          Login with google
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispachToProps = { toggleAuth, authLogin }

export default connect(mapStateToProps, mapDispachToProps)(LoginClass)
