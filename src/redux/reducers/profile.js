const initialState = {
  data: {},
  msg: '',
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_GET': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'PROFILE_UPDATE': {
      return {
        ...state,
        msg: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default profile
