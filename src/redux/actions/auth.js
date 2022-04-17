import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const toggleAuth = () => {
  return {
    type: "AUTH_TOGGLE",
  };
};

export const authLogin = (email, password, history) => {
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
      history.push("/");
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };
};

export const authLogout = () => ({
  type: "AUTH_LOGOUT",
});

export const setAuthToken = (token) => ({
  type: "AUTH_LOGIN",
  payload: token,
});

export const validateToken = () => ({
  type: "AUTH_VALIDATE",
});
