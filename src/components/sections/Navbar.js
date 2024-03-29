import React, { useState } from 'react'
import ButtonCircle from '../components/ButtonCircle'
import logo from '../../img/logo/coffee.png'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Sling as Hamburger } from 'hamburger-react'
import { authLogout } from '../../redux/actions/auth'
import {
  // HiViewList,
  HiSearch as Search,
} from 'react-icons/hi'
import { TiMessages } from 'react-icons/ti'
import { gajeel } from '../../assets/img'

const Navbar = ({ auth, profile }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onAuthNav = () => (
    <div className="flex flex-row space-x-5 items-center">
      <Search size={30} />
      <TiMessages size={30} />
      <ButtonCircle
        to={'/profile'}
        content={() => (
          <div className="flex justify-center">
            <img
              src={profile.data.photo !== null ? profile.data.photo : gajeel}
              alt={
                profile.data.display_name !== null
                  ? profile.data.display_name
                  : 'Gajeel'
              }
            />
          </div>
        )}
        rounded="full"
      />
    </div>
  )

  return (
    <nav className="h-24 py-4 fixed bg-white w-full shadow-md z-40">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex justify-between box-content">
          <Link to="/" className="flex items-center flex-row">
            <img src={logo} alt="Logo Eka Coffee" className="mr-3" />
            <h3 className="hidden md:block font-bold text-yellow-900 text-xl">
              Eka Coffee
            </h3>
          </Link>

          {/* <button className="flex lg:hidden justify-center items-center w-10 h-10 bg-yellow-900 hover:bg-yellow-800 rounded-md">
            <HiViewList size={30} color="#fff" />
          </button> */}

          <div
            className="lg:hidden"
            // onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger
              toggled={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              color="#854d0e"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-16 ">
            <Link
              to={(location) => {
                return { ...location, pathname: '/' }
              }}
            >
              Home
            </Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Your Cart</Link>
            <Link to="/history">History</Link>
          </div>

          {auth.token !== null ? (
            <div className="hidden lg:block">{onAuthNav()}</div>
          ) : (
            <div className="hidden lg:flex items-center space-x-16">
              <Link to="/login">Login</Link>
              <Link to="/signup">
                <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          id="toggleMenu"
          className=" block lg:hidden bg-gradient-to-b from-white pb-20"
        >
          <div className="container mx-auto px-4 lg:px-10 flex flex-col my-5 space-y-5 items-end pr-3">
            {/* <Link to="/">Home</Link> */}
            <Link
              to={(location) => {
                return { ...location, pathname: '/' }
              }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link to="/product" onClick={() => setIsOpen(false)}>
              Product
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              Your Cart
            </Link>
            <Link to="/history" onClick={() => setIsOpen(false)}>
              History
            </Link>

            {auth.token !== null ? (
              <div onClick={() => setIsOpen(false)}>{onAuthNav()}</div>
            ) : (
              <div className="flex flex-row space-x-3 font-bold">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <p>|</p>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

const mapDispatchToProps = {
  authLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
