import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/items`);
  } catch (err) {
    window.alert(err.reponse.data.message);
  }
};

export const getDetailProduct = () => {};
