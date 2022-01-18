import { applyMiddleware } from '@reduxjs/toolkit'
import { restaurantReducer } from './store/restaurant/reducers'
import createSagaMiddleware from 'redux-saga'
import watchAllRestaurants from './store/restaurant/sagas'
import { createStore, combineReducers } from 'redux'
import { RootState } from './store/RootState'

const appReducer = combineReducers<RootState>({
  RestaurantState: restaurantReducer
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAllRestaurants)

export default store;
