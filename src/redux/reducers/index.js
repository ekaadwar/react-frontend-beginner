import { combineReducers } from "redux";
import carts from "./carts";
import auth from "./auth";
import items from "./items";
import products from "./products";

const reducer = combineReducers({
  carts,
  auth,
  items,
  products,
});

export default reducer;
