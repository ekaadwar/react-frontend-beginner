import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
