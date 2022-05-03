const initialState = {
  onAuth: false,
  token: null,
  errMsg: '',
  msg: '',
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_TOGGLE': {
      return {
        ...state,
        onAuth: !state.onAuth,
      }
    }
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload,
      }
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      }
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        msg: action.payload,
      }
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
      }
    }
    case 'AUTH_ON': {
      return {
        ...state,
        onAuth: true,
      }
    }
    case 'AUTH_OFF': {
      return {
        ...state,
        onAuth: false,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default auth
