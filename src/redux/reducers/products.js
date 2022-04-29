const initialState = {
  data: [],
  details: {},
  pageInfo: {},
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_GET_LIST': {
      return {
        ...state,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
      }
    }
    case 'PRODUCT_GET_DETAIL': {
      return {
        ...state,
        details: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default products
