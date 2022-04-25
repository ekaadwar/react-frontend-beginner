import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProducts =
  (token = null, search = "", sort = "", sortType = "ASC") =>
  async (dispatch) => {
    const initialUrl = `${URL}/items`;
    let url;
    // if (search !== "") {
    //   url += `?search=${search}`;
    //   console.log(url);
    // }

    if (search !== "" && sort !== "") {
      url = initialUrl + `?search=${search}&sort[${sort}]=${sortType}`;
    } else if (search !== "") {
      url = initialUrl + `?search=${search}`;
    } else if (sort !== "") {
      url = initialUrl + `?sort[${sort}]=${sortType}`;
    } else {
      url = initialUrl;
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
