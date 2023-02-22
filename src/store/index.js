import { applyMiddleware, combineReducers, createStore } from "redux";
import { basketSlise } from "./basket/basketSlise";
import { maealsSlise } from "./meals/mealsSlise";
import thunk from "redux-thunk";
import { uiSlise } from "./ui/uiSlise";

const rootReduser = combineReducers({
  [maealsSlise.name]: maealsSlise.reducer,
  [basketSlise.name]: basketSlise.reducer,
  [uiSlise.name]: uiSlise.reducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
