import { http } from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const toggleAuth = () => {
  return {
    type: "AUTH_TOGGLE",
  };
};

export const authLogin = (username, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();

    form.append("username", username);
    form.append("password", password);

    const { data } = await http().post(`${URL}/auth/login`, form.toString());

    dispatch({
      type: "AUTH_LOGIN",
      payload: data.results.token,
    });
  };
};
