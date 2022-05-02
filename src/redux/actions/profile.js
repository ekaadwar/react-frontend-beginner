/* eslint-disable no-undef */
import http from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getProfile = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/users/profil`)
    dispatch({
      type: 'PROFILE_GET',
      payload: data.results,
    })
  } catch (err) {
    console.log(err)
  }
}

export const updateProfile = (token, key, value) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append(key, value)

    try {
      const { data } = await http(token).patch(`${URL}/users`, form.toString())
      dispatch({
        action: 'PROFILE_UPDATE',
        payload: data.message,
      })
    } catch (error) {
      window.alert(error.response.data.message)
    }
  }
}
