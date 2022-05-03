/* eslint-disable no-undef */
import http from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const toggleAuth = () => {
  return {
    type: 'AUTH_TOGGLE',
  }
}

export const authLogin = (email, password, history) => {
  return async (dispatch) => {
    const form = new URLSearchParams()

    form.append('email', email)
    form.append('password', password)

    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString())
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.results.token,
      })
      history.push('/')
    } catch (error) {
      window.alert(error.response.data.message)
    }
  }
}

export const authRegister = (email, password, mobile_number, history) => {
  return async (dispatch) => {
    const form = new URLSearchParams()

    form.append('email', email)
    form.append('password', password)
    form.append('mobileNumber', mobile_number)

    console.log(mobile_number)

    try {
      const { data } = await http().post(
        `${URL}/auth/register`,
        form.toString()
      )
      dispatch({
        type: 'AUTH_REGISTER',
        payload: data.message,
      })

      history.push('/login')
      window.alert(data.message)
    } catch (error) {
      window.alert(error.response.data.message)
    }
  }
}

export const authLogout = () => ({
  type: 'AUTH_LOGOUT',
})

export const authOn = () => ({
  type: 'AUTH_ON',
})

export const authOff = () => ({
  type: 'AUTH_OFF',
})

export const setAuthToken = (token) => ({
  type: 'AUTH_LOGIN',
  payload: token,
})

export const validateToken = () => ({
  type: 'AUTH_VALIDATE',
})
