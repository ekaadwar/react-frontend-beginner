import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const toggleAuth = () => {
  return {
    type: "AUTH_TOGGLE",
  };
};

export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();

    form.append("email", email);
    form.append("password", password);

    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString());

      dispatch({
        type: "AUTH_LOGIN",
        payload: data.results.token,
      });
    } catch (error) {
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: error.response.data.message,
      });
    }
  };
};
