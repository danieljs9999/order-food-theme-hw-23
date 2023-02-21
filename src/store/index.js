import { applyMiddleware, combineReducers, createStore } from "redux";
import { basketSlise } from "./basket/basketSlise";
import { maealsSlise } from "./meals/mealsSlise";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
  [maealsSlise.name]: maealsSlise.reducer,
  [basketSlise.name]: basketSlise.reducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
