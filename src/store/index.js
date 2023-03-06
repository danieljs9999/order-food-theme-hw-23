/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { basketSlise } from './basket/basket.slise'
import { maealsSlise } from './meals/meals.slise'
import { uiSlise } from './ui/ui.slise'

const rootReduser = combineReducers({
  [maealsSlise.name]: maealsSlise.reducer,
  [basketSlise.name]: basketSlise.reducer,
  [uiSlise.name]: uiSlise.reducer,
})

export const store = createStore(rootReduser, applyMiddleware(thunk))
