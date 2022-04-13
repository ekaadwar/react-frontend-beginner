import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProducts =
  (token = null) =>
  async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/items`);
      dispatch({
        type: "PRODUCT_GET_LIST",
        payload: data,
      });
    } catch (err) {
      window.alert(err.response.data.message);
    }
  };

export const getDetailProduct = () => {};
