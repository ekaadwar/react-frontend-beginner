import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import carts from "./carts";
import auth from "./auth";
import items from "./items";
import products from "./products";

const persistAuth = {
  storage,
  key: "auth",
};

const reducer = combineReducers({
  carts,
  auth: persistReducer(persistAuth, auth),
  items,
  products,
});

export default reducer;
