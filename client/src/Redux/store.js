import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AdminReducer } from "./Admin/reducer";
import { reducer as ProductReducer } from "./Product/reducer";
import { reducer as CartReducer } from "./Cart/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AdminReducer,
  ProductReducer,
  CartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
