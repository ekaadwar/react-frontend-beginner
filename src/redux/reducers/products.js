const initialState = {
  data: [],
  pageInfo: {},
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_GET_LIST": {
      return {
        ...state,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
