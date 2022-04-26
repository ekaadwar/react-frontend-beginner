import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProducts =
  (token = null, params = {}) =>
  async (dispatch) => {
    const initialUrl = `${URL}/items`;
    let url = initialUrl;

    const paramKeys = Object.keys(params);
    const paramValues = Object.values(params);
    const paramLength = paramKeys.length;

    if (paramLength > 0) {
      url += "?";
      for (let i = 0; i < paramLength; i++) {
        if (i > 0) {
          url += "&";
        }
        if (paramKeys[i] === "sort") {
          const sortArray = paramValues[i].split("-");
          paramKeys[i] = `sort[${sortArray[0]}]`;
          paramValues[i] = sortArray[1];
        }
        url += `${paramKeys[i]}=${paramValues[i]}`;
      }
    }

    console.log(url);

    try {
      const { data } = await http(token).get(url);
      dispatch({
        type: "PRODUCT_GET_LIST",
        payload: data,
      });
    } catch (err) {
      window.alert(err.response.data.message);
    }
  };

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/items/${id}`);
    dispatch({
      type: "PRODUCT_GET_DETAIL",
      payload: data,
    });
  } catch (err) {
    window.alert(err.response.data.message);
  }
};
