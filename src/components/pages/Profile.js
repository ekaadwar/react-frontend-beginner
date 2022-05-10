import React from 'react'
import propTypes from 'prop-types'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  getProfile,
  updateProfile,
  // updatePhotoProfile,
} from '../../redux/actions/profile'
import { authLogout, authOff } from '../../redux/actions/auth'
import { gajeel } from '../../assets/img'
import { FiEdit2 } from 'react-icons/fi'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      currentPhoto: null,
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.authOff()
    const { token } = this.props.auth
    this.props.getProfile(token).then(() => {
      this.setState({
        data: this.props.profile.data,
      })
    })
  }

  onFileChange = (event) => {
    // Update the state
    this.setState({ currentPhoto: event.target.files[0] })
    console.log(event.target.files[0])

    // this.setState((prevState) => ({
    //   data: {
    //     ...prevState.data,
    //     photo: event.target.files[0],
    //   },
    // }))
  }

  save = (event) => {
    event.preventDefault()

    // console.log(this.props.profile.data)
    console.log(this.state)
    const { token } = this.props.auth
    const prevKeys = Object.keys(this.props.profile.data)
    const prevValues = Object.values(this.props.profile.data)
    const realKeys = Object.keys(this.state.data)
    const realValues = Object.values(this.state.data)
    const length = prevKeys.length

    let keys = ''

    if (this.state.currentPhoto) {
      keys += 'photo'
      this.props.updateProfile(token, null, null, this.state.currentPhoto)
    }

    for (let i = 0; i < length; i++) {
      if (prevValues[i] !== realValues[i]) {
        if (keys !== '') {
          keys += ', '
        }
        keys += `${prevKeys[i]}`
        this.props.updateProfile(token, realKeys[i], realValues[i]).then(() => {
          this.setState({ data: this.props.profile.data })
        })
      }
    }

    if (keys !== '') {
      window.alert(`${keys} have been updated`)
      this.redirect()
    }
  }

  redirect = () => {
    return <Redirect to="/" />
  }

  render() {
    return (
      <section className="profile pt-20 bg-gray-200">
        <div className="container mx-auto pb-20 px-5 box-border">
          <h3 className="text-4xl font-bold text-white py-10 text-shadow">
            User Profile
          </h3>

          <form
            onSubmit={(event) => this.save(event)}
            className="data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20"
          >
            <div className="flex flex-col justify-between items-center py-10 w-full bg-white border-b-8 border-yellow-900 rounded-2xl max-w-xs md:max-w-none mx-auto px-2">
              <div className="z-10 relative">
                <div className="overflow-hidden h-28 w-28 bg-blue-200 rounded-full">
                  <img
                    src={
                      this.state.data.photo !== null
                        ? this.state.data.photo
                        : gajeel
                    }
                    alt="My Profile"
                  />
                </div>

                <label
                  htmlFor="inputFile"
                  className="z-10 absolute flex justify-center items-center -mt-10 ml-20 h-10 w-10 bg-yellow-900 hover:bg-yellow-700 rounded-full"
                >
                  <FiEdit2 size={20} color="#fff" />
                </label>
              </div>

              <input
                className="hidden"
                id="inputFile"
                type="file"
                onChange={this.onFileChange}
              />

              <div>
                <h4 className="text-2xl font-bold text-center">
                  {this.state.data.display_name}
                </h4>
                <p className="text-sm text-center">{this.state.data.email}</p>
              </div>

              <p className="text-center">Let's order your product now!</p>
            </div>

            <div className="lg:col-span-2">
              <div className="card w-full bg-white border-b-8 border-yellow-900 rounded-2xl">
                <div className="flex flex-col h-full px-5 pt-5 pb-10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-600">
                      Contacts
                    </h3>

                    <button
                      onClick={(event) => event.preventDefault()}
                      className="flex justify-center items-center h-12 w-12 bg-yellow-900 hover:bg-yellow-700 rounded-full self-end"
                    >
                      <FiEdit2 size={20} color="#fff" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="grid lg:grid-cols-2 gap-5 lg:mb-10">
                      <div className="">
                        <p className="text-xl text-gray-400">Email address :</p>
                        <input
                          className="focus:outline-none py-2 w-full border-b border-black  placeholder-gray-700"
                          type="email"
                          name="email"
                          value={
                            this.state.data.email ? this.state.data.email : ''
                          }
                          onChange={(event) =>
                            this.setState((prevState) => ({
                              data: {
                                ...prevState.data,
                                email: event.target.value,
                              },
                            }))
                          }
                        />
                      </div>

                      <div className="">
                        <p className="text-xl text-gray-400">Mobile Number :</p>
                        <input
                          className="focus:outline-none py-2 w-full border-b border-black placeholder-gray-700"
                          type="text"
                          name="phone"
                          value={
                            this.state.data.mobile_number
                              ? this.state.data.mobile_number
                              : ''
                          }
                          onChange={(event) =>
                            this.setState((prevState) => ({
                              data: {
                                ...prevState.data,
                                mobile_number: event.target.value,
                              },
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-xl text-gray-400">Delivery Address:</p>
                      <textarea
                        className="focus:outline-none py-2 w-full border-b border-black placeholder-gray-700"
                        type="text"
                        name="address"
                        value={
                          this.state.data.address ? this.state.data.address : ''
                        }
                        onChange={(event) =>
                          this.setState((prevState) => ({
                            data: {
                              ...prevState.data,
                              address: event.target.value,
                            },
                          }))
                        }
                        rows="3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="focus:outline-none card w-full bg-white border-b-8 border-yellow-900 rounded-2xl">
                <div className="flex flex-col justify-between h-full px-5 pt-5 pb-10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-10">
                    <h3 className="text-3xl font-bold text-gray-600">
                      Details
                    </h3>

                    <button
                      onClick={(event) => event.preventDefault()}
                      className="flex justify-center items-center h-12 w-12 bg-yellow-900 hover:bg-yellow-700 rounded-full self-end sm:self-center"
                    >
                      <FiEdit2 size={20} color="#fff" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                    <div className="col-span-3 sm:col-span-2 space-y-5">
                      <div>
                        <p className="text-xl text-gray-400">Display Name</p>
                        <input
                          className="focus:outline-none py-2 w-full border-b border-black  placeholder-gray-700"
                          type="text"
                          name="name"
                          value={
                            this.state.data.display_name
                              ? this.state.data.display_name
                              : ''
                          }
                          onChange={(event) =>
                            this.setState((prevState) => ({
                              data: {
                                ...prevState.data,
                                display_name: event.target.value,
                              },
                            }))
                          }
                        />
                      </div>

                      <div className="">
                        <p className="text-xl text-gray-400">First Name:</p>
                        <input
                          className="focus:outline-none py-2 w-full border-b border-black placeholder-gray-700"
                          type="text"
                          name="firstName"
                          value={
                            this.state.data.first_name
                              ? this.state.data.first_name
                              : ''
                          }
                          onChange={(event) =>
                            this.setState((prevState) => ({
                              data: {
                                ...prevState.data,
                                first_name: event.target.value,
                              },
                            }))
                          }
                        />
                      </div>

                      <div className="">
                        <p className="text-xl text-gray-400">Last Name:</p>
                        <input
                          className="focus:outline-none py-2 w-full border-b border-black placeholder-gray-700"
                          type="lastName"
                          name="lastName"
                          value={
                            this.state.data.last_name
                              ? this.state.data.last_name
                              : ''
                          }
                          onChange={(event) =>
                            this.setState((prevState) => ({
                              data: {
                                ...prevState.data,
                                last_name: event.target.value,
                              },
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-1 grid grid-cols-2 gap-x-5">
                      <div className="sm:col-span-2">
                        <p className="text-xl text-gray-400">DD/MM/YY</p>
                        <input
                          className="focus:outline-none py-2 w-full border-b border-black placeholder-gray-700"
                          type="text"
                          name="birth_date"
                          value={
                            this.state.data.birth ? this.state.data.birth : ''
                          }
                          onChange={(event) =>
                            this.setState((prevState) => ({
                              data: {
                                ...prevState.data,
                                birth: event.target.value,
                              },
                            }))
                          }
                        />
                      </div>

                      <div className="sm:col-span-2 row-span-2 space-y-5">
                        {/* <div>
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            placeholder="male"
                            checked={profile.gender === "male" && true}
                          />
                          <label
                            className="text-xl text-yellow-700 hover:text-yellow-900 ml-3"
                            for="male"
                          >
                            Male
                          </label>
                          <br />
                        </div> */}

                        {/* <div>
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            placeholder="female"
                            checked={profile.gender === "female" && true}
                          />
                          <label
                            className="text-xl text-yellow-700 hover:text-yellow-900 ml-3"
                            for="female"
                          >
                            Female
                          </label>
                          <br />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between w-full ">
              <h3 className="text-shadow text-xl text-center font-bold text-white mb-5">
                Do you want to save the
                <br />
                change?
              </h3>

              <div className="space-y-5 mb-5">
                <button
                  onClick={this.submitData}
                  className="bg-yellow-900 py-3 w-full text-white rounded-2xl hover:bg-yellow-800"
                >
                  Save Change
                </button>

                <button
                  onClick={(event) => event.preventDefault()}
                  className="bg-yellow-400 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-yellow-500"
                >
                  Cancel
                </button>
              </div>

              <div className="space-y-5 mb-5">
                <button
                  onClick={(event) => event.preventDefault()}
                  className="flex justify-between bg-white px-5 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-gray-300"
                >
                  <p>Edit Password</p>
                  <span>{'>'}</span>
                </button>

                <button
                  onClick={this.props.authLogout}
                  className="flex justify-between bg-white px-5 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-gray-300"
                >
                  <p>Log Out</p>
                  <span>{'>'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

Profile.defaultProps = {
  auth: {},
  getProfile: () => {},
  updateProfile: () => {},
}

Profile.propTypes = {
  auth: propTypes.object,
  getProfile: propTypes.func,
  updateProfile: propTypes.func,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

const mapDispatchToProps = {
  getProfile,
  updateProfile,
  // updatePhotoProfile,
  authLogout,
  authOff,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
