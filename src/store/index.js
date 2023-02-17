import { applyMiddleware, combineReducers, createStore } from "redux";
import { basketReducer } from "./basket/basketReducer";
import { mealsReducer } from "./meals/mealsRedux";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
  meals: mealsReducer,
  basket: basketReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
