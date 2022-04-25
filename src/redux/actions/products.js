import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProducts =
  (token = null, search = "") =>
  async (dispatch) => {
    let url = `${URL}/items`;
    if (search !== "") {
      url += `?search=${search}`;
      console.log(url);
    }
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
